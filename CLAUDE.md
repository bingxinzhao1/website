# bingxinzhao.com

Personal academic website of Bingxin Zhao (Wharton). Static, single page, no build step.
Preview by opening `index.html` in a browser. See README.md for the file map and the
GitHub Pages / DNS steps.

## Structure
- `index.html`: bio, News (dated list, newest first), four research directions, Platforms,
  Group. Page text lives here.
- `publications.js`: `window.PUBLICATIONS`, one object per paper (title, authors, venue,
  year, topic, highlights[], image, links[]). Within each topic, papers appear in file order.
- `script.js`: renders paper cards and the by Topic (default) / by Year views.
- `stylesheet.css`: layout adapted from Jon Barron's template; Lato font.
- `images/teasers/*.svg`: generated schematic image per paper (5:3).

## Conventions
- Short author lists as on the old research page; "Bingxin Zhao" is bolded by script.js.
- Do not add "Co-senior author" labels.
- No preprints (arXiv, bioRxiv, medRxiv) in the research directions or paper cards; only
  published or accepted papers. Preprint platforms (PASS, TigerAI) stay under Platforms.
- Topic tags match the four research directions, in the order set by `window.TOPIC_ORDER`
  in publications.js: Genetics of the Human Brain; Inter-organ Connections; Statistical
  Methods and Theory with Biomedical Applications; AI, Agentic Platforms, and Cloud Computing.
- A News item about a paper ends with a one-sentence summary of the paper.
- Writing style: American English, serial commas, no em dashes.
- `cv.pdf` is intentionally not in the repo until a public version (no phone number or
  grant amounts) is supplied. The CV links point to it.
- Do not add a CNAME file until DNS for bingxinzhao.com is ready to switch from Google Sites.
