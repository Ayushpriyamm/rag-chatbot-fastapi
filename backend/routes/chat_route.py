from fastapi import APIRouter
from backend.services.retrieval_service import retrieve_response
from backend.services.vector_store_service import load_vector_db
router=APIRouter()

@router.get('/ask/{question}')
def ask_question(question:str,doc_id:str=None):
    
    db=load_vector_db()
    
    print("Printing DB colletion count")
    print(db._collection.count())
    
    response=retrieve_response(vector_db=db, query=question, doc_id=doc_id)

    
    return{
        "answer":response
    }

