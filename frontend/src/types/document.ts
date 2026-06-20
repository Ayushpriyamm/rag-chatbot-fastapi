export interface Document {
  id: string;
  name: string;
  size: number;
  uploadedAt: string;
  contentType: string;
  chunks?: number;
}

export interface DocumentUploadResponse {
  success: boolean;
  document: Document;
  message: string;
}
