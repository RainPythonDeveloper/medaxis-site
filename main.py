from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

BASE_DIR = Path(__file__).resolve().parent

app = FastAPI(title="MedAxis")

# Раздача статических файлов (CSS, JS, картинки)
app.mount("/static", StaticFiles(directory=BASE_DIR / "static"), name="static")


@app.get("/", response_class=HTMLResponse)
async def root():
    """Отдаёт главную страницу."""
    index = BASE_DIR / "static" / "index.html"
    return HTMLResponse(content=index.read_text(encoding="utf-8"))
