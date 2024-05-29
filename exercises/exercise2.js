/* 1. Create an array containing three values: 1, 2, and 3.
2. Nest the original array into a new array three times.
3. Output the value 2 from one of the arrays into the console. */

let numbers = [1, 2, 3];
let newArray = [
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
];

let value = newArray[0][1];
console.log(value);
