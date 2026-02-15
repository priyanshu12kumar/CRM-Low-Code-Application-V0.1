
from fastapi import APIRouter, HTTPException
from schemas.request_schemas import FileRequest, SaveRequest
from database import repository

api_router = APIRouter()


@api_router.get("/files")
async def get_files():
    """Returns a list of all form names in the database."""
    return repository.list_all_forms()

@api_router.post("/file-content")
async def get_file_content(req: FileRequest):
    """Retrieves the full JSON content for a specific form."""
    content = repository.get_form_by_name(req.name)
    if not content:
        raise HTTPException(status_code=404, detail="Form not found")
    return content

@api_router.post("/save-json")
async def save_json(req: SaveRequest):
    """Saves or updates a form configuration in the database."""
    try:
        repository.save_form_data(req.name, req.content)
        return {"status": "success", "message": f"Form '{req.name}' saved."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/delete-file")
async def delete_file(req: FileRequest):
    """Deletes a form from the database."""
    repository.delete_form(req.name)
    return {"status": "success", "message": f"Form '{req.name}' deleted."}
