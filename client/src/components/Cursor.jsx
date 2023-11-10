import React, { useState } from "react";

const Cursor = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <>
      <div
        className="cursor-outline"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
      <div
        className="cursor-point"
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
    </>
  );
};

export default Cursor;
