from fastapi import APIRouter
from fastapi import UploadFile,File
from services.upload_file_service import save_uploaded_file
from services.document_chunking_service import chunk_documents

from services.vector_store_service import (create_vector_db,add_document)

import os

router=APIRouter()

@router.post('/uploadfile/')
async def upload_document(file:UploadFile=File(...)):
    response=await save_uploaded_file(file)
    
    document_chunk= chunk_documents(response["path"])
    
    if os.path.exists('/chroma_db'):
        add_document(document_chunk)
    else:
        create_vector_db(document_chunk)

    
    return{"message":"file uploaded successfully","file":response['fileName']}
    

        