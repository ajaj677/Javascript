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

const anotherStrings = gameName.slice(-3,2)
console.log(anotherStrings);

console.log("**************");

const newStringOne = "      ajaj "
console.log(newStringOne.trim()); // trim start and trim end, are also there works on whitespace

//replace the things
const url = "https://ajaj.com/ajaj%20mdn"
console.log(url.replace("%20", "-"));


//find if the words include in that string 
console.log(url.includes("ajaj"));

//converts a string into array based on given values like spaces, commas, etc
// seperator, limit
console.log(gameName.split("j"));

//refer string javascript mdn for more string knowledge.












