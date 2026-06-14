from services.vector_store_service import  load_vector_db

def delete_file_service(id:str):
    db=load_vector_db()
    
    matching_data=db._collection.get(where={'doc_id':id})
    ids_to_delete=matching_data["ids"]
    print("maticung Data: ")
    print(matching_data)
    
    if ids_to_delete:        
        db._collection.delete(ids=ids_to_delete)        
        return {"message":f"Document with {id} delete sucessfully"}
    else:
        return {"message":f"No document with this {id} is found"}
    
    