import React, { useState, useRef } from 'react';

interface ResizablePanelProps {
  defaultWidth?: number;
  minWidth?: number;
  maxWidth?: number;
  children: React.ReactNode;
  className?: string;
}

export const ResizablePanel: React.FC<ResizablePanelProps> = ({
  defaultWidth = 300,
  minWidth = 200,
  maxWidth = 600,
  children,
  className = '',
}) => {
  const [width, setWidth] = useState(defaultWidth);
  const dividerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const startX = e.clientX;
    const startWidth = width;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const diff = moveEvent.clientX - startX;
      const newWidth = startWidth + diff;

      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'auto';
      document.body.style.cursor = 'auto';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'col-resize';
  };

  return (
    <div className="flex h-full">
      <div 
        style={{ width: `${width}px` }} 
        className={`overflow-y-auto flex flex-col flex-shrink-0 ${className}`}
      >
        {children}
      </div>

      <div
        ref={dividerRef}
        onMouseDown={handleMouseDown}
        className="w-1 bg-white/[0.07] hover:bg-blue-500/30 cursor-col-resize transition-colors active:bg-blue-500/50 flex-shrink-0"
      />
    </div>
  );
};
