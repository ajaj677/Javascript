/*
//explicitely number only, dedicately number chayeh 
const balance = new Number(100)
console.log(balance);   //output => number 100

//converts number => string then you can use string functions
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // output => 100.00

const otherNumber = 123.444
console.log(otherNumber.toPrecision(3)); //gives precise value, priority before decimal from starting left to right

// adds commas to number like 10,00,000
const hunderds = 1000000
console.log(hunderds.toLocaleString("en-IN"));
*/

//___________________ Maths _________________//

/*
console.log(Math);  //object math

console.log(Math.abs(-4)); //absolute value convert minus value to plus
console.log(Math.round(4.3)); //4
console.log(Math.ceil(4.2)); //if greater than 4 i.e 4.something that it gives next number
console.log(Math.floor(4.2)); //takes lowest value => 4
console.log(Math.min(3,4,2,4,1)); //gives minumum value

*/

//____________randoom________//

console.log(Math.random()); //values btwn 0 and 1
console.log((Math.random()*10) + 1); //shift to left +1 to avoid 0

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min);






/*
abs()
ƒ ceil()
ƒ cos()
ƒ exp()
ƒ expm1()
ƒ f16round()
ƒ floor()
ƒ log1p()
ƒ log2()
ƒ log10()
ƒ max()
ƒ min()
ƒ pow()
ƒ random()
ƒ round()
ƒ sign()
ƒ sin()
ƒ sinh()
ƒ sqrt()
ƒ tan()
ƒ tanh()
ƒ trunc()
*/








