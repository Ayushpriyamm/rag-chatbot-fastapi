import axiosInstance from './axios';
import type { ChatMessage, ChatResponse } from '../types/chat';

export const chatApi = {
  // Send a chat message
  sendMessage: async (message: string, documentIds?: string[]): Promise<ChatResponse> => {
    const response = await axiosInstance.post('/chat', {
      message,
      document_ids: documentIds,
    });
    return response.data;
  },

  // Get chat history
  getChatHistory: async (): Promise<ChatMessage[]> => {
    const response = await axiosInstance.get('/chat/history');
    return response.data;
  },

  // Clear chat history
  clearChatHistory: async (): Promise<void> => {
    await axiosInstance.delete('/chat/history');
  },
};
