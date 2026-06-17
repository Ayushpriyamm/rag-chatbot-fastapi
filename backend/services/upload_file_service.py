from fastapi import UploadFile,File
from pathlib import Path

BASE_DIR=Path(__file__).resolve().parent.parent
UPLOAD_DIR=BASE_DIR/"uploads"

async def save_uploaded_file(file:UploadFile=File(...)):
    UPLOAD_DIR.mkdir(exist_ok=True)
    
    file_path=UPLOAD_DIR/file.filename
    
    content=await file.read()
    
    with open (file_path,"wb") as f:
        f.write(content)
        
    return {
        "fileName":file.filename,
        "path":str(file_path)
    }