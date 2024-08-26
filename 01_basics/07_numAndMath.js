let score = 400;

// console.log(score); // 400
// console.log(typeof score); // number

let highestScore = new Number(1000);

// console.log(highestScore); // [Number: 1000]
// console.log(typeof highestScore); // object
// console.log(highestScore.__proto__); // {} : to know all the functions which Number object provides ; try writing it in the web console


let totalMarks = 550;

let totalStudents = 33;

let avgMarks = new Number(totalMarks/totalStudents);

// console.log(avgMarks);                // [Number: 16.6666666666668]
// console.log(avgMarks.toFixed(2), typeof avgMarks.toFixed(2));   //string  // 16.67 : fixing the decimal place to 2 decimal places; also returns string value
// console.log(avgMarks.toPrecision(5), typeof avgMarks.toPrecision(5)); // string // 16.667 : returns string value to 5 significant digits


// ++++++++++++++++++++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++++++++++++++=

let max = 6;
let min = 1;
let diceValue = Math.random() * (max - min + 1);
console.log( Math.floor(diceValue) + min);