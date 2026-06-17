from fastapi import APIRouter
from backend.services.file_service import delete_file_service,get_all_files_service

router=APIRouter()

@router.get('/get-documents')
def get_file():
    doc = get_all_files_service()
    return doc
    
    
@router.delete('/delete/{id}')
def delete_file(id:str):
    response=delete_file_service(id=id)
    
    return response