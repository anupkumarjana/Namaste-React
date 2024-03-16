# Chapter 09 - Optimizing our App

## When and why do we need lazy()?

When building larger applications, bundling all JavaScript into a single file can lead to longer loading times and decreased efficiency. Code-splitting, also known as chunking or dynamic bundling, addresses this issue by breaking components into smaller bundles based on their usage. The `lazy()` function in React allows us to load components only when they are needed, rather than during the initial loading phase. Here's how you can use `lazy()`:

```javascript
import { lazy } from "react";

const MyLazyComponent = lazy(() => import("./components/MyLazyComponent.js"));
```

## What is suspense?

Suspense is a React component that enables rendering fallback content while waiting for asynchronous operations to complete. When using code-splitting with `lazy()`, Suspense ensures that the UI remains responsive by displaying a loading indicator until the requested component is loaded. Here's an example of how to use Suspense:

```javascript
import { lazy, Suspense } from "react";

const MyLazyComponent = lazy(() => import("./components/MyLazyComponent.js"));

function App() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <MyLazyComponent />
    </Suspense>
  );
}
```

## Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

The error "A component suspended while responding to synchronous input" occurs when a component suspends while handling a synchronous event, such as user input. To prevent this, we can use `startTransition` to mark suspended updates as low-priority. This ensures that the UI remains responsive even during asynchronous operations. Here's how to use `startTransition`:

```javascript
import { useState, startTransition } from "react";

function MyComponent() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch("https://api.example.com/data");
    const result = await response.json();
    setData(result);
  };

  const handleClick = () => {
    startTransition(() => {
      fetchData();
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Load Data</button>
      {data && <div>{data}</div>}
    </div>
  );
}
```

## Advantages and disadvantages of using this code splitting pattern?

Advantages:

- Faster initial page load
- Reduced network payload
- Better user experience

Disadvantages:

- Increased complexity in development
- Potential for runtime errors due to code splitting

## Conclusion

Code splitting, lazy loading, and suspense are powerful tools for optimizing React applications. By selectively loading components and managing asynchronous operations, we can improve performance and user experience.

