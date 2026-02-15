
import uvicorn
from fastapi import FastAPI
from database.connection import init_db
from routes.api_routes import api_router
from routes.home_routes import home_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Form Builder API")

# Allow frontend origin(s)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for all
    allow_credentials=True,
    allow_methods=["*"],  # allow POST, GET, OPTIONS, etc.
    allow_headers=["*"],
)

# Initialize database on startup
@app.on_event("startup")
def startup_event():
    init_db()

# Include routers
app.include_router(home_router)
app.include_router(api_router, prefix="/api")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True)
