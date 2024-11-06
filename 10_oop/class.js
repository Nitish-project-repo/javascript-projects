// creating a class user which takes instance variables : username, email and password
// create methods to ecrypt the password , and welcome the user

class User {
    constructor(username,email,password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        console.log(`Password is encrypted to : ${this.password + "abc"}`);
    }

    greet() {
        console.log(`Welcome , ${this.username} welcome.`)
    }
};

 
const user1 = new User("Amit", "amit@smt.com", "password");

// user1.greet();
// user1.encryptPassword();


// creating a Teacher class which inherits the User class

class Teacher extends User {
    constructor(username,email,password,subject) {
        super(username,email,password);
        this.subject = subject;
    }

    subjectTaught() {
        console.log(`Teacher ${this.username} , teaches ${this.subject}.`)
    }
}


const mathTeacher = new Teacher("Aman", "aman.maths@pwskills.com", "123letmeSee", "Mathematics");

// mathTeacher.greet()

// mathTeacher.subjectTaught()

// console.log(mathTeacher)



/**
 *  I need to create an id to identify the Staff but I don't want to teacher to create its id, but js to
 *  
 *  JavaScript provides a keyword called 'static' to prevent access of the Staff .
 * 
 */

class Staff extends User {
    constructor(username,email,password){
        super(username,email,password);
    }

    static createId(){
        return "123";
    }
}

const staff = new Staff("Sobit","s@mity.com","2chai");

// console.log(staff.createId());


/* 
    > When i used 'static' keyword to the createId() , Error: TypeError: staff.createId is not a function
    > Its not letting me to access the createId().
*/

console.log(staff);