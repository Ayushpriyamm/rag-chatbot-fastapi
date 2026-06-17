from backend.core.llm import llm

def ask_llm(question:str):
    response=llm.invoke(question)
    return response.content