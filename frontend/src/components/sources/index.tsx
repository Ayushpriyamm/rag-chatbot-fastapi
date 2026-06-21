import { FileX, File } from 'lucide-react';
import { vm } from '../../styles/vm.styles';

export const Sources = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b border-white/[0.07] px-4 py-3 shrink-0">
        <h3 className={vm.text.heading}>Retrieved Sources</h3>
        <p className={vm.text.caption}>Documents matched your query</p>
      </div>

      {/* Sources list - scrollable */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {/* Source card example 1 */}
        <div className={vm.chunkCard}>
          <div className="flex items-start gap-2">
            <File size={16} className="text-blue-400 mt-0.5 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className={vm.text.subheading}>Document.pdf</p>
              <p className={vm.text.caption}>Page 5 · Section 2.3</p>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className={vm.chunkScoreText}>Match: 92%</span>
            </div>
            <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
              <div className={vm.chunkScoreBar} style={{ width: '92%' }} />
            </div>
          </div>
          <p className={vm.text.caption}>"Relevant excerpt from the document content will appear here..."</p>
        </div>

        {/* Source card example 2 */}
        <div className={vm.chunkCard}>
          <div className="flex items-start gap-2">
            <File size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className={vm.text.subheading}>Guidelines.pdf</p>
              <p className={vm.text.caption}>Page 12 · Section 4.1</p>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className={vm.chunkScoreText}>Match: 87%</span>
            </div>
            <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
              <div className={vm.chunkScoreBar} style={{ width: '87%' }} />
            </div>
          </div>
          <p className={vm.text.caption}>"Another relevant excerpt goes here..."</p>
        </div>

        {/* Empty state message */}
        <div className="flex items-center justify-center py-8 text-center">
          <div className="space-y-2">
            <FileX size={24} className="text-[#555d72] mx-auto" />
            <p className={vm.text.caption}>No sources yet. Send a message to see results.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
