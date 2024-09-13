/* 
    > Immediately Invoked function
        > Those which are invoked or called as soon as an application is run.
        > It is used when a function is needs to be run as the app runs without being polluted(affected) by the global scope.
        > Following is how we define IIFE: 
*/

(function serverConnection() {
    console.log("Connection successful");
})();

// These function are usually written in a separate file. 

// (function_code)() ;