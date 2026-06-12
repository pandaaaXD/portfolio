# Rim Ghannam — Portfolio

A premium, recruiter-focused portfolio for an IT technician. Pure HTML/CSS/JS — no build step, deploys straight to GitHub Pages.

## Structure

```
index.html        # single-page site (hero, about, skills, experience, passions, contact)
css/style.css     # dark theme, animations, responsive layout
js/main.js        # scroll reveals, typed text, counters, music player, nav
assets/
  img/profile.jpg   # ← add your professional photo here (4:5 ratio looks best)
  cv/Rim-Ghannam-CV.pdf   # ← add your CV here (the Download CV buttons link to it)
  audio/            # ← add guitar/piano recordings here (mp3)
```

## Make it yours

1. **Photo** — drop `profile.jpg` into `assets/img/`. Until then, a styled placeholder is shown.
2. **CV** — add `Rim-Ghannam-CV.pdf` to `assets/cv/`.
3. **Guitar recordings** — add `.mp3` files to `assets/audio/` and update the `tracks` array at the top of the player section in `js/main.js` (title + file path). Tracks without files gracefully show "recording coming soon".
4. **Experience numbers** — the case studies in the Experience section use realistic example metrics. Adjust dates, counts and details in `index.html` to match your real work history.
5. **Certifications** — edit the chips in the Skills section.
6. **LinkedIn** — replace the `https://www.linkedin.com/` placeholder in the Contact section with your profile URL.
7. **Contact form** — wired to [FormSubmit](https://formsubmit.co/) sending to your Gmail. The first submission triggers a one-time confirmation email from FormSubmit — click it to activate.

## Deploy on GitHub Pages

Settings → Pages → Deploy from branch → select your branch, root folder. The `.nojekyll` file is already included.

## Local preview

```
python3 -m http.server 8000
# open http://localhost:8000
```
