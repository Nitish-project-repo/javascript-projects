/* 
    this keyword
*/
// this keyword in node
// console.log(this) // {} -> empty object

// declaring an object and printing the value of this
const user = {
    username: "Nitish",
    welcomeMsg : function() {
        console.log(`${this.username}, welcome to the website`); 
        console.log(this);
    }
}

// user.welcomeMsg(); // this -> { username: 'Nitish', welcomeMsg: [Function: welcomeMsg] } ; Nitish, welcome to the website

//changing the context (variable and its values) 
user.username = "NiKu";

// printing the value of this keyword
// user.welcomeMsg(); // NiKu, welcome to the website ;  this value -> { username: 'NiKu', welcomeMsg: [Function: welcomeMsg] }

/*
    {}
    Nitish, welcome to the website
    { username: 'Nitish', welcomeMsg: [Function: welcomeMsg] }
    NiKu, welcome to the website
    { username: 'NiKu', welcomeMsg: [Function: welcomeMsg] }
*/




/*
    Arrow function
*/

// function add(num1 , num2){
//     return num1 + num2;
// }

// console.log( add(3,4)); // 7

// const add = function(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(4,5)); // 9


// const add = (num1,num2) => num1 + num2;

// console.log(add(7,8)); // 15

const object_print = () => ({username: "Nitish"});

console.log(object_print()); // { username: 'Nitish' }
