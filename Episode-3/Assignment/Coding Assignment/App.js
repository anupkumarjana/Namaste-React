//     Create a Nested header Element using React.createElement(h1,h2,h3 inside a
//     div with class “title”)
//     ○ Create the same element using JSX
//     ○ Create a functional component of the same with JSX
//     ○ Pass attributes into the tag in JSX
//     ○ Composition of Component(Add a component inside another)
//     ○ {TitleComponent} vs {<TitleComponent/>} vs
//     {<TitleComponent></TitleComponent>} in JSX
//     ● Create a Header Component from scratch using Functional Components with
//     JSX
//     ○ Add a Logo on left
//     ○ Add a search bar in middle
//     ○ Add User icon on right
//     ○ Add CSS to make it look nice

import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png"
import { FaUser } from "react-icons/fa";

//// this is react element
const header = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "This is h1"),
  React.createElement("h2", {}, "This is h2"),
  React.createElement("h3", {}, "This is h3"),
]);

//// this is react element using jsx
const header1 = (
  <div className="title">
    <h1> This is h1</h1>
    <h2> This is h2</h2>
    <h3> This is h3</h3>
  </div>
);

//// this is functional component using jsx

const Paragraph = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis,
        sint earum. Voluptatum doloribus repellat quis, et totam rerum eveniet
        sequi quidem eligendi eum modi culpa. Nostrum soluta ad laboriosam
        pariatur!
      </p>
    </div>
  );
};

//// functional component and component composition
// const Header = () => {
//   return (
//     <div className="title">
//       <h1> This is h1</h1>
//       <Paragraph/>
//       <h2> This is h2</h2>
//       <h3> This is h3</h3>
//       {header}
//       {header1}
//     </div>
//   );
// };

const Header = () => {
  return (
    <div className="navbar">
      <img
        src={logo}
        alt=""
      />
      <input type="search" />

      <span>
        Sign in <FaUser />
      </span>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
root.render(<Header />);
