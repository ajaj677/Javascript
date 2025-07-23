// Primitive data types
// 7 Types: String, Null, Number, Boolean, Undefined, Symbol, BigInt

const accountNumber = 55

const id = Symbol('234')
const accId = Symbol('234')
console.log(id==accId); // false

// Reference (non primitive)
// Arrays, Objects, functions

const heros = ["pokemon", "niggas"]


let myObj = {
    name: "ajaj",
    age: 20,
}

const myFuction = function(){       //treted as variable
    console.log("HELLO WORLD");
}

// console.log(typeof myFuction);

/*################################################################################

memory in js:
stack (primitive), Heap (non- Primitive) reference
*/

let myYoutubeName = "Ajaj"

let anotherName = myYoutubeName
anotherName = "armaan"

console.log(anotherName);

let userOne = {
    email: "xyz@google.com",
    age: 45
}

let userTwo = userOne
userTwo.email = "xyz@outlook.com"

console.log(userOne.email);
console.log(userTwo.email);


