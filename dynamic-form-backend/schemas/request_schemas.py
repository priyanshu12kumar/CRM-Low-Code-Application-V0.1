
from pydantic import BaseModel
from typing import Any, Optional

class FileRequest(BaseModel):
    name: str

class SaveRequest(BaseModel):
    name: str
    content: Any

class ResponseMessage(BaseModel):
    status: str
    message: str
