# CLAUDE.md

Osobní stránka a CV Libora Kramoliše (anglicky), https://libor.kramolis.cz. Výkladní skříň: design střídmý, čistý
a přesný, nic přeplácaného.

- Astro (statický výstup), vlastní CSS bez frameworku (`src/styles/global.css`: barvy, písma, sekce),
  světlý i tmavý režim (`prefers-color-scheme`). Písma z npm (`@fontsource`), žádné Google Fonts:
  Instrument Serif (nadpisy, `.display`), Inter (text), JetBrains Mono (štítky, roky, technologie).
- Stránky `/`, `/about/`, `/cv/` (adresy drží původní web, neměnit), `/cv/history/`; společná hlavička a patička
  v `src/layouts/Base.astro`.
- CV ve dvou úrovních: `/cv/` je moderní one-pager (profil, klíčové pozice posledních let `featured: true` jako karty,
  dovednosti po skupinách, starší kariéra po jednom řádku `summary`), `/cv/history/` celá historie se všemi detaily
  a projekty. Žádné přeplácané CV plné odrážek: detaily patří do history.
- Zkratky: každá v textech CV musí být v `src/content/cv/glossary.yaml` (title v uvozovkách); `src/lib/abbr.ts` je
  obalí `<abbr title>` a stránka je vypíše dole (i v PDF). Build varuje u neznámé zkratky. Texty CV jsou proto prostý
  text (žádné HTML), profil jen odstavce a `*kurzíva*`.
- Data CV jsou content collections (`src/content.config.ts`, schéma zod) v `src/content/cv/*.yaml`: pozice, projekty,
  vzdělání, jazyky, dovednosti, certifikáty. Každá položka má `id`; `start`/`end` jsou roky, bez `end` = trvá.
  `getCollection` nedrží pořadí souboru, řadí `src/lib/cv.ts` (nejnovější první).
- Profilový text `src/texts/profile.md` (About i CV): odstavce a `*kurzíva*`, nic víc (`paragraphs` v `abbr.ts`).
- CV se tiskne do PDF (tlačítko „Save as PDF“, `@media print` v `src/pages/cv/index.astro`): bez hlavičky a patičky.
- Google Analytics 4: `site.analytics` (ID měření), tag v `Base.astro` jen v produkčním buildu.
- E-mail je v HTML jako entity (`site.email`) i v odkazu `mailto:` (`EmailLink.astro`, `set:html`); nedekódovat.
- `compressHTML: false`: komprese maže mezeru na zalomení řádku mezi inline prvky v textech.
- Node.js ≥ 24 (`engines`), ve workflow `node-version: 24`.
- Deploy: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`), doména v `public/CNAME`.
