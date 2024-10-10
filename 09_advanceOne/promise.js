/* 
    Promise is an object representation of an eventual completion or rejection of an asynchronous task.

*/

// creation of Promise object

/*const firstPromise = new Promise(function(resolve,reject){
    let error = true;
    if(!error){
        resolve("Data consumed");  // sending argument to then(arg) to perform function
    } else {
        reject("An error occured");// sending arg to catch(arg) to perform function
    }
});
*/

// variable containing the promise, performs then property if resolve is called else catch property
/* firstPromise.then(function(str){
    console.log(str);
}).catch(function(error){
    console.log(error);
})
    */

// finally runs after resolve or reject is executed
/*
new Promise(function(resolve , reject){
    let error = true;
    if(!error){
        resolve();
    } else {
        reject();
    }
}).then(function(){
    console.log("Second Promise consumed");
}).catch(function(){
    console.log("Error ocurred in second promise");
}).finally(function(){
    console.log("Promise or Error occured.")
})
*/


// using async function
/*
async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}

getAllUsers();
*/

// using fetch to call the api and doing resolve and catch for then

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => { return response.json(); })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));