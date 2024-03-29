# Chapter 01 - Inception

## What is Emmet?
=> Emmet is a set of plug-ins for text editors that allows for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist.

## Difference between a Library and Framework?
=> A library is similar to building a cottage from the ground up. You may design your house as you want, with just about any architecture you want, and you can arrange your rooms however you want. Framework, on the other hand, is like buying a new cottage. You don’t have to deal with construction issues, but you can’t pick how to arrange your areas because the cottage is already completed.

## What is CDN? Why do we use it?
=> A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy    applications. CDN can stand for content delivery network or content distribution network.
Content delivery networks (CDNs) provide many benefits that improve website performance and support core network infrastructure. For example, a CDN can do the following tasks:
 a. Reduce page load time
 b. Reduce bandwidth costs
 c. Increase content availability
 d. Improve website security

## Why is React known as React?
=> React is a JavaScript library for building user interfaces. It was developed by Facebook, and the name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.” The library was designed to “react” to changes in data.

## What is crossorigin in script tag?
=> The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain. CORS is used to manage cross-origin requests.

## What is diference between React and ReactDOM?
=> React is, at its core, a library for building user interfaces. It introduces the concept of components, which allow developers to craft reusable and self-contained UI elements. These components define how a user interface should appear based on given inputs (props and state). React operates with a virtual representation of the DOM, known as the Virtual DOM, which is an abstraction of the actual browser’s DOM. By working with this abstraction, React can determine the most efficient way to update the browser’s DOM when data changes, leading to efficient and performant UI updates.

ReactDOM, on the other hand, acts as the glue between React’s Virtual DOM and the actual browser’s DOM. It provides the means to render React components into the DOM. The primary method it offers is 'ReactDOM.render()', which is used to take a React component and render it into a specified DOM node. Additionally, ReactDOM provides utilities for directly interacting with the DOM, like 'findDOMNode()' (though its use is often discouraged in favor of more “React-ish” approaches). Importantly, ReactDOM is specific to web browsers.

The reason for this separation is React’s design philosophy to be platform-agnostic. While ReactDOM deals with web-specific rendering, there are other renderers like React Native (for mobile apps) or ReactVR (for virtual reality) that leverage the core React library to target different platforms. By decoupling the core definitions of components from the platform-specific rendering logic, React becomes a versatile solution for various environments.

While React provides the tools and concepts to define component-based user interfaces, ReactDOM handles the task of rendering those interfaces in a web environment. Together, they form the foundation of React web applications.

## What is difference between react.development.js and react.production.js files via CDN?
=> In development mode, we can enable and utilize React developer tools, devtools profiler, debugging environment attached with source code. We can utilize various functionalities such as Hot Module Replacement, diagnostics so that development environment will help to debug code.

In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.

## What is async and defer?
=> 'async' and 'defer' are attributes used with the '<script>' tag in HTML to control the loading and execution of external scripts.

-  'async' attribute:  When you add 'async' to a '<script>' tag, it tells the browser to download the script while continuing to parse the HTML. The script is then executed asynchronously without waiting for the entire script to be downloaded. This means the script doesn't block the HTML parsing and other resources from being fetched and loaded. Once the script is downloaded, it's executed as soon as possible, potentially out of order with respect to other scripts or the HTML content.

   Example: '<script src="example.js" async></script>'

-  'defer' attribute:  Similarly, 'defer' also downloads the script asynchronously. However, it defers the execution of the script until the HTML parsing is complete. The deferred script will be executed in the order they appear in the document, right before the 'DOMContentLoaded' event. This attribute is useful when the script relies on the DOM structure.

   Example: '<script src="example.js" defer></script>'

Using 'async' and 'defer' can improve website loading performance by allowing the HTML parsing and rendering to proceed without being blocked by external scripts. The choice between 'async' and 'defer' depends on when you want the script to be executed in relation to the HTML parsing and DOM readiness.

