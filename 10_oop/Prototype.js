// given a string with whitespaces , inject a new property which gives true length 

function User(username) {
    this.username = username;
    this.trueLength = function(){
        return this.username.trim().length;
    }
}

const username = "Nitish            ";

const userOne = new User(username);

// console.log(userOne.username.length) // 18

// console.log(userOne.trueLength()) // 6

// non-primitive --> Object (through prototype) --> null

// adding property to array 

const heroes = {
    heroName : "Nitish",
    greetingNitish : function() {
        console.log(`Good afternoon , ${this.heroName}`);
    }
}

// console.log(heroes.greetingNitish())

// console.log(Object.prototype.greetingNitish())


Object.prototype.nitish = () => {
    console.log(`Nitish is everywhere.`);
}

console.log(heroes.nitish())