/* Ask the user to enter a name, using the switch statement to return a confirmation 
that the user is a friend if the name selected is known in the case statements. You 
can add a default response that you don't know the person if it's an unknown name. 
Output the result into the console. */
let prompt = require("prompt-sync")();

let userInput = String(prompt("Please Enter a Name : "));
let message;
switch (userInput) {
	case "Hendrix":
	case "Mamboleo":
	case "Lihanda":
	case "Ombonyo":
	case "Sing":
		message = userInput + " " + "is my friend";
		break;
	default:
		message = userInput + " " + "is not one of my friends";
}
//console.log(message);
//lemmi try using arrays.
let myListOfNames = ["Hendrix", "Mamboleo", "Lihanda", "Ombonyo", "Sing"];
let message2;
myListOfNames.find(function (e) {
	if (userInput === e) {
		message2 = userInput + " " + "is one of my friend.";
	} else if (!userInput == e) {
		message2 = userInput + " " + "We are not friends";
	}
});
console.log(message2);
// i will modify it on the second option of when the user input is not equal to what is in my array
