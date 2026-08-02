/**
 * Anki .apkg Import/Export + multi-format import/export (CSV, TSV, JSON deck)
 *
 * .apkg files are ZIP archives. Three variants:
 *  Legacy (Anki < 2.1.54): collection.anki2 (SQLite) + media
 *  Intermediate (Anki 2.1.54-2.1.66): collection.anki21b (SQLite, newer schema) +
 *     collection.anki2 (dummy warning) + media
 *  Modern v3 (Anki 23.10+): collection.anki21b (zstd-compressed protobuf) +
 *     collection.anki2 (dummy warning) + meta (protobuf version) + media
 */

import JSZip from 'jszip';
import initSqlJs, { type Database } from 'sql.js';
import { decompress as zstdDecompress } from 'fzstd';
import { v4 as uuidv4 } from 'uuid';
import type { Card, Deck, SyncData, UserStats, DailyStudyEntry } from '../types';
import { DEFAULT_DECK_SETTINGS } from '../types';
import { db } from './db';
import { computeStreaksFromHistory } from './gamification';

let SQL: Awaited<ReturnType<typeof initSqlJs>> | null = null;

async function getSql() {
  if (!SQL) {
    SQL = await initSqlJs({
      locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
    });
  }
  return SQL;
}

// ═══════════════════════════════════════════════════════════════════
// Minimal protobuf decoder for Anki v3 format
// ═══════════════════════════════════════════════════════════════════

/** Decoded protobuf field */
interface PbField {
  fieldNum: number;
  wireType: number;
  value: Uint8Array | number | bigint;
}

/** Read a varint from buf starting at offset. Returns [value, newOffset]. */
function readVarint(buf: Uint8Array, offset: number): [bigint, number] {
  let result = 0n;
  let shift = 0n;
  let pos = offset;
  while (pos < buf.length) {
    const byte = buf[pos];
    result |= BigInt(byte & 0x7f) << shift;
    pos++;
    if ((byte & 0x80) === 0) break;
    shift += 7n;
    if (shift > 63n) throw new Error('Varint too long');
  }
  return [result, pos];
}

/** Decode all top-level fields from a protobuf message buffer. */
function decodeFields(buf: Uint8Array): PbField[] {
  const fields: PbField[] = [];
  let pos = 0;
  while (pos < buf.length) {
    const [tag, newPos] = readVarint(buf, pos);
    pos = newPos;
    const fieldNum = Number(tag >> 3n);
    const wireType = Number(tag & 7n);

    if (fieldNum === 0) break; // invalid

    switch (wireType) {
      case 0: { // varint
        const [val, np] = readVarint(buf, pos);
        pos = np;
        fields.push({ fieldNum, wireType, value: val });
        break;
      }
      case 1: { // 64-bit fixed
        pos += 8;
        fields.push({ fieldNum, wireType, value: 0n });
        break;
      }
      case 2: { // length-delimited (string, bytes, embedded message)
        const [len, np] = readVarint(buf, pos);
        pos = np;
        const end = pos + Number(len);
        fields.push({ fieldNum, wireType, value: buf.slice(pos, end) });
        pos = end;
        break;
      }
      case 5: { // 32-bit fixed
        pos += 4;
        fields.push({ fieldNum, wireType, value: 0n });
        break;
      }
      default:
        // Unknown wire type — can't continue safely
        return fields;
    }
  }
  return fields;
}

/** Get all length-delimited fields with given number as Uint8Array */
function getRepeatedBytes(fields: PbField[], num: number): Uint8Array[] {
  return fields
    .filter(f => f.fieldNum === num && f.wireType === 2)
    .map(f => f.value as Uint8Array);
}

/** Get first string field */
function getString(fields: PbField[], num: number): string | undefined {
  const f = fields.find(f => f.fieldNum === num && f.wireType === 2);
  if (!f) return undefined;
  return new TextDecoder().decode(f.value as Uint8Array);
}

/** Get first varint field as number */
function getVarint(fields: PbField[], num: number): number {
  const f = fields.find(f => f.fieldNum === num && f.wireType === 0);
  if (!f) return 0;
  return Number(f.value as bigint);
}

