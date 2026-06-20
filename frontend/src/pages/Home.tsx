import { MainLayout } from '../layouts/MainLayout';

export const Home = () => {
  return (
    <MainLayout>
      <div className="flex-1 flex flex-col gap-4 p-6">
        <h1 className="text-3xl font-bold text-amber-200">RAG Chatbot</h1>
        
        {/* Upload section will go here */}
        <div className="bg-white rounded-lg shadow p-4">
          {/* Upload component */}
        </div>

        {/* Chat section will go here */}
        <div className="flex-1 bg-white rounded-lg shadow flex flex-col">
          {/* Chat component */}
        </div>
      </div>
    </MainLayout>
  );
};
