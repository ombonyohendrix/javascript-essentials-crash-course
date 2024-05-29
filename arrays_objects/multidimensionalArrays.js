/* Arrays can contain other arrays.
Arrays of array. */

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let array3 = [9, 10, 11, 12];

let arrayOfArrays = [array1, array2, array3];

console.log(arrayOfArrays);

// two dimensional array
// array of existing array.

let programmingLanguages = [
	["Java", "Python"],
	["Javascript", "C++"],
	["Go", "Golang"],
];
// if you want to acces a specific array and one or any of its element.
//always remember the 0 based index rule.
let value1 = programmingLanguages[0][1];
console.log(value1);

//three dimensional array.

let namesOfMyCounties = [
	[
		["Nairobi", "Nakuru"],
		["Mombasa", "Eldoret"],
	],
	[
		["Machakos", "Kitui"],
		["Kajiado", "Narok"],
	],
	[
		["Embu", "Bungoma"],
		["Kitale", "Kisumu"],
	],
];
// you have to be careful when it comes to three dimensional arrays while accessing the indecies. It might be alitle bit tricky.

let getName = namesOfMyCounties[2][0][1];
console.log(getName);
