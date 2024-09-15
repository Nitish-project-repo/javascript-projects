/* 
Another form of loops
    High Order Loops:
        > for...in
        > for...of
        > for...each
*/

const numArray = [1,2,4,5,6,7];

const bill = {
    netDemand: 1720,
    unitsCharged : 225,
    lastDayPayment: "20/09/2024"
}

const map = new Map();

map.set("1", "batman");
map.set("2", "superman");
map.set("3", "iceman");


/* for...of */

for(const num of numArray){
    // console.log(num); // 1 2 4 5 6 7 ; values in the array
}

// objects are not iterable using for...of
// for(const num of bill){
//     // console.log(num);
// }


// for(const num of map){
//     console.log(num); // ['1', 'batman'] ['2','superman'] ['3', 'iceman']; got ['keys','values']
// }

for(const [keys,values] of map){
    // console.log(`${keys} :-> ${values}`); //got ['keys','values']
}









/* for...in */

for(const num in numArray){
    // console.log(num); // 0,1,2,3,4,5 ; pos in the array
    console.log(numArray[num]);
}


for(const key in bill){
    // console.log(key); // netDemand,unitsCharged,lastDayPayment ; keys in the bill(object)
    console.log(bill[key]);
}

for(const key in map){
    console.log(key); // no response
}