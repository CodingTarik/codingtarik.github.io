/**
 * Cloze Deletion Module
 * Implements Anki-compatible cloze deletions.
 *
 * Syntax: {{c1::answer}} or {{c1::answer::hint}}
 * Multiple cloze indices: {{c1::...}}, {{c2::...}}, etc.
 *
 * When showing cloze N:
 *  - {{cN::answer}} → replaced with [...] on front, answer on back
 *  - {{cN::answer::hint}} → replaced with [hint] on front, answer on back
 *  - Other cloze indices are shown with their answer visible
 */

/**
 * Check if text contains cloze deletions.
 */
export function hasCloze(text: string): boolean {
  return /\{\{c\d+::/.test(text);
}

/**
 * Get all unique cloze indices in the text.
 */
export function getClozeIndices(text: string): number[] {
  const matches = text.matchAll(/\{\{c(\d+)::/g);
  const indices = new Set<number>();
  for (const m of matches) {
    indices.add(parseInt(m[1], 10));
  }
  return Array.from(indices).sort((a, b) => a - b);
}

/**
 * Get the number of cloze cards this text produces.
 */
export function getClozeCount(text: string): number {
  return getClozeIndices(text).length;
}

/**
 * Render the front side for a specific cloze index.
 * - Matching cloze: replaced with [...] or [hint]
 * - Other cloze: shown as plain answer text
 */
export function renderClozeFront(text: string, clozeIndex: number): string {
  // Replace the target cloze with blank
  let result = text.replace(
    new RegExp(`\\{\\{c${clozeIndex}::([^}]*?)(?:::([^}]*?))?\\}\\}`, 'g'),
    (_match, _answer, hint) => {
      if (hint) return `<span class="cloze-blank">[${hint}]</span>`;
      return '<span class="cloze-blank">[...]</span>';
    }
  );

  // Show other cloze answers as plain text
  result = result.replace(
    /\{\{c\d+::([^}]*?)(?:::[^}]*?)?\}\}/g,
    '$1'
  );

  return result;
}

/**
 * Render the back side for a specific cloze index.
 * - Matching cloze: highlighted answer
 * - Other cloze: shown as plain answer text
 */
export function renderClozeBack(text: string, clozeIndex: number): string {
  // Highlight the target cloze answer
  let result = text.replace(
    new RegExp(`\\{\\{c${clozeIndex}::([^}]*?)(?:::[^}]*?)?\\}\\}`, 'g'),
    '<span class="cloze-answer">$1</span>'
  );

  // Show other cloze answers as plain text
  result = result.replace(
    /\{\{c\d+::([^}]*?)(?:::[^}]*?)?\}\}/g,
    '$1'
  );

  return result;
}

/**
 * Strip all cloze syntax and return plain text.
 */
export function stripCloze(text: string): string {
  return text.replace(/\{\{c\d+::([^}]*?)(?:::[^}]*?)?\}\}/g, '$1');
}
