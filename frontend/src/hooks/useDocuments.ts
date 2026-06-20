import { useQuery } from '@tanstack/react-query';
import { documentApi } from '../api/documentApi';

export const useDocuments = () => {
  return useQuery({
    queryKey: ['documents'],
    queryFn: documentApi.getDocuments,
  });
};
