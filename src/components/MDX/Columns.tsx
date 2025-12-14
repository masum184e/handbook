import React from "react";

export default function Columns({ cols = 3, children }) {
  return (
    <div
      className="row"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "1rem",
        margin: "0 0.15rem"
      }}
    >
      {children}
    </div>
  );
}
