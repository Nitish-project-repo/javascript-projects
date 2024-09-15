// loops are also called iterations

// for loop

// for ( initialisation of i = 1 ; condition : i<=10 ; changing: i ++ or i= i+1)
for (let i = 1; i <= 10; i++) {
    console.log(`Loop of ${i}`);
    for (let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
