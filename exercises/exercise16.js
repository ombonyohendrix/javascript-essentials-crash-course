/* Use IIFE to create a few immediately invoked functions and observe how the scope is 
affected.
1. Create a variable value with let and assign a string value of 1000 to it.
2. Create an IIFE function and within this function scope assign a new value to 
a variable of the same name. Within the function, print the local value to the 
console.
3. Create an IIFE expression, assigning it to a new result variable, and assign 
a new value to a variable of the same name within this scope. Return this 
local value to the result variable and invoke the function. Print the result
variable, along with the variable name you've been using: what value does it 
contain now? */
let myValue = "1000";
(() => {
	let myValue = "2000";
	console.log(myValue);
})();

let result = (() => {
	let val = "Hendrix";
	return val;
})();
console.log(result);
console.log(val);

(function (val) {
	console.log(`My name is ${val}`);
})("Ombonyo");
