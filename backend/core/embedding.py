from langchain_huggingface import HuggingFaceEmbeddings

embedding=HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

#query_res=embedding.embed_query("Hi how are a you")

#print(query_res)