/**
 *  When a function is called it gets attached to object its called within, to provide the function to use some different 
 *  object , we can use 
 *   > call(this, args) : this/object_name is the context to the object , args is the argument the function requires.
 *  Then , we can use the properties of the passed object as the utility property.
 */

// function to be called
function SetUsername(username) {
    this.username = username;
}

// functional object
function User(username, email, password) {
    // SetUsername(username);

    // calling SetUsername to use username argument ; call(object,arg) is used to refer to that object passed
    SetUsername.call(this,username);

    this.email = email;
    this.password = password;
}

const user1 = new User("Nitish", "nit@google.com", "***********");

console.log(user1) // User { email: 'nit@google.com', password: '***********' }

// We can see that the username value is not visible in the output




// Now , using call() to call arbitary object to SetUserName()