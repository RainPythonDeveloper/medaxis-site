# MedAxis — Medical Equipment Supplier Website

## What is this
B2B landing page for MedAxis, a medical equipment supplier in Kazakhstan (Samsung ultrasound devices). Language: Russian.

## Tech stack
- **Backend:** Python 3.14, FastAPI, Uvicorn
- **Frontend:** React 19, Vite, TypeScript, Tailwind CSS v4, shadcn/ui
- **Database:** None (static site for now)
- **Font:** Inter (via @fontsource-variable/inter)

## Project structure
```
main.py                     ← FastAPI (API + production SPA serving)
requirements.txt            ← Python dependencies
static/                     ← Old vanilla frontend (legacy, can be removed)
frontend/                   ← React app (Vite)
  public/images/            ← mainPic.png, samsung-logo.svg, operationRoom.jpg
  src/
    App.tsx                 ← Root component (all sections assembled)
    main.tsx                ← Entry point
    index.css               ← Tailwind + theme + shadcn CSS vars
    components/
      ui/                   ← shadcn components (button, input, textarea, checkbox, label, carousel, sonner)
      layout/               ← header.tsx, footer.tsx
      sections/             ← hero, company, info, solutions, services, contact
      shared/               ← container, logo, section-title, stat-card, service-card, solution-item
    hooks/                  ← use-mobile-menu, use-scroll-shadow, use-smooth-scroll
    data/                   ← navigation, solutions, services, stats (static data)
    lib/                    ← utils.ts (cn), validation.ts (zod schema)
```

## How to run

### Development (two servers)
```bash
# Terminal 1: API
pip install -r requirements.txt
uvicorn main:app --reload  # http://localhost:8000

# Terminal 2: Frontend
cd frontend && npm install && npm run dev  # http://localhost:5173
```
Vite proxies `/api` → FastAPI automatically.

### Production (single server)
```bash
cd frontend && npm run build
cd .. && uvicorn main:app  # serves both API + React build
```

## Key details
- Design: warm terracotta palette (primary `#C66B54`), warm grays, Inter font
- shadcn components: Button, Input, Textarea, Checkbox, Label, Carousel (embla), Sonner (toasts)
- Contact form: react-hook-form + zod validation + react-imask phone mask (+7 format)
- Services carousel: shadcn Carousel with CarouselApi for counter/nav
- FastAPI endpoint: `POST /api/contact` (name, phone, email, message, consent)

## Conventions
- Frontend code in `frontend/` — never mix with backend
- Static data in `src/data/` — not hardcoded in components
- Icons: lucide-react
- API routes: `main.py` (or split into `routers/` when it grows)
- Russian language throughout the UI
