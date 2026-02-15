import { useState, useRef } from "react";

function ResizableLayout({children}: {children: React.ReactNode}) {
  const [width, setWidth] = useState(600); // default width
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
  if (isResizing.current) {
    const newWidth = Math.min(Math.max(window.innerWidth - e.clientX, 200), 600);
    setWidth(newWidth);
  }
};

  const handleMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex h-screen">
      {/* Separator (resizer handle) */}
      <div
        onMouseDown={handleMouseDown}
        className="w-1 cursor-col-resize bg-gray-300 hover:bg-gray-400 select-none"
      />
      
      <aside
        style={{ width: `${width}px` }}
        className="bg-white border-r p-8 overflow-y-auto h-full"
      >
        {children}
        <div className="h-8"></div>
      </aside>
    </div>
  );
}

export default ResizableLayout;