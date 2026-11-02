# Kritická revize CV a návrh nového (2026)

Porovnání: současné CV `/cv/` a `/cv/history/` × návrh `/cv-2026/` a `/cv-2026/history/`.
Návrh je postavený ze **stejných dat** (`src/content/cv/*.yaml`), nic se nesmazalo ani nepřepsalo.

## 1. Co dnes dobré CV vývojáře obsahuje

1. **Prvních 10 sekund rozhoduje.** Čtenář (recruiter, CTO, klient) se nahoře musí dozvědět: kdo jsi, v čem jsi
   silný, v jaké doméně a jakou formou spolupracuješ. Až pak čte dál.
2. **Konkrétní headline** místo výčtu rolí: role + specializace + doména
   (např. „Senior Scala Engineer · Functional & event-driven backend systems · Fintech“).
3. **Krátké shrnutí** na 2–4 věty. Fakta a zaměření, žádné sebehodnocení („I am a careful man“, „team player“).
   Osobní věci (hobby, humor) patří na stránku About, ne do CV.
4. **Silné stránky s důkazem**: 3–4 oblasti, každá s jednou větou, čím je doložená.
5. **Posledních 5–10 let podrobně, zbytek po řádcích.** U klíčových pozic:
   kontext (co firma / produkt je), *tvoje* role a odpovědnost, 2–4 výsledky, stack na jednom řádku.
6. **Výsledky místo náplně práce.** „Navrhl a dodal X, které zvládá Y (číslo)“ je silnější než
   „Design and development of …“. Čísla (objem, latence, počet služeb, tým, čas) jsou nejsilnější signál.
7. **Freelance jako jeden celek.** Několik krátkých zakázek pod sebou vypadá jako časté střídání práce;
   pod hlavičkou „Independent software engineer (freelance), 2018 – present“ jako klienti působí jako kariéra.
8. **Poctivé dovednosti** ve skupinách, s úrovní slovem (main / since 1997 / basic). Žádné grafy a hvězdičky.
9. **Čitelnost pro automatické systémy (ATS)**, které firmy používají na třídění CV: jeden sloupec,
   standardní nadpisy (Summary, Experience, Skills, Education), text v PDF (ne obrázek). Vícesloupcové
   rozložení a texty v kartách a štítcích je umějí rozházet.
10. **Délka 1–2 strany**, podrobnosti odkazem (web, celá historie).
11. **Nahoře praktické údaje**: lokalita a časové pásmo, forma spolupráce (B2B / zaměstnání), remote / hybrid,
    jazyky, kontakty, LinkedIn, GitHub.
12. **Veřejná práce je silný důkaz**: open source (Jersey, Helidon, NetBeans), blog, přednášky.
13. **Nepatří tam**: datum narození, řidičák, „references on request“, dlouhé seznamy starých technologií,
    slovník běžných zkratek (API, HTTP) v tištěné verzi.

## 2. Revize současného CV (`/cv/`, stav PR #3)

### Co funguje
- Dvě úrovně (one-pager + celá historie) – přesně tak se to dnes dělá.
- Čistý design, PDF z prohlížeče, data oddělená od vzhledu.
- Posledních let je víc než starší kariéry, starší kariéra po řádcích, KB sloučená do jednoho řádku.
- Zkratky vysvětlené (tooltip + seznam) – na webu výborné.

### Co bych změnil
| Problém | Proč to vadí | Návrh |
| --- | --- | --- |
| Headline bez domény | Fintech je tvoje nejsilnější kontinuita (KB 2006 → Leveris → Carpentum), nikde ale není vidět | Doména v headline i v shrnutí |
| Profil na 4 odstavce, poslední o hobby a humoru | Zdržuje, osobní věci čtenář CV nehledá | 3 krátké věty, hobby jen na About |
| Chybí kontext firem | „Carpentum“ nebo „Leveris“ čtenáři nic neřekne | Jedna věta, co firma / produkt je (`context`) |
| Odrážky popisují náplň práce | Neříkají, co se díky tobě povedlo | Výsledky a čísla (potřebuju od tebe, viz kap. 5) |
| Freelance klienti jako samostatné pozice | 4 firmy za 3 roky vypadají jako přeskakování | Jedna hlavička „Independent software engineer“, klienti pod ní |
| Karty a třísloupcové dovednosti | Hůř čitelné pro ATS, víc místa | Jeden sloupec, dovednosti na řádcích |
| Chybí lokalita, forma spolupráce, jazyky nahoře | Recruiter to filtruje jako první | Řádek faktů pod headline |
| 7 certifikátů pod sebou | Zabírají místo, všechny z jednoho roku a jedné firmy | Jeden řádek „Lightbend (Akka), 2020: …“ |
| Seznam 25 zkratek v PDF | Čtvrt strany, API / HTTP / AWS netřeba vysvětlovat | V tisku jen méně známé (BSC, EVM, RAML, …), na webu tooltip u všech |
| Jen roky, ne měsíce | „2018 – 2019“ může být 2 měsíce i 2 roky | Pro posledních 10 let měsíc/rok (LinkedIn je má) |
| Role „Senior Java Developer“ v Leveris | Psal jsi i Scala službu; titul táhne zpět k Javě | Zvážit „Senior Software Engineer (Java, Scala)“ – rozhodni ty |
| V historii jsou pozice a projekty ve dvou seznamech | Stejná firma dvakrát, texty se opakují | U každého zaměstnavatele jeho role a projekty pohromadě |

