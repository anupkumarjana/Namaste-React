import React from "react"
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent", key:1 }, [
  React.createElement("div", { id: "child1", key: 1 }, [
    React.createElement("h1", { id: "heading1", key: 1 }, "this is an h1 tag"),
    React.createElement("h2", { id: "heading2", key: 2 }, "this is an h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: 2 }, [
    React.createElement("h1", { id: "heading1", key: 1 }, "this is an h1 tag"),
    React.createElement("h2", { id: "heading2", key: 2 }, "this is an h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// console.log(parent);
