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
src/pages/        stránky: úvod, about/, cv/, 404
src/data/cv/      data CV (vzdělání, praxe, projekty, jazyky, dovednosti, zájmy) v YAML
src/site.ts       jméno, popis, kontakty, odkazy na sociální sítě, profilový text a menu
src/layouts/      vzhled úvodní stránky (Home) a ostatních stránek (Page)
src/components/   hlavička, menu, odkazy na sociální sítě, tlačítko nahoru
src/styles/       SCSS původního tématu
public/           soubory beze změny (CNAME, favicon, fotky, písma, styly CV)
```

## Nasazení

Každý push do `master` web postaví a nasadí (`.github/workflows/deploy.yml`). Pull request web jen postaví.
Když build nebo nasazení selže, otevře se issue přiřazené vlastníkovi repa (přijde e-mail).

V nastavení repa musí být **Settings → Pages → Build and deployment → Source: GitHub Actions**
a **Custom domain: libor.kramolis.cz**.
