export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatMetadata {
  doc_id: string | null;
  file_name: string | null;
  pages: string[];
}

export interface ChatResponse {
  response: string;
  metadata: ChatMetadata;
}