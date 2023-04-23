import React from "react";
import './PageNotFound.css'

export const PageNotFound = () => {
  return (
    <div className="pnf-container">
      <h1 className="pnf-h1">Page Not Found!</h1>
      <p className="pnf-p">The page you're looking for does not exist or has been moved.</p>
      <a href="/">Return to Homepage</a>
    </div>
  );
};
