from fastapi import APIRouter
from services.delete_file_service import delete_file_service

router=APIRouter()

@router.delete('/delete/{id}')
def delete_file(id:str):
    response=delete_file_service(id=id)
    
    return response