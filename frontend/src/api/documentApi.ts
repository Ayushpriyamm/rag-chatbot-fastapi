import axiosInstance from './axios';
import type { Document } from '../types/document';

export const documentApi = {
  // Get all documents
  getDocuments: async (): Promise<Document[]> => {
    const response = await axiosInstance.get('/documents');
    return response.data;
  },

  // Upload a document
  uploadDocument: async (file: File): Promise<Document> => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axiosInstance.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete a document
  deleteDocument: async (documentId: string): Promise<void> => {
    await axiosInstance.delete(`/documents/${documentId}`);
  },

  // Get document by ID
  getDocument: async (documentId: string): Promise<Document> => {
    const response = await axiosInstance.get(`/documents/${documentId}`);
    return response.data;
  },
};
