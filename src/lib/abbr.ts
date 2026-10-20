import { getCollection } from 'astro:content';

// Abbreviations of the CV texts (src/content/cv/glossary.yaml): `abbr` turns a plain text into HTML with every
// known abbreviation in an <abbr title="…">, `used` lists the ones a page shows (for its list at the bottom).
// An abbreviation-like word missing in the glossary is reported at build time.

const escape = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const regexEscape = (text: string) => text.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');

const entries = (await getCollection('glossary')).map(({ id, data }) => ({ term: id, title: data.title }));
// the longest first, so "Java EE" wins over a shorter term inside it
entries.sort((a, b) => b.term.length - a.term.length);
const titles = new Map(entries.map((entry) => [entry.term, entry.title]));
const pattern = new RegExp(`(?<![\\w-])(${entries.map((entry) => regexEscape(entry.term)).join('|')})(?![\\w-])`, 'g');

// words that look like an abbreviation but are names
const NOT_ABBREVIATIONS = new Set(['NEWTON', 'JIRA', 'BNB']);
const warned = new Set<string>();

function checkUnknown(text: string) {
  // the known terms first (they may contain spaces, like "Java EE"), then whatever still looks like an abbreviation
  const rest = text.replace(pattern, ' ');
  for (const [word] of rest.matchAll(/\b[A-Z][A-Z0-9]{1,}(?:[/-][A-Z0-9]+)*s?\b/g)) {
    // "KYC/AML" = two abbreviations
    for (const part of word.split('/')) {
      if (!titles.has(part) && !NOT_ABBREVIATIONS.has(part) && !warned.has(part)) {
        warned.add(part);
        console.warn(`[glossary] "${part}" není v src/content/cv/glossary.yaml`);
      }
    }
  }
}

/** HTML of the plain `text` with the abbreviations explained. */
export function abbr(text: string): string {
  checkUnknown(text);
  return escape(text).replace(pattern, (term) => `<abbr title="${escape(titles.get(term)!)}">${term}</abbr>`);
}

/** The abbreviations used in the texts, alphabetically, for the list at the bottom of a page. */
export function used(texts: (string | undefined)[]): { term: string; title: string }[] {
  const found = new Set<string>();
  for (const text of texts) if (text) for (const [term] of text.matchAll(pattern)) found.add(term);
  return [...found].sort((a, b) => a.localeCompare(b)).map((term) => ({ term, title: titles.get(term)! }));
}

/** HTML paragraphs of a short Markdown text (blank line = new paragraph, *text* = emphasis), abbreviations explained. */
export function paragraphs(markdown: string): string[] {
  return markdown
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => abbr(paragraph.replace(/\s*\n\s*/g, ' ')).replace(/\*([^*]+)\*/g, '<em>$1</em>'));
}
