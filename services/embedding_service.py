from core.embedding import embedding
from langchain_community.vectorstores import Chroma


def create_embeddning(doc):
    
    db=Chroma.from_documents(documents=doc,embedding=embedding,persist_directory="./chroma_db")
    
    return db
    