/**
 * Parse Anki v3 protobuf export data (after zstd decompression).
 *
 * ExportAnkiPackageData proto layout (field numbers from Anki source):
 *   1 = repeated Note (ExportedNote)
 *   2 = repeated Card
 *   3 = repeated Deck
 *   4 = repeated Notetype
 *   ... (revlog, deck_configs, media, etc.)
 *
 * Note proto:
 *   1 = id (int64), 2 = guid (string), 3 = notetype_id (int64),
 *   4 = mtime (int64), 5 = usn (int32), 6 = tags (repeated string),
 *   7 = fields (repeated string)
 *
 * Card proto:
 *   1 = id, 2 = note_id, 3 = deck_id, 4 = template_idx,
 *   5 = mtime, 6 = usn, 7 = ctype, 8 = queue, 9 = due,
 *   10 = interval, 11 = ease_factor, 12 = reps, 13 = lapses
 *
 * Deck proto:
 *   1 = id, 2 = name
 */
function parseAnkiV3Protobuf(data: Uint8Array): {
  deckName: string;
  cards: Array<{ front: string; back: string; tags: string[]; status: Card['status']; ease: number; interval: number; reps: number; lapses: number }>;
} {
  const topFields = decodeFields(data);

  // ── Decode notes ──
  // Try field 1 first (standard), then scan other fields if empty
  let noteMessages = getRepeatedBytes(topFields, 1);
  // If field 1 yields nothing with nested messages, try other field numbers
  if (noteMessages.length === 0) {
    // Scan fields 2-8 for the one that decodes to the most valid notes
    for (let tryField = 2; tryField <= 8; tryField++) {
      const attempt = getRepeatedBytes(topFields, tryField);
      if (attempt.length > noteMessages.length) {
        // Check if these decode as notes (have nested varint + strings)
        try {
          const sample = decodeFields(attempt[0]);
          const hasId = sample.some(f => f.fieldNum === 1 && f.wireType === 0);
          const hasStrings = sample.filter(f => f.wireType === 2).length >= 2;
          if (hasId && hasStrings) {
            noteMessages = attempt;
          }
        } catch { /* skip */ }
      }
    }
  }

  const notesMap = new Map<bigint, { fields: string[]; tags: string[] }>();

  for (const noteBuf of noteMessages) {
    const nf = decodeFields(noteBuf);
    const noteId = nf.find(f => f.fieldNum === 1 && f.wireType === 0);
    if (!noteId) continue;
    const id = noteId.value as bigint;

    // Try multiple field numbers for the actual card content
    let fields: string[] = [];
    for (const fieldNum of [7, 8, 9, 10, 11]) {
      const fieldStrings = getRepeatedBytes(nf, fieldNum).map(b => new TextDecoder().decode(b));
      if (fieldStrings.length === 0) continue;

      if (fieldStrings.length === 1 && fieldStrings[0].includes('\x1f')) {
        fields = fieldStrings[0].split('\x1f');
      } else {
        fields = fieldStrings;
      }
      if (fields.length >= 2) break;
    }

    // Extract tags (usually field 6)
    let tags: string[] = [];
    for (const tagFieldNum of [6, 5]) {
      const tagStrings = getRepeatedBytes(nf, tagFieldNum).map(b => new TextDecoder().decode(b));
      if (tagStrings.length > 0) {
        tags = tagStrings.length === 1 && tagStrings[0].includes(' ')
          ? tagStrings[0].split(' ').filter(Boolean)
          : tagStrings.filter(Boolean);
        break;
      }
    }

    if (fields.length >= 2) {
      notesMap.set(id, { fields, tags });
    }
  }

  console.log(`[Anki v3] Parsed ${notesMap.size} notes from protobuf`);

  // ── Decode cards ──
  // Cards are usually in field 2 or 3 of the top-level message
  let cardMessages = getRepeatedBytes(topFields, 2);
  if (cardMessages.length === 0) {
    cardMessages = getRepeatedBytes(topFields, 3);
  }

  const cards: Array<{ front: string; back: string; tags: string[]; status: Card['status']; ease: number; interval: number; reps: number; lapses: number }> = [];
  const matchedNoteIds = new Set<bigint>();

  for (const cardBuf of cardMessages) {
    const cf = decodeFields(cardBuf);
    const noteIdField = cf.find(f => f.fieldNum === 2 && f.wireType === 0);
    if (!noteIdField) continue;
    const noteId = noteIdField.value as bigint;
    const note = notesMap.get(noteId);
    if (!note) continue;
    matchedNoteIds.add(noteId);

    const ctype = getVarint(cf, 7);
    const interval = getVarint(cf, 10);
    const easeFactor = getVarint(cf, 11);
    const reps = getVarint(cf, 12);
    const lapses = getVarint(cf, 13);

    let status: Card['status'] = 'new';
    if (ctype === 1) status = 'learning';
    else if (ctype === 2) status = 'review';

    cards.push({
      front: note.fields[0],
      back: note.fields.slice(1).join('<br>'),
      tags: note.tags,
      status,
      ease: easeFactor > 0 ? easeFactor / 1000 : 2.5,
      interval: Math.max(0, interval),
      reps,
      lapses,
    });
  }

  // If no card messages matched notes, create cards directly from notes
  // (some Anki exports have cards in a different location or the card→note
  // mapping uses different field numbers)
  if (cards.length === 0 && notesMap.size > 0) {
    console.log('[Anki v3] No card→note matches found, creating cards from notes directly');
    for (const [, note] of notesMap) {
      cards.push({
        front: note.fields[0],
        back: note.fields.slice(1).join('<br>'),
        tags: note.tags,
        status: 'new',
        ease: 2.5,
        interval: 0,
        reps: 0,
        lapses: 0,
      });
    }
  }

  console.log(`[Anki v3] Parsed ${cards.length} cards from protobuf`);

  // ── Decode deck name ──
  let deckName = '';
  const deckMessages = getRepeatedBytes(topFields, 3);
  for (const deckBuf of deckMessages) {
    const df = decodeFields(deckBuf);
    const name = getString(df, 2);
    if (name && name !== 'Default' && name.length > 0) {
      deckName = name;
      break;
    }
  }

  // If no named deck found, try first deck
  if (!deckName && deckMessages.length > 0) {
    const df = decodeFields(deckMessages[0]);
    deckName = getString(df, 2) || '';
  }

  return { deckName, cards };
}

