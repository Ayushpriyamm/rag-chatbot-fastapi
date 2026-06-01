
from langchain_community.document_loaders import PyPDFLoader,TextLoader,CSVLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

def chunk_documents(file_path:str):
    if file_path.endswith(".pdf"):
        loader=PyPDFLoader(file_path)
    elif file_path.endswith(".txt"):
        loader=TextLoader(file_path)
    elif file_path.endswith(".csv"):
        loader=CSVLoader(file_path)
    else:
        return {"messsage":"Only .pdf , .txt and .csv file is supported"}
    
    documents=loader.load()
    
    
    
    splitter=RecursiveCharacterTextSplitter(chunk_size=1000,chunk_overlap=100)
    
    chunks=splitter.split_documents(documents)
    
    print("chunk size",len(chunks))
    
    return chunks
