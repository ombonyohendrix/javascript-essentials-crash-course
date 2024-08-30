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
/* special functions-
    arrow functions.
    spread functions.
    rest functions. */
// arrow functions()
/* arrow functions come in handy when passing a function into another function as a parameter.
An arrow function is denoted with =>.
Arrow functions can be written in different ways.
    1. with parameters.
       (param1, param2)=> body of the function.
    2.with no parameters
      () => body of the function.
    3. with one parameter.
      param => body of the function.*/
// lets write a regula function then convert it to an arrow function.

function productOfTwoNumbers1() {
	let num1 = 20;
	let num2 = 30;
	let result;
	result = num1 * num2;
	return result;
}
console.log(productOfTwoNumbers1());
// now lets convert our function to an arrow function.
// first we must store our funtion into a variable.
let productOfTwoNumbers2 = (num1, num2) => {
	let result = num1 * num2;
	return result;
};
// we use the name of the variable to execute the function.
console.log(productOfTwoNumbers2(2, 4));
let addTwoNumbers = (firstNumber, secondNumber) =>
	console.log(firstNumber + secondNumber);
addTwoNumbers(20, 30);
// lets write one with only one argument.
// arrow functions with only one using curly braces and parenthesis is optional.
//the code will still work if you ommit them.
let sayMyName = (name) => console.log("My name is : ", name);
sayMyName("Hendrix");

// lets write one with no params.
// if you do have params curly brace is a must otherwise it will throw an error.

let sayHi = () => console.log("Hi , Hendrix");
sayHi();
// looping through an array elements using arrow function and a built in function.

const groupOfName = ["Hendrix", "Ombonyo", "Berly", "Ogutu"];
// this line will loop through all elements of the array and display them on the console.
groupOfName.forEach((e) => console.log(e));

// spread operator.
/* spread operator is a special operator.
   it is denoted with three dots(...) */

const colors = ["Red", "Blue", "White", "Black"];
const colors2 = ["Purple", "Green", ...colors];
console.log(colors);
console.log(colors2);

// let use spead operator on a function.

let addTwoNumbers1 = (firstNumber, secondNumber) => {
	let result = firstNumber + secondNumber;
	return result;
};
const twoNumbers = [20, 45];

console.log(addTwoNumbers1(...twoNumbers));

// rest parameter.
/* it is similar to spread operator, but when it comes to rest operator, it is used inside the function parameters list. */
let myResultsArr = [];

for (i = 0; i <= 10; i++) {
	let results = addTwoNumbers1(i, i * 2);
	myResultsArr.push(results);
}
console.log(myResultsArr);
// variable scopes in functions.
/* scope defines where you access a certain variable in a function.
When a variable is inside the scope you can access it but when the variable is outside the scope you cannot access it.
We have two scope in general when it comes to programming.
  1.local scope.
  2. Global scope.
1. local scope => varaibles within a function and cannot be accessed outside the function.
2. Global scope => varibale outside the function and the can be accessed anywhere in the code. */

// local variables in a function.

function testAvailability(x = 0) {
	console.log("Availabe variable : ", x);
}
testAvailability();
// we are going to get an error when trying to access a variable outside our testAvailability function.

//console.log(x);

function testAvailability2() {
	const myName = "Hendrix";
	const myAge = "25";
	const nationality = "Kenyan";
	console.log(
		`my name is ${myName} , i am ${myAge} old and am a ${nationality}`
	);
}
testAvailability2();

// trying to access a varible outside our function will throw an error.
//console.log(myName);

/* if you want to get the values outside a function then use return keyword.
the return keyword will always return something */

function returnValue() {
	let myHobby = "coding";
	console.log(`I love ${myHobby} in javascript.`);

	return myHobby;
}

let getTheValue = returnValue();
console.log("Outside the returnValue function", getTheValue);
// when accessing myhobby variable from returnValue function it will throw an error.

//console.log(myHobby);

