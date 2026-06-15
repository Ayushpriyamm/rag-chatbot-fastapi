from langchain_community.vectorstores import Chroma
from langchain_classic.chains.combine_documents import  create_stuff_documents_chain
from langchain_classic.chains.retrieval import create_retrieval_chain
from core.llm import llm

from langchain_core.prompts import ChatPromptTemplate,MessagesPlaceholder
from langchain_core.chat_history import InMemoryChatMessageHistory  
from langchain_core.runnables.history import RunnableWithMessageHistory


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
        
    

    #creating system Prompt Template
    system_prompt="""
    You are a professional pdf analyzer.Answer the question based on the provided context.
    if question is not relatable to the provided context just say you are not aware of the topic,
    do not give the wrong answer
    
    context:
    {context}
    """
    
    #creting a Prompt Template
    prompt=ChatPromptTemplate.from_messages([
        ('system',system_prompt),
        MessagesPlaceholder(variable_name='history'),
        ('human','{input}')
    ])
    
    #stuff documents chain pipeline   
    combine_docs_chain=create_stuff_documents_chain(llm=llm,prompt=prompt)
    
    
    #retrivel chain pipeline 
    retrieval_chain=create_retrieval_chain(retriever, combine_docs_chain)
    
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
        history_messages_key="history"               
    )

    #invoking the chain by passing user query and session id
    response=chain_with_history.invoke(
        {"input":query},
        config={
            "configurable":{"session_id":"abc"}
            }
        )

    #List to store the metadata of all the retrived chunks
    pages=[]    
    for doc in response['context']:
        pages.append(doc.metadata["page_label"])
    
    source={
        "doc_id":response['context'][0].metadata['doc_id'],
        "file_name":response['context'][0].metadata['source'],
        "pages":pages
    }
        
    
        

    return{
        "response":response["answer"],
        "sources":source
        } 