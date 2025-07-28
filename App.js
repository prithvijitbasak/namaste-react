import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => (
  <div>
    <h1>Heading from child</h1>
  </div>
);

const value = 100;

const Heading2 = () => {
  return (
    <div className="parent">
      <h1>hi from parent</h1>
      {value}
      <Heading />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading2 />);
