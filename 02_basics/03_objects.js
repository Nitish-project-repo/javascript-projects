/* 
    > There are 2 ways to decalre an object
        > Object literal : {} -> it has multiple instances
        > Constructor : Object.create -> it has 1 instance ; one of its type

    > Object is also a collection of values represented in a {key:value} pairs separated with a comma(,).
    > Object elements are accessed using dot-notation(.) and square-brackets([]) ,
    > Keys are interpreted as string values.
*/

const car = {};

// console.log(car);

car.name = "Tata Ertiga";
car.company = "Tata Motors";

// console.log(car);

car["car purchase"] = "June 2025";

// console.log(car);

/* To prevent any further change in the object use Object.freeze(object_name) */

// Object.freeze(car);

car.name = "Alto 800";

// console.log(car);

/* accessing elements within the object */

car["bidding price"] = function() {
    console.log(`Bidding price of ${this.name} of ${this.company} company is Rs. 2 lakhs.`);
}

// console.log(car);
// console.log(car["bidding price"]());

/*  using a symbol as a key */

let mySym = Symbol("key1");

car[mySym] = "Hi";

console.log(car);