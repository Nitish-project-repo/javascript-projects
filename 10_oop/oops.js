// Object literal

// const user = {}           // this is an literal object we refer to 

const user = {
    username: 'Nitish',
    loggedIn: true,
    noOfLogin: 12,
    userDetails: function () {
        console.log(`Welcome, ${this.username}`);
        //this specifies which username you are refering to , here it is w.r.t this context or user1
    }
}

// console.log(user);

//abstraction is hiding of the working to give output for certain inputs
// for eg:-

// console.log(user.userDetails()); // Welcome, Nitish;

// Welcome msg was print without need to tell how its done.

//function Contructor

function User(username, loggedInCount, loggedIn) {
    this.username = username;
    this.loggedInCount = loggedInCount;
    this.loggedIn = loggedIn;

    this.greeting = function() {
        console.log(`Welcome, ${this.username}`);
    }

    // its implicitly returned
    return this
}


// using above constructor create new users

// const user1 =  User("Mahesh", 12, true);

// console.log(user1.greeting());

// const user2 =  User("Sonia", 10, false);

// console.log(user1.greeting());

// here, the value of user1 is overridden by the user2 value
// so , we create new instances(objects) using new keyword to prevent it.


// new : is a function constructor
//       it takes arguments from User() and stores it in its this keyword 


// with each call of new a new instance is created.



const user1 = new User("Mahesh", 12, true);
const user2 = new User("Sonia", 10, false);


console.log(user1.greeting());
console.log(user2.greeting());