// ── Import from .apkg ──

/**
 * Try to read notes + cards from an Anki SQLite database.
 * Works for both the legacy schema (col.decks JSON) and the modern schema
 * (separate `decks` table with either JSON or protobuf blobs).
 */
function readAnkiDb(
  ankiDb: Database,
  fallbackName: string,
): { deckName: string; cards: Array<{ front: string; back: string; tags: string[]; status: Card['status']; ease: number; interval: number; reps: number; lapses: number }> } {

  // ── Resolve deck name ──
  let deckName = fallbackName;
  try {
    // Legacy: col.decks is a JSON blob
    const decksResult = ankiDb.exec('SELECT decks FROM col');
    if (decksResult.length > 0 && decksResult[0].values.length > 0) {
      const raw = decksResult[0].values[0][0];
      if (typeof raw === 'string') {
        const decksJson = JSON.parse(raw);
        const ankiDecks = Object.values(decksJson) as Array<{ name: string; id: number }>;
        const mainDeck = ankiDecks.find(d => d.name !== 'Default') || ankiDecks[0];
        if (mainDeck?.name) deckName = mainDeck.name;
      }
    }
  } catch {
    // Modern schema may not have col.decks, or it's binary — try `decks` table
    try {
      const res = ankiDb.exec('SELECT name FROM decks LIMIT 5');
      if (res.length > 0) {
        for (const row of res[0].values) {
          const n = row[0];
          if (typeof n === 'string' && n !== 'Default') { deckName = n; break; }
        }
      }
    } catch {
      // Some versions store deck info as protobuf blob in decks.data — fall through
    }
  }

  // ── Read notes ──
  const notesResult = ankiDb.exec('SELECT id, flds, tags FROM notes');
  const notesMap = new Map<number, { fields: string[]; tags: string[] }>();

  if (notesResult.length > 0) {
    for (const row of notesResult[0].values) {
      const noteId = row[0] as number;
      const fields = (row[1] as string).split('\x1f');
      const tags = (row[2] as string).trim().split(' ').filter(Boolean);
      notesMap.set(noteId, { fields, tags });
    }
  }

  // ── Read cards ──
  const cardsResult = ankiDb.exec(
    'SELECT id, nid, type, queue, due, ivl, factor, reps, lapses FROM cards'
  );
  const cards: Array<{ front: string; back: string; tags: string[]; status: Card['status']; ease: number; interval: number; reps: number; lapses: number }> = [];

  if (cardsResult.length > 0) {
    for (const row of cardsResult[0].values) {
      const noteId = row[1] as number;
      const note = notesMap.get(noteId);
      if (!note || note.fields.length < 2) continue;

      const cardType = row[2] as number;
      const ivl = row[5] as number;
      const factor = (row[6] as number) / 1000 || 2.5;
      const reps = row[7] as number;
      const lapses = row[8] as number;

      let status: Card['status'] = 'new';
      if (cardType === 1) status = 'learning';
      else if (cardType === 2) status = 'review';

      cards.push({
        front: note.fields[0],
        back: note.fields.slice(1).join('<br>'),
        tags: note.tags,
        status,
        ease: factor,
        interval: Math.max(0, ivl),
        reps,
        lapses,
      });
    }
  }

  return { deckName, cards };
}

