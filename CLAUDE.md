# bingxinzhao.com

Personal academic website of Bingxin Zhao (Wharton). Static, single page, no build step.
Preview by opening `index.html` in a browser. See README.md for the file map and the
GitHub Pages / DNS steps.

## Structure
- `index.html`: bio, News (dated list, newest first), four research directions, Platforms,
  Group. Page text lives here.
- `publications.js`: `window.PUBLICATIONS`, one object per paper (title, authors, venue,
  year, topic, highlights[], links[], optional image). Within each topic, papers appear in file order.
- `script.js`: renders paper cards and the by Topic (default) / by Year views.
- `stylesheet.css`: layout adapted from Jon Barron's template; Lato font.
- Paper cards are text only. Do not add generated or decorative images; a real figure
  from the paper may be added via the optional `image` field.

## Conventions
- Short author lists: "Bingxin Zhao et al." when first author; "First Author, …, Bingxin Zhao"
  when last (corresponding) author. "Bingxin Zhao" is bolded by script.js.
- Do not add "Co-senior author" labels.
- No preprints (arXiv, bioRxiv, medRxiv) in the research directions or paper cards; only
  published or accepted papers. Preprint platforms (PASS, TigerAI) stay under Platforms.
- Topic tags match the four research directions. Their order on the paper list is set by
  `window.TOPIC_ORDER` in publications.js: Inter-organ Connections; Genetics of the Human
  Brain; Statistical Methods and Theory; AI for Science and Research Platforms. A paper may
  list two topics (`topic` as an array); it then appears under both.
- Paper highlights: short, at most two lines per paper, grouped by kind (journal features in
  one line, press coverage in another, awards as "YEAR Award Name"). Keep every link.
- A News item about a paper ends with a one-sentence summary of the paper.
- Colors: Penn Blue #011F5B with Marine Gray and Morning Yellow accents (Wharton visual
  standards). No red: it clashed with the blue. Paper cards are boxed; the title links to the paper.
- Writing style: American English, serial commas, no em dashes.
- `cv.pdf` is intentionally not in the repo until a public version (no phone number or
  grant amounts) is supplied. The CV links point to it.
- Do not add a CNAME file until DNS for bingxinzhao.com is ready to switch from Google Sites.
