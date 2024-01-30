# Chapter 02 - Igniting our App

## What is `NPM`?

=> This is a package manager for NPM. But "Node Package Manager" is not its full form.

## What is `Parcel/Webpack`? Why do we need it?

=> Parcel/Webpack is a bundler. Which bulndles the code for development and production.
We need them because they make our app fast due to their:
a. Devlopment build
b. Local server
c. HMR - Hot Module Replacement (When we chage in code and save it, it reflects on browser imediately)
d. File Watching Algorithm (When we save, its automatically make the development build and host to the server)
e. Caching for faster build
f. Image Optimisation
g. Minification of the code
h. Bundling the code
i. Compressing
j. Consistent Hashing
k. Code Splitting
l. Differential Bundling- (Parcel/Web-Pack do differnt bundling for differnt versions of browsers.)
m. Digonostics
n. Error Handling
o. Tree Shaking - (Removes unnecessary codes from the app)
p. Differnt build for development and production

## What is `.parcel-cache`

=> .parcel-cache is the cache where parcel caches the development build for faster builds.

## What is `npx` ?

=> npx is the executer for node packages. (node package execute)

## What is difference between `dependencies` vs `devDependencies`?

=> Dependencies which are used in development and production also. But devDependencies are the dependencies can only be used in development build. Those don't go to the production.

## What is Tree Shaking?

=> When we write many codes, which are not using by the app, and by this Tree Shaking, it removes all the unnecessary funtions and codes.

## What is Hot Module Replacement?

=> Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

    Retain application state which is lost during a full reload.
    Save valuable development time by only updating what's changed.
    Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your

own words.

=> Dev build
Local server
HMR
Caching
Tree Shaking
File Watching Algorithm

## What is `.gitignore`? What should we add and not add into it?

=> What is ignored to be uploaded in github/ Which does'nt need to be added in .git, we add them in a file .gitignore.
What can be regenerated by package.json, we should not add them on .git. Like node_modules, dist, .parcel-cache, we should not add them on .git. Because they can be regenerated by using commands.

## What is the difference between `package.json` and `package-lock.json`?

=> When there's minor updates also, package.json automatically updates the version for the respective packages. But in package.lock.json keep the records fixed versions of the respective packages.

## Why should I not modify `package-lock.json`?

=> Because they keep the fixed versions for our packages. If we chnage then there might be some issues.

## What is `node_modules` ? Is it a good idea to push that on git?

=> Its where the all packages stores. Suppose I installed parcel, and parcel will be in the node_modules, and also the dependencies that supports the parcel, they also will be on the node_modules.
It should not be added to .git, because this can be regenerated by command "npm init".

## What is the `dist` folder?

=> In the dist folter, parcel bundles all the files (HTML, CSS, JS) for the dev and production build.

## What is `browserlists`?

=> Its a module, which we can configure to make support our app for older versions of the browsers. Like we can modify it and decide in which browser, our app should show, and in which not.