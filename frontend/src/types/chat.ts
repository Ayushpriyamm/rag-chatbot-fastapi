export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  sources?: string[];
}

export interface ChatResponse {
  message: ChatMessage;
  sources: string[];
  relevance: number;
}
