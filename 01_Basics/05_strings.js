const name = "Ajaj"
const repoCount = 10

// console.log(name + repoCount + "sad");

// string interpolation
console.log(`hello my name is ${name} and my repo count is${repoCount}`);
 
// declaration of string
const gameName = new String("ajaj") //gives length
console.log(gameName[0]);
console.log(gameName.length); //gives name
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(3)); //character at that index
console.log(gameName.indexOf("j")); //tells us the index of that character

const newString = gameName.substring(0, 2)
console.log(newString);

const anotherString = gameName.slice(-3,2)
console.log(anotherString);







