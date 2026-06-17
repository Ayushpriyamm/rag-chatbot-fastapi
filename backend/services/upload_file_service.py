from fastapi import UploadFile,File
import os

async def save_uploaded_file(file:UploadFile=File(...)):
    os.makedirs("uploads",exist_ok=True)
    
    content=await file.read()
    
    with open (f"uploads/{file.filename}","wb") as f:
        f.write(content)
        
    return {
        "fileName":file.filename,
        "path":f"uploads/{file.filename}"
    }