## 3. Co návrh `/cv-2026/` mění

**Krátké CV (2 strany A4):**
1. Jméno, headline s doménou, řádek faktů (Praha / CET, freelance B2B, hybrid / remote, EN + CZ), kontakty.
2. Summary na 3 věty + 4 silné stránky s důkazem (Scala a FP; event-driven a reactive; banking a fintech;
   software pro vývojáře).
3. Experience: „Independent software engineer, 2018 – present“ s klienty Carpentum a Leveris v detailu
   (kontext, odrážky, stack na řádek), krátké zakázky Creative Dock a Robot Reader v jedné větě.
4. Earlier career po řádcích (KB sloučená, 1999 – 2018).
5. Skills na třech řádcích (Languages / Architecture / Platforms & tools) s poctivou úrovní.
6. Certifikace, vzdělání, jazyky – každé jeden řádek.
7. Zkratky: tooltip u všech, v tisku jen méně známé.
8. Jeden sloupec, bez karet, kvůli ATS.

**Celá historie:** každý zaměstnavatel jednou (s kontextem a lokalitou), pod ním jeho role a pak jeho projekty,
nahoře rozcestník firem; certifikace se všemi kurzy, vzdělání s diplomovou prací, všechny zkratky.

Návrh má `noindex` a není v sitemapě: vyhledávače ho neindexují, dokud se nerozhodneš.

## 4. Data: nic se neztratilo

- Všechna dosavadní data v `src/content/cv/*.yaml` zůstala. Přibyla jen **nepovinná** pole:
  - `context` u pozic (co firma / produkt je) – používá jen návrh,
  - `common: true` u běžných zkratek ve slovníku – návrh je v tisku vynechá.
- Současné stránky `/cv/` a `/cv/history/` se nezměnily.
- Nové soubory návrhu:
  - `src/pages/cv-2026/index.astro` (krátké CV), `src/pages/cv-2026/history.astro` (celá historie),
  - `src/texts/cv-2026.ts` (headline, fakta, summary, silné stránky),
  - `src/lib/cv-2026.ts` (seskupení pozic a projektů podle zaměstnavatele),
  - tento dokument.

Až se rozhodneš: buď návrh nahradí `/cv/` (přesun dvou stránek a smazání starých), nebo si z něj vezmeme jen části.

## 5. Co potřebuju od tebe, aby CV bylo opravdu silné

1. **Čísla a výsledky** u Carpentum a Leveris (cokoli z toho znáš):
   kolik služeb jsi navrhl / vlastnil, objem transakcí nebo plateb, kolik řetězců / měn,
   latence, dostupnost, velikost týmu, co konkrétně jsi zlepšil nebo zjednodušil.
2. **Měsíce** začátků a konců posledních pozic (z LinkedIn: Carpentum 6/2021, Leveris 2/2019 – 5/2021, …) – mám je
   doplnit do dat?
3. **Headline**: sedí „Senior Scala Engineer · Functional & event-driven backend systems · Fintech“?
4. **Co hledáš**: dostupnost (hned / od …), forma (B2B / zaměstnání), remote / hybrid / onsite.
5. **Titul v Leveris**: ponechat „Senior Java Developer“, nebo „Senior Software Engineer (Java, Scala)“?
6. **Open source a veřejná práce**: odkazy na Jersey / Helidon příspěvky, GitHub projekty, přednášky,
   které chceš ukázat.
7. **Akka verze a další knihovny** (Akka Typed? Cats / ZIO? sbt?), pokud je používáš – jsou to klíčová slova,
   podle kterých se Scala vývojáři hledají.
