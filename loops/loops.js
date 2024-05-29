/* loops are very important when it comes to iteration.
Doing it manually it can be tideous and tiresome.
types of loops in javascript:
       1. for loop.
       2. Do while loop.
       3. While loop.
       4. for of loop.
       5. for in loop.
        */

// while loop.
// as long as the expression is true (expression) the piece of code will be executed again and again. when the expression turns to false the execution we stop immediately.

let k = 0;
while (k <= 10) {
	//console.log("Number : ", k);
	k++;
}

let myArrOfNames = ["Hendrix", "Ombonyo", "Mamboleo", "Wiki"];

let foundName = true;
let message;

while (foundName && myArrOfNames.length > 0) {
	if (myArrOfNames[0] === "Wiki") {
		message = "Oh yeah!, found him";
		foundName = false;
	} else {
		myArrOfNames.shift();
	}
}
//console.log(message);
//console.log(myArrOfNames.length);
//console.log(myArrOfNames);

// do while loop
/* before it starts looping through the condition in the while, it will firt execute the code in the do portion. if its false it will stop immediately and if its true then it will contiue with the expression in the while portion */
let prompt = require("prompt-sync")();
let myNumber;
do {
	myNumber = prompt("Please Enter a Number Between 0 - 100" + " ");
} while (!(myNumber >= 0 && myNumber <= 100));
//console.log(myNumber);
// for loop.
// special loops.
// they are useful in many scenarios.
// for(initialization;condition/expression;incremental){code}

for (i = 0; i <= 9; i++) {
	console.log("Number : ", i);
}
// lets add some values to an empty array.
let myArrOfNumbers = [];
for (i = 1; i <= 100; i++) {
	myArrOfNumbers.push(i);
}
console.log(myArrOfNumbers);
console.log(myArrOfNumbers.length);
//nested loops.=> these are loops inside another loop.
let arrOfArrays = [];
for (i = 0; i < 3; i++) {
	arrOfArrays.push([]);
	for (j = 0; j <= 5; j++) {
		arrOfArrays[i].push(j);
	}
}
console.table(arrOfArrays);
//loops and arrays.
// loops make lifes with arrray more comfortable.

let techCompaniesToWorkFor = [
	"Google",
	"Facebook",
	"Twitter",
	"Amazon",
	"Apple",
];
for (let i = 0; i < techCompaniesToWorkFor.length; i++) {
	console.log("I'd love to work with : ", techCompaniesToWorkFor[i]);
}
// lets say hello to different people.

let listOfNames = ["Hendrix", "Ombonyo", "Mamboleo", "Wiki"];
for (i = 0; i < listOfNames.length; i++) {
	listOfNames[i] = "Hello" + " " + listOfNames[i];
}
console.log(listOfNames);
// lets delete some values in our array using loops.

let listOfCounties = [
	"Nairobi",
	"Mombasa",
	"Kericho",
	"Kajiado",
	"Vihiga",
	"Narok",
	"Bungoma",
];
for (let i = 0; i < listOfCounties.length; i++) {
	if (listOfCounties[i].startsWith("K")) {
		delete listOfCounties[i];
		continue;
	}
	listOfCounties[i] = "Name of the county :" + "" + listOfCounties[i];
}
console.log(listOfCounties);

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++) {
	if (names[i].startsWith("M")) {
		delete names[i];
		continue;
	}
	names[i] = "hello " + " " + names[i];
}
console.log(names);

// for of loop.
/* it cannot be used to change the value associated with the index.
let arr = []
for(variableName of arr){
	code to be executed.
	value of variableName gets updated every iteration.
	all values of the arry will be variableName once.
}*/
let myFavouriteFruits = ["Mango", "Banana", "Orange", "Apple"];
for (let fruits of myFavouriteFruits) {
	console.log(fruits);
}
