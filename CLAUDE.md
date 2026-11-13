# bingxinzhao.com

Personal academic website of Bingxin Zhao (Wharton). Static, single page, no build step.
Preview by opening `index.html` in a browser. See README.md for the file map and the
GitHub Pages / DNS steps.

## Structure
- `index.html`: bio, News (dated list, newest first), four research directions, Platforms,
  Group. Page text lives here.
- `publications.js`: `window.PUBLICATIONS`, one object per paper (title, authors, venue,
  year, topic, highlights[], links[], optional image). Within each topic, papers appear in file order.
- `script.js`: renders paper cards and the by Topic (default) / by Year views. Both views
  share the same boxed cards and a second row of filter buttons (topics or years).
- `stylesheet.css`: layout adapted from Jon Barron's template; Lato font.
- Paper cards are text only. Do not add generated or decorative images; a real figure
  from the paper may be added via the optional `image` field.

## Conventions
- Short author lists: "Bingxin Zhao et al." when first author; "First Author, …, Bingxin Zhao"
  when last (corresponding) author; "First Author, …, Bingxin Zhao, …, Last Author" when a
  contributing author. "Bingxin Zhao" is bolded by script.js.
- Contributing-author papers are listed after Bingxin's own first- and last-author papers
  within each topic (journals of Nature Communications level and selected others).
  "Accepted in principle" papers link to their preprint and say so in the venue.
- Do not add "Co-senior author" labels. The self-rankings paper carries a
  "*co-corresponding authors" note (optional `note` field; Bingxin Zhao and Weijie
  Su are starred in the author list), as requested.
- No preprints (arXiv, bioRxiv, medRxiv) in the research directions or paper cards; only
  published or accepted papers. Preprint platforms (PASS, TigerAI) stay under Platforms.
- Topic tags: the four research directions plus "Aging and Disease Risk" (contributing-author
  work on organ aging, multimorbidity, and disease risk). Order is set by `window.TOPIC_ORDER`
  in publications.js: Inter-organ Connections; Genetics of the Human Brain; Statistical
  Methods and Theory; AI for Science and Research Platforms; Aging and Disease Risk. A paper
  may list two topics (`topic` as an array, main topic first); it then appears under both,
  after the papers whose main topic it is. Keep two-topic papers few (currently five).
- The by Year view shows one group per year for the last five years and groups older papers
  as "YYYY and earlier" (computed from the current year in script.js).
- UKB-MDRMF carries a "*co-first authors" note (Yukang Jiang and Bingxin Zhao starred).
- Paper highlights: short, at most two lines per paper, grouped by kind (journal features in
  one line, press coverage in another, awards as "YEAR Award Name"). Keep every link.
- A News item about a paper ends with a one-sentence summary of the paper.
- Colors: Penn Blue #011F5B with Marine Gray and Morning Yellow accents (Wharton visual
  standards). No red: it clashed with the blue. Paper cards are boxed; the title links to the paper.
- Update the footer's "Last updated" month when making content changes.
- Writing style: American English, serial commas, no em dashes.
- `cv.pdf` is the public CV (no grant amounts). Replace it with a file of the same name to
  update; never commit the full internal CV.
- Google Analytics tag (G-VGGC3K9481) is in the `<head>` of index.html. Keep it.
- `CNAME` holds www.bingxinzhao.com, the custom domain for GitHub Pages. Do not remove it.
