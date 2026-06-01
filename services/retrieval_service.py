from langchain_community.vectorstores import Chroma
from langchain_classic.chains.combine_documents import  create_stuff_documents_chain
from langchain_classic.chains.retrieval import create_retrieval_chain
from core.llm import llm

from langchain_core.prompts import ChatPromptTemplate


def retrieval_chunks(vector_db:Chroma):
    retriever=vector_db.as_retriever(search_type='similarity',search_kwargs={"k":3})
    
    prompt = ChatPromptTemplate.from_template("""
    Answer the question based on the provided context.

    Context:
    {context}

    Question:
    {input}
    """)
    
    #stuff documents chain pipeline
    
    combine_docs_chain=create_stuff_documents_chain(llm=llm,prompt=prompt)
    
    #retrivel chain pipeline 
    
    retrieval_chain=create_retrieval_chain(retriever, combine_docs_chain)
    
    response=retrieval_chain.invoke({"input":"what is the major skills of the candidate"})
    
    print(response["answer"])
    
    return response["answer"]