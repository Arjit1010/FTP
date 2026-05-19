# First Tactical Projects — Website

## File structure

```
ftp-website/
├── index.html       ← Homepage
├── projects.html    ← Project detail page (Forss, Port Nigg, Dounreay)
├── team.html        ← Leadership team page
├── contact.html     ← Contact form page
├── style.css        ← All styles (single file)
├── app.js           ← Navigation, animations, form validation
└── images/          ← Create this folder for team headshots & project images
```

## How to use in VS Code

1. Open the `ftp-website` folder in VS Code (`File → Open Folder`)
2. Install the **Live Server** extension if you haven't already (Extensions panel → search "Live Server")
3. Right-click `index.html` → **Open with Live Server**
4. Your site opens at `http://127.0.0.1:5500`

## How to push to GitHub Pages

```bash
git add .
git commit -m "add FTP website files"
git push origin main
```

Site will be live at: `https://yourusername.github.io`

## Adding team headshots

1. Create an `images/` folder inside `ftp-website/`
2. Add headshot photos (JPG/PNG, recommend: square crop, min 400×400px)
3. In `team.html`, replace the placeholder div:

```html
<!-- Replace this: -->
<div class="team-photo-placeholder">
  <span>AW</span>
</div>

<!-- With this: -->
<div class="team-photo" style="background-image: url('images/allan-whitelaw.jpg'); height: 220px; background-size: cover; background-position: center top;"></div>
```

## Adding a real contact form backend

The form currently shows a success message on submission without sending data anywhere.
To connect it to a real backend:

**Option A — Formspree (free, no code needed):**
1. Sign up at formspree.io
2. Create a form and get your endpoint URL
3. In `app.js`, replace the simulation comment with:
```javascript
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: new FormData(form),
  headers: { Accept: 'application/json' }
});
```

**Option B — Netlify Forms (if hosting on Netlify):**
Add `netlify` attribute to the form tag: `<form netlify ...>`

## Customisation notes

- **Colours**: All colours are CSS variables at the top of `style.css`. Change `--green` to update the brand colour throughout.
- **Company details**: Update the address, company number, and email references if these change.
- **Confidentiality disclaimer**: The footer disclaimer is on every page — adjust wording as needed.
- **Stats on homepage**: The hero stat bar figures are hardcoded — update in `index.html` as the pipeline grows.

## Important content notes (per FTP brand guidelines)

- Experience figures (60+ years) refer to the **combined active leadership team** (Whitelaw + Gupta), not FTP corporate history
- Allan Grant and Mike Deery are listed as **Advisory Principals**, not directors
- All project capex and timeline figures are indicative — mark as such in any press/public release
- The site includes a standard investment disclaimer in every footer