/** Check if a DB only contains the "Please update" dummy note */
function isOnlyUpdateWarning(ankiDb: Database): boolean {
  try {
    const res = ankiDb.exec('SELECT COUNT(*) FROM notes');
    const count = res[0]?.values[0]?.[0] as number;
    if (count > 1) return false;
    if (count === 0) return true;
    const flds = ankiDb.exec('SELECT flds FROM notes LIMIT 1');
    const text = (flds[0]?.values[0]?.[0] as string) || '';
    return text.toLowerCase().includes('please update') || text.toLowerCase().includes('latest anki');
  } catch {
    return false;
  }
}

export async function importAnkiDeck(file: File): Promise<{ deckName: string; cardCount: number }> {
  const sql = await getSql();
  const arrayBuffer = await file.arrayBuffer();
  const zip = await JSZip.loadAsync(arrayBuffer);

  const baseName = file.name.replace(/\.(apkg|colpkg)$/i, '');

  // ── Strategy 1: Try SQLite databases ──
  // Priority: collection.anki21b (might be SQLite in intermediate versions),
  //           collection.anki21, collection.anki2
  const sqliteCandidates = ['collection.anki21b', 'collection.anki21', 'collection.anki2'];
  let importedCards: Array<{ front: string; back: string; tags: string[]; status: Card['status']; ease: number; interval: number; reps: number; lapses: number }> = [];
  let resolvedDeckName = baseName;
  let success = false;

  for (const candidate of sqliteCandidates) {
    const dbFile = zip.file(candidate);
    if (!dbFile) continue;

    let ankiDb: Database | null = null;
    try {
      const dbBuffer = await dbFile.async('arraybuffer');
      ankiDb = new sql.Database(new Uint8Array(dbBuffer));

      // Quick check: does this DB have real cards or just the warning?
      if (isOnlyUpdateWarning(ankiDb)) {
        ankiDb.close();
        ankiDb = null;
        continue;
      }

      const result = readAnkiDb(ankiDb, baseName);
      if (result.cards.length > 0) {
        importedCards = result.cards;
        resolvedDeckName = result.deckName;
        success = true;
        break;
      }
    } catch {
      // Not a valid SQLite file — will try protobuf next
    } finally {
      ankiDb?.close();
    }
  }

  // ── Strategy 2: collection.anki21b may be zstd-compressed SQLite or protobuf ──
  if (!success) {
    const anki21b = zip.file('collection.anki21b');
    if (anki21b) {
      try {
        const compressedBuf = await anki21b.async('uint8array');

        // Try zstd decompression (header: 28 b5 2f fd)
        let dataBuf: Uint8Array = compressedBuf;
        if (compressedBuf[0] === 0x28 && compressedBuf[1] === 0xb5 &&
            compressedBuf[2] === 0x2f && compressedBuf[3] === 0xfd) {
          try {
            dataBuf = zstdDecompress(compressedBuf);
            console.log(`[Anki import] Zstd decompressed: ${dataBuf.length} bytes`);
          } catch {
            dataBuf = compressedBuf;
          }
        }

        // Check if decompressed data is SQLite (header: "SQLite format 3\0")
        const isSQLite = dataBuf[0] === 0x53 && dataBuf[1] === 0x51 &&
                         dataBuf[2] === 0x4c && dataBuf[3] === 0x69; // "SQLi..."

        if (isSQLite) {
          console.log('[Anki import] collection.anki21b is zstd-compressed SQLite');
          let ankiDb: Database | null = null;
          try {
            ankiDb = new sql.Database(dataBuf);

            if (!isOnlyUpdateWarning(ankiDb)) {
              const result = readAnkiDb(ankiDb, baseName);
              if (result.cards.length > 0) {
                importedCards = result.cards;
                resolvedDeckName = result.deckName;
                success = true;
              }
            }
          } catch (sqlErr) {
            console.warn('[Anki import] SQLite from anki21b failed:', sqlErr);
          } finally {
            ankiDb?.close();
          }
        } else {
          // Try as protobuf
          console.log('[Anki import] Trying protobuf parsing');
          const result = parseAnkiV3Protobuf(dataBuf);
          if (result.cards.length > 0) {
            importedCards = result.cards;
            resolvedDeckName = result.deckName || baseName;
            success = true;
          }
        }
      } catch (err) {
        console.warn('Anki v3 parsing failed:', err);
      }
    }
  }

  if (!success || importedCards.length === 0) {
    throw new Error(
      'Could not read cards from this .apkg file. The file may use an unsupported format. ' +
      'Try re-exporting from Anki with "Support older Anki versions" enabled, ' +
      'or export as "Notes in Plain Text (.txt)" and import here as CSV/TSV.'
    );
  }

  // Create deck
  const deckId = uuidv4();
  const newDeck: Deck = {
    id: deckId,
    name: resolvedDeckName,
    description: `Imported from Anki: ${file.name}`,
    color: getRandomColor(),
    icon: '📥',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    settings: { ...DEFAULT_DECK_SETTINGS },
    tags: ['imported', 'anki'],
  };

  const cards: Card[] = importedCards.map(c => ({
    id: uuidv4(),
    deckId,
    front: c.front,
    back: c.back,
    tags: c.tags,
    noteType: 'basic' as const,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    status: c.status,
    ease: c.ease,
    interval: c.interval,
    dueDate: c.status === 'new' ? Date.now() : Date.now() + c.interval * 86400000,
    lapses: c.lapses,
    reps: c.reps,
    learningStep: 0,
  }));

  await db.decks.put(newDeck);
  await db.cards.bulkPut(cards);

  return { deckName: resolvedDeckName, cardCount: cards.length };
}

