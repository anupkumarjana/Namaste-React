// const heading = React.createElement("h1", {id:"heading", className:"text-color"}, "Hello fron CDN React"); //tag, object(attributes), content
// const root = ReactDOM.createRoot(document.getElementById("root")); //to create root we need ReactDOM

// root.render(heading);

// console.log(heading);

/*createElement create an object which is {
    "id": "heading",
    "className": "text-color",
    "children": "Hello fron CDN React"
}*/

/* And .render() takes the object and convert to h1 tag(HTML) into the DOM and add to the root which browser understands*/

//creating nested html elements

const parent = React.createElement("div", { id: "parent" }, [
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

console.log(parent);

//react can be worked in small portion of our app. like which div(root) will be renderd, only that part will be working in react
//and thats why React is a library