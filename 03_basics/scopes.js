/* 
    There are overall 2 types of scopes:
    > Global Scope: which is available thoroughout the program

    > Block Scope: Its defined within the {} (for functions, if...else,loops,etc.) (not for object declaration)
*/

/* 
    let,var,const 

    let & const have scopes system.
    var does not have a scope system, it can be declared within the function and be printed outside.
*/

// this is global scope

if (true) {
    let num1 = 5;
    const age = 26;
    var hour = 4;

    // this is block scope
}

// console.log(num1); // num1 not defined
// console.log(age); // age not defined
console.log(hour);   // 4 gets outputed even if hour variable is declared in the if...else block


// In larger code this may cause error, so the need of scoping helps with less error and debugging. So, the introduction of 
// let , const was done.