// let versus var variables.
/* let is a block- scoped while varis a function scope.
let can only be accessed in the block that is defined into, not outside.
var can be accessed anywhere thin the function. */
function dailyActivities() {
	if (true) {
		var myActivity = "Coding";
	}
	// when using var keyword the variable can be accessed anywhere in the function.
	console.log(`I love ${myActivity}`);
}
dailyActivities();

function myFavoriteFood() {
	if (true) {
		let myFav = "Ugali";
	}
	//if you try accessing the myFav variable outside the if scope it will throw an error.
	//console.log(myFav);
}
myFavoriteFood();

// immediately invoked functions.
/* This is a function that is immediately invoked and doesnt have a name(anonymous function.)
also its self-executing. */

// the syntax of IIFE

(function () {
	const firstName = "Ombonyo";
	const secondName = "Hendrix";
	const myHobby = "Coding";
	console.log(`I am ${firstName} ${secondName} and i love coding.`);
})();
/* (); => executes the unamed function and if you were to add parameters, you would pass it in within the final braces.
if you want to make the piece of code more concise then arrow functions come in handy. */

// using arrow function in IIFE.

(() => {
	let firstNumber = 20;
	let secondNumber = 20;

	let results = firstNumber + secondNumber;
	console.log(results);
})();
/* advantages of using IIFE.
    1. Does not pollute the global object namespace = > it solves the issue of name conflict.
    2. create private variables and methods from closures. */

const myName = " Hendrix";

const sayGreetings = () => console.log(`Hello ${myName}`);
// now lets use IIFE

(() => {
	const myName = "Ombonyo";
	const sayGreetings = () => `How are you ${myName}`;
	console.log(sayGreetings());
})();

// recursive functions.
/* calling the function inside the same function. */

function getRecursive(number) {
	console.log(number);
	getRecursive(--number);
}
// once the function is invoked/called it will run into an infinite loop.
//getRecursive(4);

// tosolve our infinite loop issue we need to specify when the function should stop calling itself.
function getRecursive(number) {
	console.log(number);
	if (number > 0) {
		getRecursive(--number);
	}
}
/* This function is going to call itself until the parameter is no longer bigger than 0 . When it reaches 0 the function call stops. */
getRecursive(10);

function logRecursive(number) {
	console.log("started funtion", number);
	if (number > 0) {
		logRecursive(--number);
	} else {
		console.log("Done with recursion.");
	}
	console.log("Ended function : ", number);
}
logRecursive(4);

// Nested functions. => functions inside functions.

function myOuterFunction(number) {
	console.log("Outer function.");
	myInnerFunction();
	function myInnerFunction() {
		// the nested function have access to the variables of its paraent.
		let results = number + 7;
		console.log(results);
		console.log("I can access outer Variables : ", number);
	}
}
myOuterFunction(4);
// Anonymous functions.=> this are functions that dont have a name.
let greetingFun = function (name) {
	console.log("Hi,..", name);
};
greetingFun("Hendrix");

//calculate the sum of two numbers.

let addFun = function (num1, num2) {
	let results = num1 + num2;
	return results;
};

console.log(addFun(8, 2));

const myHobby = "Coding";
const myFavoriteProgrammingLanguage = "Javascript";

const dailyRoutine = function () {
	console.log(
		`I love ${myHobby} and my favorite programming language is ${myFavoriteProgrammingLanguage}`
	);
};
dailyRoutine();

// callback functions.=> a function that is passed into another function and called in that function.

const firstName = "Hendrix";
const secondName = " Ombonyo";

let keepGoing = function () {
	console.log(
		`You're doing great job ${secondName} ${firstName}.Keep going there's a reward at the end of your coding journey.`
	);
};
setTimeout(keepGoing, 1000);

// IIFE.=> Continuation.

let results = (function () {
	let firstName = "Hendrix";
	let secondName = "Ombonyo";
	return `My name is ${firstName} ${secondName} and I love coding in javascript`;
})();
console.log(results);

(function (firstName, secondName) {
	console.log(`My name is ${firstName} ${secondName}`);
})("Ombonyo", "Hendrix");
