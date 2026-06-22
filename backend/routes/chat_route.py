from fastapi import APIRouter, HTTPException
from backend.services.retrieval_service import retrieve_response
from backend.services.vector_store_service import load_vector_db
from pydantic import BaseModel
from typing import Optional
router=APIRouter()

class AskRequest(BaseModel):
    message:str 
    doc_id:Optional[str]=None

@router.post('/ask')
def ask_question(request:AskRequest):
    if not request.message.strip():
        raise HTTPException(
            status_code=400,
            detail="Question cannot be empty"
        )

    try:
        db = load_vector_db()
        response = retrieve_response(
            vector_db=db,
            query=request.message,
            doc_id=request.doc_id
        )

        return {
            "response": response["response"],
            "metadata": response["sources"]
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

