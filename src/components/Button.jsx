import React from "react";

function Button({ children, bgColor, color }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: color,
        padding: "18px 40px",
        borderRadius: "100px",
        border: "1.5px solid rgba(255, 255, 255, 0.2)",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
