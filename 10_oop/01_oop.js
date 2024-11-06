/**
 *  OOP : object Oriented Programing 
 * 
 *      > Its a collection of properties and methods
 *      > JavaScript is inherently a prototype-based language and classed are syntactical sugar for coders from oop based language.
 *  
 *      > Parts of OOP :
 *          > Object literal : literally an object
 *          > constructor function 
 *          > prototype 
 *          > classes
 *          > Instances : this , new 
 * 
 *      > 4 Pillars of OOP :
 *          > Abstraction
 *          > Encapsulation
 *          > Inheritance
 *          > Polymorphism
 * 
 * 
 * 
 *      > Search instanceOf 
 */


// object literal

const user = {
    username : "Nitish Kumar",
    userid : "AX123",
    loggedIn: true,

    printUsername: function() {
        console.log(`Hello , ${this.username}`);
    }
};


// creating User constructor

function User (username, userId , loggedIn) {
    this.username = username;
    this.userId = userId;
    this.loggedIn = loggedIn;

    // return this
}

// creating instance of Userone

/**
 * Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 * 
 *  What's happening here :
 *      > User instance takes the arguments
 *      > It then stores it inside the this object.
 *      > Then, implicitly returns the 'this' keyword
 *      > 'this' is then referenced to the const variable userOne
 * 
 *      > If this is not returned , then newInstance(new keyword, which acts as a plain object pointing to the User constructor)
 *          is referenced
 */

const userOne = new User("Rohit", "FG456", false);

const userTwo = new User("Sohit", "FG498", false);


console.log(userOne.username)

console.log(userTwo.username)




