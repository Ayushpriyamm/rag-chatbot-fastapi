import { SendIcon, PlusIcon } from 'lucide-react';
import { vm } from '../../styles/vm.styles';

export const Chat = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Messages area - scrollable */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col">
        {/* Empty state with suggested prompts */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex flex-col gap-2">
            <h2 className={vm.text.heading}>Welcome to RAG Chatbot</h2>
            <p className={vm.text.body}>Upload documents and ask questions about them</p>
          </div>

          {/* Suggested prompts */}
          <div className="grid gap-2 w-full max-w-md">
            <p className={`${vm.text.label} text-center`}>Try asking about:</p>
            <button className={vm.promptChip}>
              <PlusIcon size={14} />
              Summarize the main points
            </button>
            <button className={vm.promptChip}>
              <PlusIcon size={14} />
              Find specific information
            </button>
            <button className={vm.promptChip}>
              <PlusIcon size={14} />
              Compare documents
            </button>
          </div>
        </div>

        {/* Messages (will be populated with logic) */}
        {/* User message example */}
        <div className="flex justify-end">
          <div className={vm.bubbleUser}>What is this document about?</div>
        </div>

        {/* Assistant message example */}
        <div className="space-y-2">
          <div className={vm.bubbleAssistant}>
            This is a sample assistant response. You'll add real messages with your React logic here.
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className={vm.sourcePill}>📄 Document.pdf · Page 1 · 95% match</span>
          </div>
        </div>
      </div>

      {/* Input area - fixed at bottom */}
      <div className="border-t border-white/[0.07] p-4 shrink-0">
        <div className={vm.chatInputWrap}>
          <input
            className={vm.chatInput}
            placeholder="Ask anything about your documents..."
          />
          <button className={vm.btn.send} aria-label="Send message">
            <SendIcon size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