// ── Export to .apkg ──

export async function exportToAnki(deckId: string): Promise<Blob> {
  const sql = await getSql();
  const deck = await db.decks.get(deckId);
  if (!deck) throw new Error('Deck not found');

  const cards = await db.cards.where('deckId').equals(deckId).toArray();

  const ankiDb = new sql.Database();

  // Create Anki schema
  ankiDb.run(`
    CREATE TABLE col (
      id integer PRIMARY KEY,
      crt integer NOT NULL,
      mod integer NOT NULL,
      scm integer NOT NULL,
      ver integer NOT NULL,
      dty integer NOT NULL,
      usn integer NOT NULL,
      ls integer NOT NULL,
      conf text NOT NULL,
      models text NOT NULL,
      decks text NOT NULL,
      dconf text NOT NULL,
      tags text NOT NULL
    )
  `);

  ankiDb.run(`
    CREATE TABLE notes (
      id integer PRIMARY KEY,
      guid text NOT NULL,
      mid integer NOT NULL,
      mod integer NOT NULL,
      usn integer NOT NULL,
      tags text NOT NULL,
      flds text NOT NULL,
      sfld text NOT NULL,
      csum integer NOT NULL,
      flags integer NOT NULL,
      data text NOT NULL
    )
  `);

  ankiDb.run(`
    CREATE TABLE cards (
      id integer PRIMARY KEY,
      nid integer NOT NULL,
      did integer NOT NULL,
      ord integer NOT NULL,
      mod integer NOT NULL,
      usn integer NOT NULL,
      type integer NOT NULL,
      queue integer NOT NULL,
      due integer NOT NULL,
      ivl integer NOT NULL,
      factor integer NOT NULL,
      reps integer NOT NULL,
      lapses integer NOT NULL,
      left integer NOT NULL,
      odue integer NOT NULL,
      odid integer NOT NULL,
      flags integer NOT NULL,
      data text NOT NULL
    )
  `);

  ankiDb.run(`
    CREATE TABLE revlog (
      id integer PRIMARY KEY,
      cid integer NOT NULL,
      usn integer NOT NULL,
      ease integer NOT NULL,
      ivl integer NOT NULL,
      lastIvl integer NOT NULL,
      factor integer NOT NULL,
      time integer NOT NULL,
      type integer NOT NULL
    )
  `);

  ankiDb.run(`CREATE TABLE graves (usn integer NOT NULL, oid integer NOT NULL, type integer NOT NULL)`);

  const now = Math.floor(Date.now() / 1000);
  const deckIdNum = 1;
  const modelId = Date.now();

  // Basic model
  const models: Record<string, unknown> = {};
  models[modelId.toString()] = {
    id: modelId,
    name: 'Basic',
    type: 0,
    mod: now,
    usn: -1,
    sortf: 0,
    did: deckIdNum,
    tmpls: [{
      name: 'Card 1',
      ord: 0,
      qfmt: '{{Front}}',
      afmt: '{{FrontSide}}<hr id=answer>{{Back}}',
      bqfmt: '',
      bafmt: '',
      did: null,
      bfont: '',
      bsize: 0,
    }],
    flds: [
      { name: 'Front', ord: 0, sticky: false, rtl: false, font: 'Arial', size: 20, media: [] },
      { name: 'Back', ord: 1, sticky: false, rtl: false, font: 'Arial', size: 20, media: [] },
    ],
    css: '.card { font-family: arial; font-size: 20px; text-align: center; color: black; background-color: white; }',
    latexPre: '',
    latexPost: '',
    latexsvg: false,
    req: [[0, 'any', [0]]],
    tags: [],
    vers: [],
  };

  const decks: Record<string, unknown> = {};
  decks[deckIdNum.toString()] = {
    id: deckIdNum,
    name: deck.name,
    mod: now,
    usn: -1,
    lrnToday: [0, 0],
    revToday: [0, 0],
    newToday: [0, 0],
    timeToday: [0, 0],
    collapsed: false,
    desc: deck.description,
    dyn: 0,
    conf: 1,
    extendNew: 10,
    extendRev: 50,
  };

  const conf = JSON.stringify({
    activeDecks: [1],
    curDeck: 1,
    newSpread: 0,
    collapseTime: 1200,
    timeLim: 0,
    estTimes: true,
    dueCounts: true,
    curModel: modelId.toString(),
    nextPos: cards.length + 1,
    sortType: 'noteFld',
    sortBackwards: false,
    addToCur: true,
  });

  const dconf = JSON.stringify({
    '1': {
      id: 1, name: 'Default', replayq: true,
      lapse: { delays: [10], mult: 0, minInt: 1, leechFails: 8, leechAction: 0 },
      rev: { perDay: 200, ease4: 1.3, fuzz: 0.05, minSpace: 1, ivlFct: 0, maxIvl: 36500, buried: false },
      new: { delays: [1, 10], ints: [1, 4, 7], initialFactor: 2500, separate: true, order: 1, perDay: 20, buried: false },
      maxTaken: 60, timer: 0, autoplay: true, mod: 0, usn: 0,
    },
  });

  ankiDb.run(
    'INSERT INTO col VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [1, now, now, now * 1000, 11, 0, -1, 0, conf, JSON.stringify(models), JSON.stringify(decks), dconf, '{}']
  );

  // Insert notes and cards
  let noteIdCounter = Date.now();
  let cardIdCounter = Date.now();

  for (const card of cards) {
    const noteId = noteIdCounter++;
    const cardId = cardIdCounter++;
    const stripHtml = card.front.replace(/<[^>]*>/g, '');
    const csum = simpleHash(stripHtml);

    ankiDb.run(
      'INSERT INTO notes VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [noteId, uuidv4().substring(0, 10), modelId, now, -1, card.tags.join(' '), `${card.front}\x1f${card.back}`, stripHtml.substring(0, 20), csum, 0, '']
    );

    let type = 0;
    let queue = 0;
    if (card.status === 'learning') { type = 1; queue = 1; }
    else if (card.status === 'review') { type = 2; queue = 2; }

    ankiDb.run(
      'INSERT INTO cards VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [cardId, noteId, deckIdNum, 0, now, -1, type, queue, card.interval || noteIdCounter, card.interval, Math.round(card.ease * 1000), card.reps, card.lapses, 0, 0, 0, 0, '']
    );
  }

  const data = ankiDb.export();
  ankiDb.close();

  // Create ZIP
  const zip = new JSZip();
  zip.file('collection.anki2', data);
  zip.file('media', '{}');

  return zip.generateAsync({ type: 'blob' });
}

