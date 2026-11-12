# bingxinzhao.com

Personal academic website of Bingxin Zhao (Wharton). Static, single page, no build step.
Preview by opening `index.html` in a browser. See README.md for the file map and the
GitHub Pages / DNS steps.

## Structure
- `index.html`: bio, News (dated list, newest first), four research directions, Platforms,
  Group. Page text lives here.
- `publications.js`: `window.PUBLICATIONS`, one object per paper (title, authors, venue,
  year, topic, selected, highlights[], image, links[]). Selected papers appear in the
  order of the "Selected" list on the old site's research page.
- `script.js`: renders paper cards and the Selected / by Year / by Topic filters.
- `stylesheet.css`: layout adapted from Jon Barron's template; Lato font.
- `images/teasers/*.svg`: generated schematic image per paper (5:3).

## Conventions
- Short author lists as on the old research page; "Bingxin Zhao" is bolded by script.js.
- Do not add "Co-senior author" labels.
- No preprints (arXiv, bioRxiv, medRxiv) in the research directions or paper cards; only
  published or accepted papers. Preprint platforms (PASS, TigerAI) stay under Platforms.
- Topic tags in use: Inter-organ Connections, AI and Agentic Platforms, Genetics of the
  Human Brain, Genomics and Proteomics, Statistics and Applied Math, Cloud Computing Ecosystems.
- Writing style: American English, serial commas, no em dashes.
- `cv.pdf` is intentionally not in the repo until a public version (no phone number or
  grant amounts) is supplied. The CV links point to it.
- Do not add a CNAME file until DNS for bingxinzhao.com is ready to switch from Google Sites.
