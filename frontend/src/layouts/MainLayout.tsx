import { Sidebar } from '../components/sidebar';
import { vm } from '../styles/vm.styles';
import { ResizablePanel } from '../components/ResizablePanel';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={`${vm.page} h-screen overflow-hidden flex`}>
      <ResizablePanel defaultWidth={300} minWidth={180} maxWidth={600} className={vm.sidebar}>
        <Sidebar />
      </ResizablePanel>

      {/* Main content area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[#0d0f14]">
        {children}
      </main>
    </div>
  );
};