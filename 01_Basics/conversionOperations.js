let score = "33" // any value under double quotes => string

console.log(typeof score);

let valueInNumebr = Number(score) // conversion
console.log(typeof valueInNumebr); // number

// "33" => 33
// if score = "33abc" => NaN (not a numeber) but type number j
// undefined => NaN
// True => 1 nd 0 for false

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // => true 

// 1 => true; 0 => false
// "" => false
// "ajaj" => true

let someNumber = 33
let stringNumber = String(someNumber)

console.log(typeof stringNumber);

/************************ Operations ************************************************** */
let value = 3
let negValue = -value
console.log(negValue)