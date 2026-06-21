import axiosInstance from './axios';
import type { Document } from '../types/document';

export const documentApi = {
  // Get all documents
  getDocuments: async (): Promise<Document[]> => {
    const response = await axiosInstance.get('/get-documents');
    return response.data;
  },

  // Upload a document
  uploadDocument: async (file: File): Promise<Document> => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axiosInstance.post('/uploadfile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete a document
  deleteDocument: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/delete/${id}`);
  },

  // // Get all document
  // getDocument: async (): Promise<Document> => {
  //   const response = await axiosInstance.get('/get-documents');
  //   return response.data;
  // },
};
