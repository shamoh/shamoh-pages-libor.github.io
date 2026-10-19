# CLAUDE.md

Osobní stránka a CV Libora Kramoliše (anglicky), https://libor.kramolis.cz.

- Astro (statický výstup), SCSS původního Jekyll tématu (`src/styles/`, Sass `@import`, varování potlačená
  v `astro.config.mjs`), Font Awesome 4 (písmo v `public/assets/fonts/`), žádné jQuery: menu a tlačítko nahoru
  jsou malé skripty v komponentách.
- CV (`src/pages/cv/index.astro`) má vlastní statické styly v `public/cv/assets/` (Bootstrap 3 CSS, Font Awesome 4).
- E-mail je v HTML jako entity (`site.email`) i v odkazu `mailto:` (`EmailLink.astro`, `set:html`); nedekódovat.
- Adresy `/`, `/about/`, `/cv/` drží původní web; neměnit.
- `compressHTML: false`: komprese maže mezeru na zalomení řádku mezi inline prvky v textech.
- Node.js ≥ 24 (`engines`), ve workflow `node-version: 24`.
- Deploy: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`), doména v `public/CNAME`.
