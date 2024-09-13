/* 
    > Immediately Invoked function
        > Those which are invoked or called as soon as an application is run.
        > It is used when a function is needs to be run as the app runs without being polluted(affected) by the global scope.
        > Following is how we define IIFE: 
*/
// following is a named iife
(function serverConnection() {
    console.log("Connection successful");
})();

// These function are usually written in a separate file. 

// (function_code)(); using (;) to distinguish b/w 2 or more iife if written together.

// simple iife is usually unnamed function or arrow function

(() => {
    console.log(`DB is connected`)
})();

// if argument is to be passed in the simple iife

((name) => {
    console.log(`Hi ${name}, DB is connected.`)
})("Nitish");
