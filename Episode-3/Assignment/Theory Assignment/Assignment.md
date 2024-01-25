# Chapter 03 - Laying the Foundation

## What is JSX?

=> JSX stands for JavaScript XML. JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements.

Example 1 using JSX:

```javaScript
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

Example 2 Without JSX:

```javaScript
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

## Superpowers of JSX

=> Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

## Role of type attribute in script tag? What options can I use there?

=> The type attribute specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags. It has a Default value which is “text/javascript”.

type attribute can be of the following types:
text/javascript : It is the basic standard of writing javascript code inside the <script> tag.
Syntax

```javascript
<script type="text/javascript"></script>
```

text/ecmascript : this value indicates that the script is following the EcmaScript standards.
module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
text/babel : This value indicates that the script is a babel type and required bable to transpile it.
text/typescript: As the name suggest the script is written in TypeScript.

## {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

=> {TitleComponent} this is an varibale used in JSX.
{<TitleComponent/>} this is an component
{<TitleComponent></TitleComponent>} This is also the same component as before.


