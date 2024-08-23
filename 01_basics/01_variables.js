/**
 *  Javascript has let , const  and var to declare variables in the code .
 *  let -> for changeable-value storing variables
 *  const -> for unchangeable-value storing variables ; once declared will not change in later part of the program
 *  var -> older way of declaring changeable-value storing variables.
 */


let accountHolderEmail = "Dim@hi.com";
const accountPassword = "Stella@123";
var accoutNumber = 12345;
accountHolderCity = "Jamshedpur";
let isAccountActive = true;

// console.table([accoutNumber,accountHolderEmail,accountPassword,accountHolderCity,isAccountActive]);


// Now changing value for each variables decalred

accountHolderEmail = "Tim@hi.com";
//accountPassword = "Stupa@123";     // TypeError: Assignment to constant variable. Thus, changing a const variable will give this error
accountNumber = 5678;
accountHolderCity = "Noida";
isAccountActive = false;

console.table([accoutNumber,accountHolderEmail,accountPassword,accountHolderCity,isAccountActive]);


/**
 *  Prefer not to use var to declare variables , due to its scoping 
 *  and functional scoping problem.
 */