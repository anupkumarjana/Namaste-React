import React from "react";
import ReactDOM from "react-dom/client";

// // This is a react element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is an react element🚀"
);

// // JSX- and HTML-like or XML-like syntax

const jsxHeading = <h1>This is an JSX heading</h1>;
// const div = <div className="box"></div>;

// // these are react functional component

const Heading = () => (
  <div>
    <h1>Functional component without return</h1>
  </div>
);

// // Component Composition

let a = 34;

const Heading1 = () => {
  return (
    <div>
      <Heading />

      <h1>Functional component with return {a}</h1>
      <span>{heading}</span>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<Heading1 />);
