# MedAxis — Medical Equipment Supplier Website

## What is this
B2B landing page for MedAxis, a medical equipment supplier in Kazakhstan (Samsung ultrasound devices). Language: Russian.

## Tech stack
- **Backend:** Python 3.14, FastAPI, Uvicorn
- **Frontend:** Vanilla HTML/CSS/JS (no frameworks, no build step)
- **Database:** None (static site for now)
- **External deps:** Google Fonts (Inter)

## Project structure
```
main.py                 ← FastAPI entry point (app instance)
requirements.txt        ← Python dependencies
static/                 ← All frontend assets
  index.html            ← Single-page landing
  css/style.css         ← Styles (CSS variables, responsive, BEM-like)
  js/script.js          ← Interactivity (slider, form, mobile menu)
  images/               ← mainPic.png, operationRoom.jpg, samsung-logo.svg
```

## How to run
```bash
pip install -r requirements.txt
uvicorn main:app --reload
```
Server at http://127.0.0.1:8000

## Key details
- `main.py` mounts `static/` at `/static` and serves `index.html` on `/`
- All asset paths in HTML are absolute: `/static/css/...`, `/static/js/...`, `/static/images/...`
- CSS uses custom properties for theming (primary color: `#C66B54` terracotta)
- Responsive breakpoints: 1024px, 768px, 480px
- JS handles: mobile burger menu, services carousel (swipe support), contact form with phone mask (+7), smooth scroll, header shadow on scroll

## Conventions
- Keep frontend in `static/` — do not mix with backend code
- API routes go in `main.py` (or split into `routers/` when it grows)
- Russian language throughout the UI
