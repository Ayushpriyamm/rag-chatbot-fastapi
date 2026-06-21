from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routes.chat_route import router as chat_router
from backend.routes.upload_file_route import router as file_upload_router
from backend.routes.file_route import router as file_router


app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def home():
    return "welcome to rag chatbot"


app.include_router(chat_router)
app.include_router(file_upload_router)
app.include_router(file_router)