// ── JSON Export/Import for sync ──

export async function exportAllData(): Promise<SyncData> {
  const [decks, cards, reviewLogs, userStats] = await Promise.all([
    db.decks.toArray(),
    db.cards.toArray(),
    db.reviewLogs.toArray(),
    db.userStats.get('main'),
  ]);

  return {
    version: 1,
    exportedAt: Date.now(),
    decks,
    cards,
    reviewLogs,
    userStats: userStats || null,
  };
}

export async function importAllData(data: SyncData, merge: boolean = true): Promise<void> {
  if (merge) {
    // Merge: newer records win
    for (const deck of data.decks) {
      const existing = await db.decks.get(deck.id);
      if (!existing || deck.updatedAt > existing.updatedAt) {
        await db.decks.put(deck);
      }
    }
    for (const card of data.cards) {
      const existing = await db.cards.get(card.id);
      if (!existing || card.updatedAt > existing.updatedAt) {
        await db.cards.put(card);
      }
    }
    for (const log of data.reviewLogs) {
      const existing = await db.reviewLogs.get(log.id);
      if (!existing) {
        await db.reviewLogs.put(log);
      }
    }
    if (data.userStats) {
      const existing = await db.userStats.get('main');
      if (!existing) {
        await db.userStats.put(data.userStats);
      } else {
        // Deep merge UserStats
        const merged = mergeUserStats(existing, data.userStats);
        await db.userStats.put(merged);
      }
    }
  } else {
    // Replace all
    await db.transaction('rw', [db.decks, db.cards, db.reviewLogs, db.userStats], async () => {
      await db.decks.clear();
      await db.cards.clear();
      await db.reviewLogs.clear();
      await db.userStats.clear();
      await db.decks.bulkPut(data.decks);
      await db.cards.bulkPut(data.cards);
      await db.reviewLogs.bulkPut(data.reviewLogs);
      if (data.userStats) await db.userStats.put(data.userStats);
    });
  }
}

