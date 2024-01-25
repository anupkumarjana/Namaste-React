# Chapter 06 - Exploring the world

## What is a Microservice?

 => Microservice is smaller components which are deployed in different adresses and they communicate with each others and make the application work. So, the smaller components have their different tasks and they do it efficiently. So whenever we need to chnage in backend, frontend, payment, sms service or email service, we can do that seperately.

## What is Monolith architecture?

 => In one codebase there's everything! There's UI, backend, payment, cart, sms etc at one place. And to manage all the parts together is so costly and tough. And that is Monolith architecture.

## What is the difference between Monolith and Microservice?

 => In Monolith architecture there're all the components together. But in Microservice, they devide the tasks into smaller components. so that we can work on it easily.

 In Monolith architecture, all the components are hosted at one address. But in Microservice there's difference address for different tasks, and they communicatewith each others.

## Why do we need a useEffect Hook?

 => When we have 2 renders and we wanna show something after the 1st render, then we need useEffect to show the 2nd render. As an example, when we are fetching the data from backend api, there's a slight delay, on that delay we can show Shimmer UI. That is the 1st render. When the data got fetched then the useEffect will do the 2nd render, and show the data using UI.

## What is Optional Chaining?

 => Optional chaining (?.) operator access an object's property or function. When that property/function is not defined or null, instead of throwing error, the expression short circuits and evaluates to undefined.

## What is Shimmer UI?

 => When we're having some delay to fetch the data from backend api, insteaed of blank document, we show some Ui which is fake but creates a expectation in user's mind that something is gonna appear on the screen. And user doesn't leave the web page. And that UI is called Shimmer UI.

## What is the difference between JS expression and JS statement?

 => Expressions can be assigned or used as operands, while statements can only be declared. In expression, there would be some conditions or some tasks is going on. But In statement there's no conditions or tasks are performing. We declared a value and that's it. Thats a statement.

## What is Conditional Rendering, explain with a code example?

 => Conditional rendering is rendering the component with some conditions.

 As ann example: We have to filter the products which have 4+ rating. There's a <Product/> component and we can do

 {const filtertedProduct = productData.filter((product)=>product.rating>=4.0)

 <Product {...filtertedProduct}/>}

## What is CORS?

 => Cross-Origin Resource Sharing... CORS is a policy which doesn't allow the api fetched from the one origiin to another origin.

## What is async and await?

=> `async`, `await` makes promises easier to write. `async` makes a function return a Promise, `await` makes a function wait for a Promise.

## What is async and await?

`async`, `await` makes promises easier to write. `async` makes a function return a Promise, `await` makes a function wait for a Promise.

```javascript
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay(); ```

## What is the use of `const json = await data.json();` in getRestaurants()?

 => In getRestaurants to make the data in .json() format we need to wait to come the data first. If we did not use await, it'll throw an error beacause, the data hasn't come and the .json() will try to make the data in json format. But the data is empty. 

