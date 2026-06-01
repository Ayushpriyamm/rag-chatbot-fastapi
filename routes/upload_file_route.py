from fastapi import APIRouter
from fastapi import UploadFile,File
from services.upload_file_service import save_uploaded_file
from services.document_chunking_service import chunk_documents
from services.embedding_service import create_embeddning
from services.retrieval_service import  retrieval_chunks

router=APIRouter()

@router.post('/uploadfile/')
async def upload_document(file:UploadFile=File(...)):
    response=await save_uploaded_file(file)
    
    document_chunk= chunk_documents(response["path"])
    
    vector_db=create_embeddning(document_chunk)
    
    retriver=retrieval_chunks(vector_db)
    
    return{"message":"file uploaded successfully","file":response['fileName']}
    

        