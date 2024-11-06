/**
 *  Knowing the property of an object : getOwnPropertyDescriptor(object,property)
 *  
 *  To change the property value(boolean) of an object property : Object.defineProperty(object,propertyName,{writable: true/false,enumaerable: true/false,})
 */

// finding the description of the property Math.PI and if it can be changeable

// console.log(Math.PI); //3.141592653589793


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor); 

/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

    > Here, we can see that writable property is false 
*/

// Trying to change the writable to true

Object.defineProperty(Math,"PI",{
    writable: true,
})

console.log(descriptor)

/* 
    An error occurs :
    TypeError: Cannot redefine property: PI

    so, we can conclude JS doesn't want to change the value of PI in Math module
*/