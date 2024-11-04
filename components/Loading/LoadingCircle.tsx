import React from "react";

const LoadingCircle = () => {
  return (
    <div className="loading-circle mx-auto my-4"></div>
  );
};

export default LoadingCircle;

const styles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .loading-circle {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  .dark .loading-circle {
    border-top: 4px solid #f39c12;
  }

  .light .loading-circle {
    border-top: 4px solid #3498db;
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}