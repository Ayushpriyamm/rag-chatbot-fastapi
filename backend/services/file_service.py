from backend.services.vector_store_service import  load_vector_db

db=load_vector_db()

def get_all_files_service():
    all_file=db.get()
    
    files=all_file['metadatas']
    print(files)
    docs={}
    for file in files:
        doc_id=file['doc_id']
        if doc_id not in docs:
            docs[doc_id]={
                "doc_id":doc_id,
                "file_name":file['source'],
                "total_pages":file['total_pages']
            }
    
    return list(docs.values())
    
        

def delete_file_service(id:str):
    
    
    matching_data=db._collection.get(where={'doc_id':id})
    ids_to_delete=matching_data["ids"]
    print("maticung Data: ")
    print(matching_data)
    
    if ids_to_delete:        
        db._collection.delete(ids=ids_to_delete)        
        return {"message":f"Document with {id} delete sucessfully"}
    else:
        return {"message":f"No document with this {id} is found"}
    
    