/* They make our work easier as developer/programmers.
They require you to think differently inorder to come up with nice and clean code, easy to read and reuse.
 Functions are groups of statements, variables,loops and so on that are bundled together to for one entity.
 when you call it whatever is inside the function will get executed
 function has several parts:
     function name.
     parameters.
     body
     then calling the function so that it can get executed.
     
     functionName(parameters){
        body=> where our code will go and later be executed.
     }
     then function call
     functionName(our arguments)*/

// lets see a function in action.
//great user.

let prompt = require("prompt-sync")();

// remember when writting a function you must start with function keyword in javascript.

function sayHiToUser() {
	let userName = prompt("Please Enter Your Name :  ");
	userName = String(userName);
	console.log("Hi!," + "", userName);
}
//invoking or calling the function.
sayHiToUser();

// functions can also be declared on variable. a common convension used on anonymous fuctions.

let sumofTwoNumbers = function () {
	let firstNumber = 80;
	let secondNumber = 20;
	let sum = firstNumber + secondNumber;
	return sum;
};
//calling the function
console.log(sumofTwoNumbers());
/* Naming a function.
       use camelCase for your functions.=> first letter to start with a small letter second part of the name first letter to start with a capital letter.
       make sure that the name is describing what the function is doing.
       use a verb to describe what the function is doing. */

// special functions and operators.
