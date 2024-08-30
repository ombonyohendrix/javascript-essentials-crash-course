/* How are recursive functions going to help us calculate the factorial? We are going to 
call the function with a lower number until we reach 0. In this exercise, we will use 
recursion to calculate the factorial result of a numeric value set as the argument of a 
function.
1. Create a function that contains a condition within it checking if the argument 
value is 0.
2. If the parameter is equal to 0, it should return the value of 1. Otherwise, it 
should return the value of the argument multiplied by the value returned 
from the function itself, subtracting one from the value of the argument 
that is provided. This will result in running the block of code until the value 
reaches 0.
3. Invoke the function, providing an argument of whatever number you want 
to find the factorial of. The code should run whatever number is passed 
initially into the function, decreasing all the way to 0 and outputting the 
results of the calculation to the console. It could also contain a console.log()
call to print the current value of the argument in the function as it gets 
invoked.
4. Change and update the number to see how it affects the results. */

function getFactorialOfNumber(number) {
	console.log(number);
	if (number === 0) return 1;
	return number * getFactorialOfNumber(--number);
}
console.log(getFactorialOfNumber(5));
/* Bonus exercises. */

// looping through an array using recursion.

function getArrayElements(index, arr) {
	if (index === arr.length) return;
	console.log(arr[index]);

	getArrayElements(index + 1, arr);
}
getArrayElements(0, [1, 2, 3, 4, 5, 6, 7, 8]);

// get names

function getNamesofArr(index, arr) {
	if (index === arr.length) return;
	console.log(arr[index]);
	getNamesofArr(index + 1, arr);
}
getNamesofArr(0, ["Hendrix", "Ombonyo", "Ogutu", "Beryl"]);

// calculating power using recursion.

function getPower(number, exponent) {
	if (exponent === 1) return number;
	return number * getPower(number, --exponent);
}
console.log(getPower(4, 5));

// Fibonacci sequence using recursion.

// lets sum the elements of arry using while loop then try using recursion.
const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// number is our counter variable in this case.
let number = 0;
let sum = 0;

while (number < myArr.length) {
	sum += myArr[number];
	number++;
}
console.log(sum);

// now lets try using recursion.
const sum1 = (index, array) => {
	//base case.
	//if (index === array.length) return array[array.length];
	//return array[index] + sum1(array, index++);
};
//const results = sum1(0, myArr);
//console.log(results);
