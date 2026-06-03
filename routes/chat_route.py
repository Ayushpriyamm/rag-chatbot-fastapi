from fastapi import APIRouter
from services.retrieval_service import retrieve_response
from services.vector_store_service import load_vector_db
router=APIRouter()

@router.get('/ask/{question}')
def ask_question(question:str):
    
    db=load_vector_db()
    
    response=retrieve_response(vector_db=db,query=question)

    
    return{
        "answer":response
    }

