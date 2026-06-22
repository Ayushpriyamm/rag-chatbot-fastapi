from langchain_community.vectorstores import Chroma
from langchain_classic.chains.combine_documents import  create_stuff_documents_chain
from langchain_classic.chains.retrieval import create_retrieval_chain
from backend.core.llm import llm
from backend.core.prompts import system_prompt,contextualize_system_prompt

from langchain_core.prompts import ChatPromptTemplate,MessagesPlaceholder
from langchain_core.chat_history import InMemoryChatMessageHistory  
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_classic.chains.history_aware_retriever import create_history_aware_retriever


chat_history_store={}

def retrieve_response(vector_db:Chroma,query:str,doc_id:str):
    retriever=None
    if doc_id:
        retriever=vector_db.as_retriever(
            search_type='similarity',
            search_kwargs={
                "k":3,
                "filter":{"doc_id":doc_id}},
            
            )
    else:
        retriever=vector_db.as_retriever(
            search_type='similarity',
            search_kwargs={"k":3})
        
    
    
    #creting a Prompt Template for answer generation
    prompt=ChatPromptTemplate.from_messages([
        ('system',system_prompt),
        MessagesPlaceholder(variable_name='chat_history'),
        ('human','{input}')
    ])
    
    #creating a Contextualize Prompt Template for re-phrasing prompt
    contextualize_q_prompt=ChatPromptTemplate.from_messages([
        ("system",contextualize_system_prompt),
        MessagesPlaceholder(variable_name="chat_history"),
        ("human","{input}")
        
    ])
    history_aware_retriever=create_history_aware_retriever(
        llm=llm,
        retriever=retriever,
        prompt=contextualize_q_prompt
        
    )
    
    #stuff documents chain pipeline   
    combine_docs_chain=create_stuff_documents_chain(llm=llm,prompt=prompt)
    
    
    #retrivel chain pipeline 
    retrieval_chain=create_retrieval_chain(history_aware_retriever, combine_docs_chain)
    
    #funtion to get history for particular session Id
    def get_history_by_session_id(session_id:str):
        if session_id not in chat_history_store:
            chat_history_store[session_id]=InMemoryChatMessageHistory()
        return chat_history_store[session_id]

   #creting a chain by wrapping with message histor
    chain_with_history=RunnableWithMessageHistory(
        runnable=retrieval_chain,
        get_session_history=get_history_by_session_id,
        input_messages_key="input",
        output_messages_key='answer',
        history_messages_key="chat_history"               
    )

    #invoking the chain by passing user query and session id
    response=chain_with_history.invoke(
        {"input":query},
        config={
            "configurable":{"session_id":"abc"}
            }
        )

    print("="*50)
    print(response)
    print("Context Length:", len(response["context"]))
    print("="*50)
    #List to store the metadata of all the retrived chunks
    
    context_docs = response.get("context", [])

    pages = [
        doc.metadata.get("page_label")
        for doc in context_docs
    ]
    
    if context_docs:
        source = {
            "doc_id": context_docs[0].metadata.get("doc_id"),
            "file_name": context_docs[0].metadata.get("source"),
            "pages": pages
        }
    else:
        source = {
            "doc_id": None,
            "file_name": None,
            "pages": []
        }
        
    
        

    return{
        "response":response["answer"],
        "sources":source
        } 