/**
 *  Function instances calls apply(object, [Array of values]) with array of values
 */

const values = [1,2,3,4,5];

// console.log(Math.max.apply(null,values))


function SetValues(...args){
    this.args = args;
}


function User(username,userId,...args){
    this.username = username;
    this.userId = userId;

    SetValues.call(this, args);
}


const Teacher = new User("Nikesh","nikteaches","nik@email.com",35);

console.log(Teacher);