// ── User Stats Merge ──

/**
 * Deep-merge two UserStats objects.
 * - studyHistory: per-day max of cards/xp/time (handles both devices recording the same day)
 * - weeklyXpHistory: per-day max
 * - achievements: union (keep earliest unlock time)
 * - xp, totalCardsStudied, totalTimeStudied: take the higher value
 * - streaks: recomputed from merged studyHistory
 */
function mergeUserStats(local: UserStats, remote: UserStats): UserStats {
  const merged = { ...local };

  // Merge studyHistory (source of truth for streaks)
  const localHist = local.studyHistory || {};
  const remoteHist = remote.studyHistory || {};
  const mergedHist: Record<string, DailyStudyEntry> = { ...localHist };

  for (const [date, remoteEntry] of Object.entries(remoteHist)) {
    const localEntry = mergedHist[date];
    if (!localEntry) {
      mergedHist[date] = remoteEntry;
    } else {
      // Take the max for each field (both devices may have studied on the same day)
      mergedHist[date] = {
        cards: Math.max(localEntry.cards, remoteEntry.cards),
        xp: Math.max(localEntry.xp, remoteEntry.xp),
        timeMs: Math.max(localEntry.timeMs, remoteEntry.timeMs),
      };
    }
  }
  merged.studyHistory = mergedHist;

  // Merge weeklyXpHistory
  const mergedWeekly = { ...local.weeklyXpHistory };
  for (const [date, xp] of Object.entries(remote.weeklyXpHistory || {})) {
    mergedWeekly[date] = Math.max(mergedWeekly[date] || 0, xp);
  }
  merged.weeklyXpHistory = mergedWeekly;

  // Merge achievements: keep all, earliest unlock wins
  const achievementMap = new Map(local.achievements.map(a => [a.id, { ...a }]));
  for (const ra of remote.achievements) {
    const existing = achievementMap.get(ra.id);
    if (!existing) {
      achievementMap.set(ra.id, { ...ra });
    } else if (ra.unlockedAt && (!existing.unlockedAt || ra.unlockedAt < existing.unlockedAt)) {
      existing.unlockedAt = ra.unlockedAt;
    }
  }
  merged.achievements = Array.from(achievementMap.values());

  // Scalar maximums
  merged.xp = Math.max(local.xp, remote.xp);
  merged.totalCardsStudied = Math.max(local.totalCardsStudied, remote.totalCardsStudied);
  merged.totalTimeStudied = Math.max(local.totalTimeStudied, remote.totalTimeStudied);
  merged.level = Math.max(local.level, remote.level);
  merged.dailyGoal = remote.dailyGoal || local.dailyGoal; // prefer remote if set

  // Recompute streaks from merged history
  const streaks = computeStreaksFromHistory(mergedHist);
  merged.currentStreak = streaks.currentStreak;
  merged.longestStreak = Math.max(streaks.longestStreak, local.longestStreak, remote.longestStreak);

  // lastStudyDate: most recent
  merged.lastStudyDate = local.lastStudyDate > remote.lastStudyDate ? local.lastStudyDate : remote.lastStudyDate;

  return merged;
}

// ── CSV / TSV Import ──

/**
 * Import cards from CSV or TSV text.
 * Expects: front<sep>back  (optionally front<sep>back<sep>tags)
 * Tags are semicolon-separated.
 * Lines starting with # are treated as comments.
 */
export async function importCSV(
  text: string,
  deckId: string,
  separator: ',' | '\t' = ',',
): Promise<number> {
  const lines = text.split(/\r?\n/).filter(l => l.trim() && !l.startsWith('#'));
  const cards: Card[] = [];

  for (const line of lines) {
    const parts = parseCSVLine(line, separator);
    if (parts.length < 2) continue;

    const front = parts[0].trim();
    const back = parts[1].trim();
    if (!front || !back) continue;

    const tags = parts[2] ? parts[2].split(';').map(t => t.trim()).filter(Boolean) : [];

    cards.push({
      id: uuidv4(),
      deckId,
      front,
      back,
      tags,
      noteType: 'basic',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      status: 'new',
      ease: 2.5,
      interval: 0,
      dueDate: Date.now(),
      lapses: 0,
      reps: 0,
      learningStep: 0,
    });
  }

  if (cards.length === 0) throw new Error('No valid cards found in the file');
  await db.cards.bulkPut(cards);
  return cards.length;
}

