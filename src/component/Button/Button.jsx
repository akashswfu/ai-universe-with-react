import React from "react";

const Button = ({ children }) => {
  return (
    <div className="text-center mb-5">
      <button className="btn btn-secondary">{children}</button>
    </div>
  );
};

export default Button;
