
from fastapi import APIRouter
from fastapi.responses import HTMLResponse
from utils.manual_template import GET_INSTRUCTION_HTML

home_router = APIRouter()

@home_router.get("/", response_class=HTMLResponse)
async def read_root():
    """Returns the beautiful instruction manual."""
    return GET_INSTRUCTION_HTML()
