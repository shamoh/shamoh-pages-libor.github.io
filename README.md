# Libor Kramoliš

Osobní stránka a CV, https://libor.kramolis.cz.

Statický web v [Astru](https://astro.build), nasazovaný přes GitHub Actions na GitHub Pages.

## Lokálně

Potřebuje Node.js 24 nebo novější.

```shell
npm install
npm run dev       # vývojový server na http://localhost:4321
npm run build     # hotový web do dist/
npm run preview   # náhled hotového webu z dist/
```

## Struktura

```
src/pages/            stránky: úvod, about/, cv/, 404
src/content/cv/       data CV v YAML: positions, projects, education, languages, skills
src/content.config.ts schéma dat CV (co která položka může mít)
src/texts/profile.md  profilový text (About a CV)
src/site.ts           jméno, popis, e-mail, menu a odkazy (LinkedIn, GitHub, …)
src/layouts/Base.astro  hlavička stránky, menu a patička
src/components/       řádek CV (Entry), odkaz na e-mail (EmailLink)
src/styles/global.css barvy, písma a společné styly
public/               soubory beze změny (CNAME, favicon, fotka)
```

Nová pozice do CV: položka na začátek `src/content/cv/positions.yaml` (`id`, `role`, `company`, `start`, případně
`end` a `highlights`); stránky ji seřadí podle let samy. CV se dá uložit do PDF tlačítkem „Save as PDF“.

## Nasazení

Každý push do `master` web postaví a nasadí (`.github/workflows/deploy.yml`). Pull request web jen postaví.
Když build nebo nasazení selže, otevře se issue přiřazené vlastníkovi repa (přijde e-mail).

V nastavení repa musí být **Settings → Pages → Build and deployment → Source: GitHub Actions**
a **Custom domain: libor.kramolis.cz**.
