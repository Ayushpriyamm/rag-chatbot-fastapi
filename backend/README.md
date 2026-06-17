# RAG Chatbot FastAPI

A Retrieval-Augmented Generation (RAG) chatbot built using FastAPI, LangChain, Vector Databases, and Large Language Models (LLMs).

## Problem Statement

Large Language Models can generate impressive responses, but they often lack access to custom or private documents.

Users frequently need a way to ask questions about their own PDFs, notes, reports, or documents without manually searching through hundreds of pages.

This project aims to solve that problem by enabling users to upload documents and interact with them through natural language conversations.

## Project Goal

The goal of this project is to build a production-style RAG pipeline that:

* Accepts user documents
* Extracts and processes document content
* Creates vector embeddings
* Stores embeddings in a vector database
* Retrieves relevant information based on user queries
* Generates context-aware responses using an LLM
