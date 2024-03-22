### Chapter 11 - Data is the new Oil

## What is prop drilling?

=> Prop drilling is the process of passing down data or state through multiple layers of a component hierarchy. By the way, it refers to the practice of passing data from a parent component to its children and then from the children to their own children and so on, until the data reaches the desired component that needs it..

## What is lifting the state up?

=> As we know, every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.

Time to use Lift up the State: If the data in “parent and children components” or in “cousin components” is Not in Sync.

Example 1: If we have 2 components in our App. A -> B where, A is parent of B. keeping the same data in both Component A and B might cause inconsistency of data.

## What is Context Provider and Context Consumer?

=> Context API consists of two main components: the context provider and the context consumer. The provider is responsible for creating and managing the context, which holds the data to be shared between components. On the other hand, the consumer is used to access the context and its data from within a component.

1. Create a Context Object
   First, you need to create a context object using the createContext function from the 'react' library. This context object will hold the data that you want to share across your application.

Create a new file named MyContext.js in the src folder and add the following code to create a context object:

```JavaScript
import { createContext } from 'react';

export const MyContext = createContext("");
```

In the above code, we're importing createContext from React and using it to create a new context object named "MyContext". Then, we are exporting the context object so that we can use it in other parts of our application.

2. Wrap Components with a Provider
   Once you've created a context object, you need to wrap the components that need access to the shared data with a Provider component. The Provider component accepts a "value" prop that holds the shared data, and any component that is a child of the Provider component can access that shared data.

It's important to note that the Provider component should be wrapped around the top-level component in an application to ensure that all child components have access to the shared data.

Here's an example that demonstrates how to wrap components with a Provider in Context API:

```JavaScript
// Create a parent component that wraps child components with a Provider

import { useState, React } from "react";
import { MyContext } from "./MyContext";
import MyComponent from "./MyComponent";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}

export default App;

```

In this example, we have a parent component called App. This component has a state variable called "text", which is initially set to an empty string. We've also defined a function called setText that can be used to update the value of text.

Inside the return statement of the App component, we've wrapped the children of this component with the provider component ("MyContext.Provider"). Then we've passed an object to the value prop of the provider component that contains "text" and "setText" values.

## If you don’t pass a value to the provider does it take the default value?
=> In React's Context API, if you don't pass a value to the provider, it doesn't automatically take a default value. Instead, the value provided by the nearest ancestor provider in the component tree will be used.

Let's illustrate this with an example:

```jsx
// Create a context
const MyContext = React.createContext();

// Define a component that consumes the context
const MyComponent = () => {
  const value = useContext(MyContext);
  return <div>{value}</div>;
};

// Render the component tree with a provider
const App = () => {
  return (
    <MyContext.Provider value="Hello from provider">
      <MyComponent />
    </MyContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

In this example, `MyComponent` is consuming `MyContext`. Inside `MyContext.Provider`, we've provided a value of `"Hello from provider"`. Therefore, when `MyComponent` renders, it will display `"Hello from provider"`.

Now, let's see what happens if we don't provide a value to the provider:

```jsx
const App = () => {
  return (
    <MyContext.Provider>
      <MyComponent />
    </MyContext.Provider>
  );
};
```

In this case, the `value` inside `MyComponent` will be `undefined`. This is because we didn't provide any value explicitly to the provider. Instead, it will fallback to the default value of `undefined`.

If you want to provide a default value that will be used when no value is provided explicitly, you can do so by using the `defaultValue` parameter when creating the context:

```jsx
const MyContext = React.createContext("Default value");

const App = () => {
  return (
    <MyContext.Provider>
      <MyComponent />
    </MyContext.Provider>
  );
};
```

In this case, if no value is provided to the provider, `MyComponent` will still receive `"Default value"` as the context value.
