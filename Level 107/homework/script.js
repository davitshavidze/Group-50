

function getNumbers(first, second, ...rest) {
    console.log("first number:", first);
    console.log("second number:", second);
    console.log("Else numbers:", rest);
}

getNumbers(1, 2, 3, 4, 5, 6, 7);


const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; 

console.log(newNumbers); 


const person = { name: "Salome", age: 25, height: 170 };

const { name, ...rest } = person;

console.log("Name:", name); 
console.log("Else:", rest); 


const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const mergedObject = { ...obj1, ...obj2, ...obj3 };

console.log(mergedObject); 


function printNames(...names) {
    console.log("Names:", names.join(", "));
}

const nameList = ["Gabrieli", "Giorgi", "Stalin", "David"];

printNames(...nameList);