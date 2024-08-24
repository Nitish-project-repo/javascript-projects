/* conversion of values to number data-type using Number() */



// conversion of string to number

let finalScore = "356"; // type string

// console.log(typeof finalScore); // string
// console.log(typeof Number(finalScore)); // Number type
// console.log(Number(finalScore)); // 356

//      if finalScore is 356abc 

finalScore = "356abc"; // string type

// console.log(typeof finalScore);
// console.log(typeof Number(finalScore)); // output is Number , how?
// console.log(Number(finalScore)); // value is { NaN : Not a Number } , which is also considered a number.



// boolean to number

let isGraduate = true;

// console.log(typeof isGraduate);         // boolean
// console.log(Number(isGraduate));        // 1
// console.log(typeof Number(isGraduate)); // number

//      if isGraduate = false

isGraduate = false;

// console.log(typeof isGraduate);         // boolean
// console.log(Number(isGraduate));        // 0
// console.log(typeof Number(isGraduate)); // number


// null and undefined to Number

let tempInJammu = null;
let tempInCelsius;

// console.log(Number(tempInJammu));   // 0
// console.log(Number(tempInCelsius)); // NaN
// console.log(tempInCelsius);         // undefined


/**
 * Notes : > "356" => 356
 *         > "356abc" => NaN (Not a Number)
 *         > null => 0
 *         > undefined => NaN (Not a Number)
 */







/* 
    To convert values to string use : String()
*/

let endTotal = 3456;

// console.log(String(endTotal), endTotal); // 3456 3456
// console.log(typeof(String(endTotal)), typeof(endTotal)); // string number

// null and undefined values to string

// console.table([typeof String(tempInCelsius), String(tempInCelsius), tempInCelsius]); // 'string'   'undefined'   undefined
// console.table([typeof String(tempInJammu), String(tempInJammu), tempInJammu]);       // 'string'   'null'        null
// console.log(String(330) , typeof String(330));                                       //  330        string


/**
 *  Notes : > 3456 => "3456"
 *          > null => "null"
 *          > undefined => "undefined"
 *          
 */



/*
    to convert to Boolean use Boolean(); not to be used frequently
*/

console.table([typeof finalScore, Boolean(finalScore), typeof Boolean(finalScore)]);        // 'string'    true    'boolean'
console.table([ tempInCelsius, Boolean(tempInCelsius), tempInJammu, Boolean(tempInJammu)]); // undefined   false    null      false


/**
 *  Notes :  > "",null,undefined => false
 *           > "true" , 1  => true
 */