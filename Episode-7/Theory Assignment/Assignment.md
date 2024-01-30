# Chapter 07 - Finding the Path

### What are various ways to add images into our App? Explain with code examples.

=>
Use the import keyword.

```javascript
import logo from "./assets/logo.png";
<img src={logo} />;
```

Use the require keyword.

```javascript
<img src={require("./assets/logo.png")} />
```

Import SVGs directly as a React component.

```javascript
<svg></svg>
```

Load images directly from the network.

```javascript
<img src="https://example.com" />
```

### What would happen if we do console.log(useState())?

=>

### How will useEffect behave if we don't add a dependency array ?

=> It'll be called on every component render.

### What is SPA?

=> SPA is Single Page Application. And react helps us to build such SPAs. SPA has some benifits:
1.Dynamic Updates
2.Client-Side Routing
3.Improved Performance
4.Enhanced User Experience

### What is difference between Client Side Routing and Server Side Routing?

=> Client-Side Rendering (CSR):

Rendering Location: In CSR, the rendering of web pages occurs on the client side (in the user's browser).

Initial Load: The initial HTML page sent by the server is a minimal shell that includes JavaScript files. The browser then executes these scripts to fetch and render additional content.

Pros:

Faster subsequent page loads: Once the initial HTML and JavaScript are loaded, navigating between pages is fast, as only data needs to be fetched and the page can be updated dynamically.
Better for complex, interactive user interfaces: Well-suited for applications where a lot of client-side interactivity and dynamic updates are required.

Cons:

Slower initial load: The user might experience a delay before the page becomes fully interactive, as the initial HTML is minimal, and the browser needs to download and execute JavaScript files.
SEO challenges: Search engines may have difficulty indexing content that is loaded asynchronously via JavaScript.
Server-Side Rendering (SSR):

Rendering Location: In SSR, the server sends fully rendered HTML pages to the client.

Initial Load: The server processes the request, fetches the necessary data, and generates an HTML page, which is then sent to the client. The client receives a fully rendered page.

Pros:

Faster initial load: Since the server sends a fully rendered HTML page, the user sees content more quickly, especially beneficial for content-heavy pages.
Improved SEO: Search engines can easily crawl and index the content, as it is present in the initial HTML response.

Cons:

Slower subsequent page loads: Navigating between pages may be slower compared to CSR, as the server needs to generate a new HTML page for each request.
Higher server load: The server has to handle the rendering for each request, which may lead to higher server resource usage.
Many modern web applications use a combination of both CSR and SSR, a strategy known as "Hybrid Rendering" or "Universal Rendering." This approach aims to combine the advantages of both CSR and SSR to optimize the user experience and address the associated trade-offs.