/** Parse a single CSV/TSV line respecting quoted fields */
function parseCSVLine(line: string, sep: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"' && line[i + 1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === sep) {
        result.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
  }
  result.push(current);
  return result;
}

// ── CSV / TSV Export ──

export async function exportDeckCSV(
  deckId: string,
  separator: ',' | '\t' = ',',
): Promise<string> {
  const cards = await db.cards.where('deckId').equals(deckId).toArray();
  const lines: string[] = [];

  // Header
  lines.push(['front', 'back', 'tags'].join(separator));

  for (const card of cards) {
    const front = escapeCSVField(card.front, separator);
    const back = escapeCSVField(card.back, separator);
    const tags = escapeCSVField(card.tags.join('; '), separator);
    lines.push([front, back, tags].join(separator));
  }

  return lines.join('\n');
}

function escapeCSVField(value: string, sep: string): string {
  // Strip HTML tags for plain text export
  const plain = value.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  if (plain.includes(sep) || plain.includes('"') || plain.includes('\n')) {
    return `"${plain.replace(/"/g, '""')}"`;
  }
  return plain;
}

// ── JSON Single Deck Import/Export ──

interface DeckExportJSON {
  format: 'flashmaster-deck';
  version: 2;
  exportedAt: number;
  deck: {
    name: string;
    description: string;
    color: string;
    icon: string;
    tags: string[];
  };
  cards: Array<{
    front: string;
    back: string;
    tags: string[];
    noteType: string;
    status: string;
    ease: number;
    interval: number;
    dueDate: number;
    lapses: number;
    reps: number;
    starRating?: number;
    flagColor?: string;
  }>;
}

export async function exportDeckJSON(deckId: string): Promise<DeckExportJSON> {
  const deck = await db.decks.get(deckId);
  if (!deck) throw new Error('Deck not found');
  const cards = await db.cards.where('deckId').equals(deckId).toArray();

  return {
    format: 'flashmaster-deck',
    version: 2,
    exportedAt: Date.now(),
    deck: {
      name: deck.name,
      description: deck.description,
      color: deck.color,
      icon: deck.icon,
      tags: deck.tags,
    },
    cards: cards.map(c => ({
      front: c.front,
      back: c.back,
      tags: c.tags,
      noteType: c.noteType || 'basic',
      status: c.status,
      ease: c.ease,
      interval: c.interval,
      dueDate: c.dueDate,
      lapses: c.lapses,
      reps: c.reps,
      starRating: c.starRating,
      flagColor: c.flagColor,
    })),
  };
}

export async function importDeckJSON(data: DeckExportJSON): Promise<{ deckName: string; cardCount: number }> {
  if (data.format !== 'flashmaster-deck') {
    throw new Error('Invalid file format. Expected a FlashMaster deck JSON file.');
  }

  const deckId = uuidv4();
  const newDeck: Deck = {
    id: deckId,
    name: data.deck.name,
    description: data.deck.description || '',
    color: data.deck.color || getRandomColor(),
    icon: data.deck.icon || '📥',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    settings: { ...DEFAULT_DECK_SETTINGS },
    tags: data.deck.tags || [],
  };

  const cards: Card[] = (data.cards || []).map(c => ({
    id: uuidv4(),
    deckId,
    front: c.front,
    back: c.back,
    tags: c.tags || [],
    noteType: (c.noteType as Card['noteType']) || 'basic',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    status: (c.status as Card['status']) || 'new',
    ease: c.ease || 2.5,
    interval: c.interval || 0,
    dueDate: c.status === 'new' ? Date.now() : (c.dueDate || Date.now()),
    lapses: c.lapses || 0,
    reps: c.reps || 0,
    learningStep: 0,
    starRating: c.starRating,
    flagColor: c.flagColor,
  }));

  await db.decks.put(newDeck);
  if (cards.length > 0) await db.cards.bulkPut(cards);

  return { deckName: newDeck.name, cardCount: cards.length };
}

// ── Helpers ──

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function getRandomColor(): string {
  const colors = [
    '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e',
    '#f97316', '#eab308', '#22c55e', '#06b6d4',
    '#3b82f6', '#a855f7', '#14b8a6', '#ef4444',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
