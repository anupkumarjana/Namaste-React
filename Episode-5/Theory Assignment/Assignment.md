# Chapter 05 - Let's get Hooked!

## What is the difference between Named Export, Default export and * as export?

=> 
    // Named Export can be exported as : export const Body
                       Imported as : import {Body} from "../components"

   // Default Export can exported as : export default Body
                       Imported as : import Body from "../components"

    * as export => // moduleE.js
                    export const variableA = "A";
                    export const variableB = "B";

                    // moduleF.js
                    import * as myModuleE from './moduleE.js';
                    console.log(myModuleE.variableA);  // Output: A
                    console.log(myModuleE.variableB);  // Output: B


## What is the importance of config.js file

=>  It is manily used to for keeping secret env variables and to keep the constant datas or to store the api keys and credentials.

## What are React Hooks?

=>  React Hooks are nothing but powerfull JS utility functions. Which are mainly used to manage state of DOM.

## Why do we need a useState Hook?

=>  To manage state of any component. And by this hook React can update the DOM using Diff algorithm. 

