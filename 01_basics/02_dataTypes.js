"use strict"; // this statement treats all js code as newer version

// write each statement in different line is a good standard to write js code


// new line and semicolon (;) is used to define the end of a js statement


/* Keeping in mind code - readability is important in creating bigger projects 
    (helps in debuggingand and understanding of code)
*/


/* 
    Data-Types :
        > number => 0 to 2^53 (positive and negative integers and decimal values)
        > string => "any thing defined within single & double quotes"
        > boolean => values : true(everything which isn't false can be termed in js as true ) or false (0,null,undefined,false ,"")
        > undefined => value for a variable is not defined 
        > null => when empty value is stored in the variable ,then null is used
        > Symbol => used for uniqueness.
        > objects => a reference type data-type; stores value in {key: value} pair ; 
            key : string values|| symbols and values : any data type (number, string , boolean , functions,objects)

        > typeof(variabel/value) => a function to find the type of the value.
*/



let temperatureInJamshedpur = null;

console.log(typeof temperatureInJamshedpur); // object

let temperatureInJaipur = "39 degC";

console.log(typeof temperatureInJaipur); // string
