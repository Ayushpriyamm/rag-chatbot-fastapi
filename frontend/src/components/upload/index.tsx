import { useState, useRef } from 'react';
import { documentApi } from '../../api/documentApi';
import { vm } from '../../styles/vm.styles';
import { Cloud } from 'lucide-react';

export const Upload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await documentApi.uploadDocument(file);
      setSuccess(true);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload document');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (!file || !fileInputRef.current) return;
    const dt = new DataTransfer();
    dt.items.add(file);
    fileInputRef.current.files = dt.files;
    fileInputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
  };

  return (
    <div className="space-y-2">
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        accept=".pdf,.doc,.docx,.txt,.md"
      />

      {/* Drop zone */}
      <div
        onClick={handleUploadClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          ${vm.uploadZone}
          ${isDragging ? vm.uploadZoneDragging : ''}
          ${isLoading ? vm.uploadZoneLoading : ''}
        `}
      >
        <Cloud size={20} className="text-[#4a9eff]" />
        <p className="text-[12px] font-medium text-[#e8eaf0]">
          {isLoading ? 'Uploading...' : 'Drop PDFs to index'}
        </p>
        <p className="text-[10px] text-center text-[#555d72]">
          <span className={vm.text.highlight}>or click to browse</span>
          {' · max 50MB'}
        </p>

        {/* Progress bar */}
        {isLoading && (
          <div className={vm.progressTrack}>
            <div className={vm.progressFillAnimate} />
          </div>
        )}
      </div>

      {/* Error message */}
      {error && (
        <div className={vm.toast.error}>
          <span className={vm.toastText.error}>{error}</span>
        </div>
      )}

      {/* Success message */}
      {success && (
        <div className={vm.toast.success}>
          <span className={vm.toastText.success}>Document uploaded successfully!</span>
        </div>
      )}
    </div>
  );
};