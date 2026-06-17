from backend.core.embedding import embedding
from langchain_community.vectorstores import Chroma

from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

DB_PATH = str(BASE_DIR / "chroma_db")

def create_vector_db(chunks):
    db=Chroma.from_documents(
        documents=chunks,
        embedding=embedding,
        persist_directory=DB_PATH
        )
    return db
    

def load_vector_db():
    db=Chroma(
        persist_directory=DB_PATH,
        embedding_function=embedding
    )
    return db

#to add new documents in currnt existing db
def add_document(chunks):
    db=load_vector_db()
    
    db.add(chunks)
    
    return db

    
    db=Chroma.from_documents(documents=doc,embedding=embedding,persist_directory="./chroma_db")
    
    return db
    