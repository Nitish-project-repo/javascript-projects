const userName = "Xeko";  // string declaration
//another way of string declaration
const userLastName = new String("XaXa");

const repoCount = 50;

// using concatination display the both

// console.log("Full Name : " + userName + " " + userLastName);
// console.log("String has "+ repoCount + " repo count in JS.");

// String interpolation : readability
console.log(`String has ${repoCount} repo count in JS.`);

/* 
    > String Methods : 
        > length
        > toUpperCase()
        > toLowerCase()

        > charAt()
        > at()

        > split()
        > toString()
        > concat()

        ++++++++++++  creating substring
        > slice()
        > substr()
        > substring()

        > trim()

        > replace()
        > replaceAll() 

        > includes()

        > startsWith()
        > endswith()

        +++++++++++++  finds char/string
        > indexOf()
        > lastIndexOf()
        > find()
*/

let site_url = "https://ideal-doodle-q79rx6r7ggggh4w55.github.dev/";

// console.log(`Length of the site url : ${site_url}`);
// console.log(`Site url in upper case : ${site_url.toUpperCase()}`);
// console.log(`Site name : ${site_url.split(".")[1]}`);
console.log(site_url.substr(site_url.split(".")[0].indexOf("i"),5));

console.log(site_url.find)