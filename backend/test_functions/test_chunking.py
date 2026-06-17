from backend.services.document_chunking_service import chunk_documents

chunks=chunk_documents("uploads/ABC_Technology_Employee_HandBook.pdf")

print(f"Total Length of Chunks : \n {len(chunks)}")

for i,chunk in enumerate(chunks):
    print("\n"+"="*50)
    print(f"Chunk {i+1}")
    print("="*50)
    
    print("Metadata : \n")
    print(chunk.metadata)
    
    print("\nContent : \n")
    print(chunk.page_content[:200])

