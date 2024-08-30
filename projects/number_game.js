/* Ask the user to enter a number and check whether it's greater than, equal to, or less 
than a dynamic number value in your code. Output the result to the user. */
//let _ = required("underscore");
let prompt = require("prompt-sync")();

let userInput = Number(prompt("Please Enter a Number:  "));
let myName = prompt("Please Enter Your Name:  ");
//myName = String(myName);
let myDynamicNumber = 30;
let outPut;
/* if (!_.isString(myName)) { */
/* 	console.log("Please Enter a valid Name not a Number!"); */
/* } */
if (typeof myName === "string") {
	return `Please Enter a valid name not a numnber!`;
}
if (Number.isNaN(userInput)) {
	return "Please Enter a valid Number not a Character or a String";
}
if (userInput > myDynamicNumber) {
	outPut = "Wow!," + myName + " " + "your Number is greater than Mine.";
} else if (userInput === myDynamicNumber) {
	outPut = "Guess what" + " " + myName + "!," + "we tied.";
} else if (userInput < myDynamicNumber) {
	outPut =
		"Sorry" +
		" " +
		myName +
		"!," +
		"you've lost. My number is greater than yours.";
}
console.log(outPut);
