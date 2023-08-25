/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call
const sumALL = (a, b, c) => a + b + c ;
let sum = sumALL(1,2,3);
console.log("sum:", sum);

// Extra arguments are ignored
let sum2 = sumALL(1, 2, 3, 4 , 5, 6);
console.log("sum2:", sum2);

// Function using ...rest
const sumRest = (a, b, c, ...rest) =>{
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}
let sum3 = sumRest(1, 2, 3,4,5 ,6);
console.log("sum3:", sum3);