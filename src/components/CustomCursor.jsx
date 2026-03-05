import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Small dot (fast)
      dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;

      // Ring (slight delay using transition)
      ringRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-400 rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"
      />
    </>
  );
};

export default CustomCursor;