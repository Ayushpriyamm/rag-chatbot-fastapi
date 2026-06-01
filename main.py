from fastapi import FastAPI

from routes.chat_route import router as chat_router
from routes.upload_file_route import router as file_upload_router

app=FastAPI()

@app.get('/')
def home():
    return "welcome to rag chatbot"


app.include_router(chat_router)
app.include_router(file_upload_router)