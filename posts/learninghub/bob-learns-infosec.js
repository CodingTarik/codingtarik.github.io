const BOB = `
<svg class="bob-svg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
  <!-- Glitch beams behind Bob -->
  <g opacity="0.35">
    <rect x="10" y="30" width="180" height="3" fill="#22c55e"/>
    <rect x="20" y="80" width="160" height="2" fill="#4ade80" opacity="0.5"/>
    <rect x="6" y="130" width="188" height="2" fill="#22c55e" opacity="0.4"/>
    <rect x="30" y="175" width="140" height="3" fill="#4ade80" opacity="0.3"/>
  </g>
  <!-- Body / hoodie -->
  <path d="M70,120 L62,205 Q100,220 138,205 L130,120 Q100,112 70,120 Z" fill="#052e16" stroke="#4ade80" stroke-width="3"/>
  <path d="M84,128 L78,200 Q100,208 122,200 L116,128 Q100,122 84,128 Z" fill="#0b3b24"/>
  <!-- Hood string -->
  <path d="M94,128 Q100,148 106,128" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <!-- Arms -->
  <path d="M70,132 L52,168 Q60,178 72,172 Z" fill="#052e16" stroke="#4ade80" stroke-width="3"/>
  <path d="M130,132 L148,168 Q140,178 128,172 Z" fill="#052e16" stroke="#4ade80" stroke-width="3"/>
  <!-- Laptop in hands -->
  <g>
    <rect x="66" y="158" width="68" height="8" rx="2" fill="#020617" stroke="#22c55e" stroke-width="2"/>
    <rect x="74" y="152" width="52" height="8" rx="2" fill="#022c22" stroke="#4ade80" stroke-width="2"/>
    <path d="M78,155 L84,155 M78,158 L92,158" stroke="#4ade80" stroke-width="1.5"/>
  </g>
  <!-- Neck -->
  <rect x="92" y="110" width="16" height="14" rx="4" fill="#f5d0a9"/>
  <!-- Head -->
  <ellipse cx="100" cy="88" rx="34" ry="36" fill="#f5d0a9" stroke="#4ade80" stroke-width="2.5"/>
  <!-- Messy glitch-hair -->
  <path d="M66,74 Q66,42 88,38 Q100,30 118,38 Q138,44 136,74 Q124,58 100,56 Q78,58 66,74 Z" fill="#052e16"/>
  <path d="M70,60 L64,52 M92,44 L88,34 M120,46 L128,36" stroke="#052e16" stroke-width="4" stroke-linecap="round"/>
  <!-- Round glasses -->
  <circle cx="86" cy="88" r="13" fill="none" stroke="#fbbf24" stroke-width="3"/>
  <circle cx="114" cy="88" r="13" fill="none" stroke="#fbbf24" stroke-width="3"/>
  <line x1="99" y1="88" x2="101" y2="88" stroke="#fbbf24" stroke-width="3"/>
  <line x1="73" y1="86" x2="64" y2="82" stroke="#fbbf24" stroke-width="2.5"/>
  <line x1="127" y1="86" x2="136" y2="82" stroke="#fbbf24" stroke-width="2.5"/>
  <!-- Eyes (glitching) -->
  <circle cx="86" cy="88" r="4" fill="#052e16"/>
  <circle cx="114" cy="88" r="4" fill="#052e16"/>
  <rect x="86" y="90" width="4" height="2" fill="#22c55e"/>
  <rect x="114" y="90" width="4" height="2" fill="#22c55e"/>
  <!-- Nose + worried mouth -->
  <path d="M100,96 Q98,100 100,102 Q103,100 100,96" fill="#e0a878"/>
  <path d="M92,106 Q100,112 108,106" fill="none" stroke="#052e16" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Coffee mug -->
  <g transform="translate(150,150)">
    <rect x="0" y="4" width="16" height="18" rx="3" fill="#052e16" stroke="#4ade80" stroke-width="2"/>
    <path d="M16,8 Q26,8 26,15 Q26,22 16,20" fill="none" stroke="#4ade80" stroke-width="2"/>
    <path d="M3,16 Q8,12 13,16" stroke="#fbbf24" stroke-width="1.5" fill="none"/>
    <path d="M2,24 L3,28 M7,24 L8,28 M12,24 L13,28" stroke="#4ade80" stroke-width="1.5"/>
  </g>
</svg>
`;

