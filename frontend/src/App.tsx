import { MainLayout } from './layouts/MainLayout';
import { Chat } from './components/chat';
import { Sources } from './components/sources';

function App() {
  return (
    <MainLayout>
      {/* Top header */}
      <header className="border-b border-white/[0.07] px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#e8eaf0]">RAG Chatbot</h1>
        <div className="flex items-center gap-2">
          {/* Status indicators can go here */}
        </div>
      </header>

      {/* Main content split: Chat (left) + Sources (right) */}
      <div className="flex-1 flex gap-4 overflow-hidden p-4">
        {/* Chat Panel */}
        <div className="flex-1 flex flex-col bg-[#1a1f2e] rounded-xl border border-white/[0.07] overflow-hidden">
          <Chat />
        </div>

        {/* Sources Panel */}
        <div className="w-80 bg-[#1a1f2e] rounded-xl border border-white/[0.07] overflow-hidden flex flex-col">
          <Sources />
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
