from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

BASE_DIR = Path(__file__).resolve().parent
DIST_DIR = BASE_DIR / "frontend" / "dist"

app = FastAPI(title="MedAxis API")

# CORS для dev-режима (Vite на :5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- API ---

class ContactRequest(BaseModel):
    name: str
    phone: str
    email: str | None = None
    message: str | None = None
    consent: bool


@app.post("/api/contact")
async def submit_contact(data: ContactRequest):
    # TODO: отправка email, сохранение в БД и т.д.
    return {"status": "ok", "message": "Заявка принята"}


# --- Production: раздача React-сборки ---

if DIST_DIR.exists():
    app.mount("/assets", StaticFiles(directory=DIST_DIR / "assets"), name="assets")
    app.mount("/images", StaticFiles(directory=DIST_DIR / "images"), name="images")

    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        file_path = DIST_DIR / full_path
        if file_path.exists() and file_path.is_file():
            return FileResponse(file_path)
        return FileResponse(DIST_DIR / "index.html")
