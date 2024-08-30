/* Remove duplicates from the array using filter() and indexOf(). The starting array 
is:
["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", 
"Laurence", "Mike", "Laurence", "Mike"] */

const arr1 = [
	"Laurence",
	"Mike",
	"Larry",
	"Kim",
	"Joanne",
	"Laurence",
	"Mike",
	"Laurence",
	"Mike",
	"Laurence",
	"Mike",
];
const array2 = arr1.filter((value, index, array) => {
	console.log(value, index, array.indexOf(value));
	return array.indexOf(value) === index;
});
console.log(array2);

/* Using the array map() method, update an array's contents. Take the following steps:
1. Create an array of numbers.
2. Using the array map method and an anonymous function, return an updated 
array, multiplying all the numbers in the array by 2. Output the result into 
the console.
3. As an alternative method, use the arrow function format to multiply each 
element of the array by 2 with the array map() method in one line of code.
4. Log the result onto the console */

const myArray = [2, 4, 6, 8];
const myArray1 = myArray.map(function (elem) {
	return elem * 2;
});
console.log(myArray1);
// alteernative method.
const myArray3 = myArray.map((val) => {
	return val * 4;
});
console.log(myArray3);