// A small programmatic "cat status" widget reused across pages
const CAT_STATUS = (status, color) => `
  <div class="cat-status" style="--catcol:${color || '#4ade80'};">
    <svg width="26" height="26" viewBox="0 0 40 40">
      <ellipse cx="20" cy="24" rx="13" ry="12" fill="none" stroke="var(--catcol)" stroke-width="3"/>
      <path d="M20,14 L20,6 M13,16 L8,9 M27,16 L32,9" stroke="var(--catcol)" stroke-width="3" fill="none"/>
      <circle cx="16" cy="23" r="2.4" fill="var(--catcol)"/>
      <line x1="20" y1="23" x2="20" y2="23" stroke="var(--catcol)" stroke-width="3"/>
      <path d="M16,28 Q20,32 24,28" stroke="var(--catcol)" stroke-width="2" fill="none"/>
    </svg>
    <span>${status}</span>
  </div>
`;

export default {
  id: 'bob-learns-infosec',
  title: 'Bob learns Information Security Management',
  description:
    'Bob, ein hoffnungsloser Kommandozeilen-Nerd, will endlich wissen, ob seine Katze in der Kiste lebt oder tot ist. Dieses Buch erzählt in sechs Seiten, wie er durch Verschlüsselung, Bedrohungen und die CIA-Triade stolpert — grün auf schwarz, mit Glitches, Mathe und viel zu viel Kaffee.',
  type: 'book',
  category: 'Security',
  level: 'Beginner',
  duration: 'Book (6 Pages)',
  author: 'Prof. Bob & S. Schrödinger',
  coverImage:
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
  featured: true,
  tags: ['InfoSec', 'Security', 'Glitch', 'Terminal', 'Story', 'Paged.js', 'PDF'],
  pagedOptions: {
    pageSize: 'A4',
    margin: '0mm'
  },
  chapters: [
    {
      id: 'boot-cover',
      title: 'Die Nacht, in der alles begann',
      chapterNumber: 1,
      content: `
<div class="cover-page full-bleed book-cover-terminal">
  <div class="scanlines"></div>
  <div class="matrix-rain"></div>

  <p class="term-prompt" style="color:#4ade80;font-family:monospace;font-size:0.8rem;letter-spacing:4px;font-weight:800;margin:0 0 10px;">
    &gt; bob --boot --infosec --chaos
  </p>

  <h1 class="boot-title" data-text="BOB learns InfoSec">
    BOB learns <span class="neon-glitch">InfoSec</span>
  </h1>

  <div style="position:relative;display:inline-block;max-width:230px;margin:8px auto 0;">
    ${BOB}
  </div>

  <div class="terminal-window" style="max-width:560px;margin:14px auto;text-align:left;">
    <div class="term-titlebar">
      <span class="dot" style="background:#ff5f56;"></span>
      <span class="dot" style="background:#ffbd2e;"></span>
      <span class="dot" style="background:#27c93f;"></span>
      <span class="term-name">bob@superposition:~$ story.sh</span>
    </div>
    <div class="term-body">
      <p><span class="green">$</span> init: <span class="amber">"Warum ist meine Katze im Netz?"</span></p>
      <p class="dim"># Dies ist die Geschichte von Bob, einem Netz, und einer Kiste.</p>
      <p><span class="green">$</span> status: <span class="blink">COMPILING_6_PAGES</span></p>
    </div>
  </div>

  <p style="color:#22c55e;font-size:0.72rem;font-family:monospace;margin:8px 0 0;letter-spacing:1px;">
    [ OK ] 6 Seiten &bull; Scanlines injiziert &bull; Koffein: KREISLAUF &bull; 0 Katzen geschadet
  </p>
</div>
`
    },
    {
      id: 'cia-triad',
      title: 'Kapitel 1: Die Nacht, als alles begann',
      chapterNumber: 2,
      content: `
<div class="story-layout">
  <div class="story-art">${BOB}</div>
  <div class="story-text">
    <p class="story-kicker">ACT I &bull; Vertraulichkeit</p>
    <h2 class="chaos-heading">Kapitel 1: Die Nacht, in der alles begann</h2>
    <p class="story-p">
      Es war spät, Bobs Bildschirm leuchtete grün wie immer, und irgendwo im Hintergrund
      schnurrte eine Katze namens <strong>Schrödingers Netz</strong>. Bob hatte heute etwas
      Unerhörtes getan: Er hatte seine schönste Datei verschlüsselt.
    </p>
    <p class="story-p">
      „Warum?“, fragte die Katze in seinem Kopf. „Weil Vertraulichkeit mehr ist als Geheimnis,
      mehr als ein Schloss“, murmelte Bob. „Vertraulichkeit ist die Frage, <em>wer</em> überhaupt
      in die Kiste schauen darf — und die Antwort ist: nicht du.“
    </p>
    <p class="story-p">
      Vor ihm stand die <span class="neon">CIA-Triade</span> — drei Kisten voller Geheimnisse.
      Zusammen bildeten sie die Grundmauer aller Sicherheit. Allein wäre jede von ihnen nur eine
      Katze in einer <span class="amber">halb geöffneten Kiste</span>.
    </p>
    <div class="story-cta">
      <span class="green">bob:</span> „Erst wenn ich alle drei schließe, darf ich nachts schlafen.“
    </div>
  </div>
</div>

<h2 class="chaos-heading"><span class="term-prompt blue">cia:</span> Drei Kisten, ein Fundament</h2>

<p class="lead-dim">
  Bob malte drei Kreise aufs Whiteboard, drei Katzen hinein, und schrieb darüber
  <span class="neon">Confidentiality</span>, <span class="neon">Integrity</span>, <span class="neon">Availability</span>.
  „Das klingt wie ein Zauberspruch“, sagte er. Es war einer.
</p>

<div class="triad-grid">
  <div class="triad-node" style="transform:rotate(-2deg);">
    <span class="triad-code">C</span>
    <h3>Confidentiality</h3>
    <p>Nur wer darf, liest. Bob verschlüsselt sein Notizbuch, damit die Nachbarskatze nicht schnüffelt.</p>
  </div>
  <div class="triad-node" style="transform:rotate(1.5deg);">
    <span class="triad-code">I</span>
    <h3>Integrity</h3>
    <p>Daten sind unverändert. Bob prüft Hashes, damit niemand „2+2=5“ in seine Hausaufgaben schreibt.</p>
  </div>
  <div class="triad-node" style="transform:rotate(-1deg);">
    <span class="triad-code">A</span>
    <h3>Availability</h3>
    <p>Systeme bleiben erreichbar. Bobs Server darf nicht schlafen, wenn die Katze Futter bestellen will.</p>
  </div>
</div>

<p class="story-p">
  Bob starrte auf die Kreise. Die Vertraulichkeit war seine Lieblingskiste: Wer sie öffnet,
  hat die ganze Burg gesehen. Deshalb verschlüsselte er alles — sogar seine Einkaufsliste:
  <span class="mono-inline">❤❤❤❤🍕</span>, sollte niemand wissen.
</p>

<div class="story-layout story-reverse">
  <div class="story-art">${BOB}</div>
  <div class="story-text">
    <p class="story-p">
      Integrität machte ihm mehr Angst. Was, wenn jemand seine „2+2=4“ heimlich in
      „2+2=5“ verwandelte, während er schlief? Bob lernte den beruhigenden Befehl
      <span class="cs-cmd">sha256sum</span> — ein Fingerabdruck, den jede Manipulation sofort verrät.
    </p>
    <p class="story-p">
      Und die Verfügbarkeit? Sie war die Kiste, die einfach <em>da</em> sein musste, wenn man sie
      brauchte. Ein System, das schläft, ist wie eine Katze, die nie zu Besuch kommt — nutzlos.
    </p>
  </div>
</div>

<div class="math-box">
  <p style="margin:0;font-size:1.05rem;font-family:monospace;color:#86efac;">Sicherheit(S) = C ⊕ I ⊕ A, &nbsp; P(Verlust) → 0</p>
  <p class="dim" style="margin:6px 0 0;">Ein System ohne eines der drei ist wie eine <span class="amber">halb geöffnete Kiste</span>.</p>
</div>

<p class="story-p">
  Drei Kisten. Drei Schlösser. Bob nickte. Doch draußen lauerten Wesen, die alle drei aufbrechen wollten —
  und unter ihnen die gefährlichste von allen: <span class="amber">die Angriffskatze</span>.
</p>
`
    },
    {
      id: 'threats',
      title: 'Kapitel 2: Bedrohungen & Schadkatzen',
      chapterNumber: 3,
      content: `
<h2 class="chaos-heading"><span class="term-prompt red">x:</span> Im Keller der Bedrohungen</h2>

<p class="lead-dim">
  Bob ging mit einer Taschenlampe in den Serverkeller, wo es nach Staub und alten Katzen
  roch. Dort hingen die Steckbriefe der Schadkatzen an der Wand — jede wollte seine drei Kisten öffnen.
</p>

<table class="threat-table">
  <thead>
    <tr><th>Bedrohung</th><th>Akronym</th><th>Bob-Analogie</th></tr>
  </thead>
  <tbody>
    <tr><td>Phishing</td><td>SPAM</td><td>Eine Katze schickt Fisch-Links.</td></tr>
    <tr><td>Ransomware</td><td>CRYPTO</td><td>Mieze sperrt die Kiste ein, Lösegeld-Trockenfutter.</td></tr>
    <tr><td>DoS / DDoS</td><td>FLOOD</td><td>1000 Katzen blockieren die Tür des Futternapfes.</td></tr>
    <tr><td>Insider</td><td>TRUST</td><td>Die eigene Hauskatze frisst die Akte durch.</td></tr>
    <tr><td>Zero-Day</td><td>BUG</td><td>Ein Loch im Karton, das niemand kennt.</td></tr>
  </tbody>
</table>

<p class="story-p">
  „Eine Bedrohung ist nur die <em>Möglichkeit</em>, dass etwas passiert“, erklärte Bob der Katze,
  die neben ihm saß und seinen Kaffee beobachtete. „Ein Risiko ist, wenn ich weiß, <em>wie wahrscheinlich</em>
  und <em>wie teuer</em> es ist.“
</p>

<div class="math-box-danger">
  <p style="margin:0;font-family:monospace;font-size:1rem;color:#fca5a5;">
    Risiko = Bedrohung × Schwachstelle × Auswirkung<br/>
    Bob schraubt an der <span class="amber">Schwachstelle</span>, weil die Katze dort keinen Widerstand hat.
  </p>
</div>

<div class="story-layout">
  <div class="story-art">${BOB}</div>
  <div class="story-text">
    <p class="story-p">
      Das Schlimmste waren die <strong>Zero-Days</strong>: Löcher im Karton, die niemand kannte,
      bis eine Katze mit dem Kopf hindurchschlüpfte. Dagegen half nur eins — patchen, patchen,
      patchen, sobald das Futter da war.
    </p>
    <p class="story-p">
      Bob blickte auf die Liste und fühlte sich klein. Aber er hatte eine Idee. Eine wirklich
      schrödingergrößte Idee: Er würde sein Passwort nicht mehr nur erraten,
      sondern <span class="amber">beobachten</span>.
    </p>
  </div>
</div>
`
    },
    {
      id: 'passwords',
      title: 'Kapitel 3: Das Passwort-Kater-Experiment',
      chapterNumber: 4,
      content: `
<h2 class="chaos-heading"><span class="term-prompt amber">key:</span> Das Passwort, das zugleich lebt und stirbt</h2>

<p class="lead-dim">
  Im Labor der Quantenflure stellte Bob sein berühmtestes Experiment auf: das
  <span class="neon">Passwort-Kater-Experiment</span>. Eine Kiste, ein Laptop, ein Passwort.
  Bis man es misst, glaubte Bob, sei das Passwort <em>gleichzeitig</em> stark und schwach.
</p>

<div class="terminal-window" style="margin:12px 0;">
  <div class="term-titlebar">
    <span class="dot" style="background:#ff5f56;"></span>
    <span class="dot" style="background:#ffbd2e;"></span>
    <span class="dot" style="background:#27c93f;"></span>
    <span class="term-name">bob: login --cat --measure</span>
  </div>
  <div class="term-body">
    <p><span class="green">$</span> passwort_eingeben: <span class="amber">********</span></p>
    <p class="dim"># Messung kollabiert die Superposition...</p>
    <p><span class="green">$</span> status: <span class="blink2">UNZUREICHEND</span> → 2FA erforderlich</p>
  </div>
</div>

${CAT_STATUS('Zustand vor der Messung: stark ⊕ schwach', '#fbbf24')}

<p class="story-p">
  Das Terminal piepte. Das Passwort war schwach — nicht, weil es kurz war, sondern weil es
  „<span class="mono-inline">miau123</span>“ lautete. Die Messung hatte die Superposition kollabiert,
  und Bob lernte die bittersüße Wahrheit der Quantenpasswörter: <strong>Du kannst nicht beides sein.
  Also sei patching, verwende Entropie und einen zweiten Faktor.</strong>
</p>

<div class="math-box" style="margin:16px 0;">
  <p style="margin:0;font-family:monospace;color:#86efac;font-size:1rem;">
    |passwort⟩ = α·|stark⟩ + β·|schwach⟩, &nbsp; α² + β² = 1<br/>
    <span class="dim">mehr Entropie ⇒ α² ↗ &nbsp;•&nbsp; 2FA ⇒ β² ↘</span>
  </p>
</div>

<p class="story-p">
  Bob gab seinem Passwort einen zweiten Faktor, einen dritten und einen virtuellen Kater als
  Wachhund. Jetzt schützte er die Kiste sogar <em>doppelt</em>. Und zum ersten Mal schlief
  Schrödingers Netz wirklich tief. Fast.
</p>
`
    },
    {
      id: 'phishing',
      title: 'Kapitel 4: Der Fisch, der nach Vertrauen roch',
      chapterNumber: 5,
      content: `
<h2 class="chaos-heading"><span class="term-prompt red">phish:</span> Menschen sind die größte Schwachstelle</h2>

<p class="lead-dim">
  Einen Abend später erhielt Bob eine E-Mail. „Dringend! Dein Konto wird gesperrt!“ Die Katze
  neben ihm legte den Kopf schief. Bob wusste: Das war <span class="neon">Phishing</span> —
  Social Engineering, der älteste Trick der digitalen Katze.
</p>

<div class="phish-diagram">
  <div class="phish-step" style="transform:rotate(-1deg);">
    <span class="step-num">01</span>
    <p>Dringlichkeit erzeugen</p>
    <p class="dim">„Dein Konto wird in 10 Min. gesperrt!“</p>
  </div>
  <div class="phish-arrow">→</div>
  <div class="phish-step" style="transform:rotate(1deg);">
    <span class="step-num">02</span>
    <p>Vertrauen vortäuschen</p>
    <p class="dim">„Grüße, deine Bank 🐱“</p>
  </div>
  <div class="phish-arrow">→</div>
  <div class="phish-step" style="transform:rotate(-1.5deg);">
    <span class="step-num">03</span>
    <p>Aktion auslösen</p>
    <p class="dim">Link klicken / Zugangsdaten tippen</p>
  </div>
</div>

<div class="burn-box">
  <p style="margin:0;font-family:monospace;color:#fecaca;font-size:0.95rem;">
    bob_rule = ["Prüfe Absender", "Prüfe URL", "Keine Notfall-Links", "Wenn Miau → zweifle"]
  </p>
</div>

<div class="story-layout story-reverse">
  <div class="story-art">${BOB}</div>
  <div class="story-text">
    <p class="story-p">
      Die beste Firewall ist nutzlos, wenn die Katze den Phishing-Fisch selbst anklickt.
      Bob hielt den Cursor über den Link, atmete tief durch und schloss den Tab.
    </p>
    <p class="story-p">
      Das Geheimnis, dachte er, ist nicht Technik — es ist <strong>Aufmerksamkeit</strong>.
      Seine neue Regel war simpel und schwer genug zugleich: <em>Wenn es miau sagt, zweifle.</em>
    </p>
  </div>
</div>

<p class="story-p">
  Und doch wusste Bob, dass eine einzige bewusste Katze nicht reichte. Er brauchte
  <strong>Verteidigung in der Tiefe</strong> — Schicht auf Schicht, bis selbst eine
  Quantenkatze aufgeben würde.
</p>
`
    },
    {
      id: 'defense-in-depth',
      title: 'Kapitel 5: Verteidigung in der Tiefe & das Ende',
      chapterNumber: 6,
      content: `
<div class="terminal-window" style="margin:0 0 6px;">
  <div class="term-titlebar">
    <span class="dot" style="background:#ff5f56;"></span>
    <span class="dot" style="background:#ffbd2e;"></span>
    <span class="dot" style="background:#27c93f;"></span>
    <span class="term-name">bob: defense.sh --final</span>
  </div>
  <div class="term-body">
    <p><span class="green">$</span> implement <span class="amber">Defense in Depth</span></p>
    <p class="dim"># mehrere dünne Schichten statt einer dicken Tür</p>
  </div>
</div>

<h2 class="chaos-heading"><span class="term-prompt green">done:</span> Mit vielen Schichten gegen den Kollaps</h2>

<p class="story-p">
  Bob legte Schicht um Schicht wie Decken auf eine verschmuste Katze. Nicht eine riesige Tür,
  sondern viele dünne Wände — falls eine bricht, hält die nächste.
</p>

<div class="layer-stack">
  <div class="layer" style="--i:1;">Policies & Awareness</div>
  <div class="layer" style="--i:2;">Identität & Zugriff (IAM/2FA)</div>
  <div class="layer" style="--i:3;">Netzwerk & Segmentierung</div>
  <div class="layer" style="--i:4;">Endpoint & EDR</div>
  <div class="layer" style="--i:5;">Daten & Verschlüsselung</div>
</div>

<div class="math-box" style="margin:16px 0 0;">
  <p style="margin:0;font-family:monospace;color:#86efac;font-size:1rem;">
    P(Einbruch) = Π (1 − Schicht_i) &nbsp;→&nbsp; <span class="neon">je mehr Schichten, desto stabiler der Zustand</span>
  </p>
</div>

<div class="story-layout">
  <div class="story-art">${BOB}</div>
  <div class="story-text">
    <p class="story-p">
      Am Morgen öffnete Bob die letzte Kiste. Sein Netz, seine Katze, sein Passwort — alles war
      intakt, verschlüsselt, gepatcht und gesichert. Er hatte nicht nur gelernt, wie man
      Informationen schützt; er hatte verstanden, warum man es tut.
    </p>
    <p class="story-cta">
      <span class="green">bob:</span> „Sicherheit ist ein Prozess, kein Produkt. Und der beste Patch
      ist ein gutes Frühstück.“
    </p>
  </div>
</div>

${CAT_STATUS('Finaler Zustand: sicher ⊕ wach ⊕ gepatcht', '#4ade80')}

<div class="cheatsheet">
  <div class="cs-row">Vertraulichkeit <span class="cs-cmd">chmod 600</span></div>
  <div class="cs-row">Integrität <span class="cs-cmd">sha256sum</span></div>
  <div class="cs-row">Verfügbarkeit <span class="cs-cmd">systemctl start catd</span></div>
  <div class="cs-row">Anti-Phishing <span class="cs-cmd">zweifle(); prüfe();</span></div>
  <div class="cs-row">Passwörter <span class="cs-cmd">entropy &gt; 3 Katzen</span></div>
  <div class="cs-row">Backups <span class="cs-cmd">3-2-1 Regel</span></div>
</div>

<p class="lead-dim" style="margin-top:20px;font-family:monospace;text-align:center;">
  <span class="green">✔</span> 6 Seiten erzählt &nbsp; <span class="amber">✔</span> 6 Kapitel gelesen &nbsp; <span class="neon">✔</span> Schrödingers Netz: lebendig
</p>
`
    }
  ]
};
