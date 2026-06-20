interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar will go here */}
      <aside className="w-64 bg-gray-100">
        {/* Sidebar content */}
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
};
