# bingxinzhao.com

A static, single-page site. No build step: open `index.html` in a browser to preview it.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | All page text: bio, news, research directions, platforms, group |
| `publications.js` | The paper list (21 published or accepted papers; preprints are left out). Field notes are at the top of the file |
| `script.js` | Draws the paper cards and runs the by Topic / by Year buttons |
| `stylesheet.css` | All styling |
| `images/profile.jpg` | Profile photo (640 x 640, shown as a circle) |
| `cv.pdf` | The file behind both CV links |

## Common edits

- **Add a paper:** copy an entry in `publications.js` and edit it. Its `topic` decides which direction it is listed under; within a direction, papers appear in file order.
- **Add a figure to a paper:** papers show no images by default. To give one a figure, put the image in `images/papers/` and add an `image` field pointing at it. PNG, JPG and SVG all work; 5:3 is the shape the cards expect.
- **Add a news item:** copy the top `<li>` in the News list in `index.html`, then change the date and text.
- **Add or move a person:** edit the lists under `<!-- Group -->` in `index.html`.
- **Update the CV:** replace `cv.pdf` with a file of the same name.

## Publishing on GitHub Pages

1. Create a public repository on GitHub and upload everything in this folder to its root.
2. In the repository, open Settings > Pages, choose "Deploy from a branch", and select the `main` branch and `/ (root)`.
3. Check the site at the `https://<username>.github.io/<repository>/` address GitHub shows.
4. Under "Custom domain" on the same page, enter `www.bingxinzhao.com` and save.
5. At the domain registrar, replace the Google Sites records:
   - `www` CNAME -> `<username>.github.io`
   - apex (`bingxinzhao.com`) A records -> `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
6. Once the domain resolves, tick "Enforce HTTPS" in Settings > Pages.

GitHub's "Managing a custom domain for your GitHub Pages site" page lists the current DNS values; confirm them there before changing the records. Leave the Google Site published until the new one loads on the domain.

Layout adapted from Jon Barron's academic template.
