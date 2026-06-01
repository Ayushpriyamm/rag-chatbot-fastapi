from fastapi import APIRouter
from services.llm_service import ask_llm

router=APIRouter()

@router.get('/ask')
def ask_question(question:str):
    
    response=ask_llm(question=question)
    
    return{
        "answer":response
    }

