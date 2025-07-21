//array is a object, colleaction of various data types,
//array are resizable, can't access arbitary
//arrays in js, make shallow copy(share same reference), if u try to copy array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["aka", "pokemon", "heros", "villian"]
const myArr2 = new Array(1,2,3,4)

console.log(myArr2[1]);

//________ Methods in array_________//

myArr.push(6) //adds value in the array
console.log(myArr);
myArr.pop() //removes last value

myArr.unshift(90) //adds value in start of the array
myArr.shift() //removes the 1st element
console.log(myArr);

console.log(myArr.includes(3)); //boolean value
console.log(myArr.indexOf(3));

const newArr = myArr.join() ///join binds and convert into string
console.log(typeof newArr);

// slice, splice
console.log('a', myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

const myn2 = myArr.splice(1, 3) //splice manuplates array which u havw included 1, 3

console.log('a', myArr);
console.log(myn2);





