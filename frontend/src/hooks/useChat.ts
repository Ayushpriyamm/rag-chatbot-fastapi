import { useMutation } from '@tanstack/react-query';
import { chatApi } from '../api/chatApi';

export const useChat = () => {
  return useMutation({
    mutationFn: ({ message, documentIds }: { message: string; documentIds?: string[] }) =>
      chatApi.sendMessage(message, documentIds),
  });
};
