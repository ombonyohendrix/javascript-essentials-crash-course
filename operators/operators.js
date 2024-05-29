/* we have three types of operators in javascript
   1. Arithmetic operators
   they all deal with mathematics
    -,+,/,%,**,*
   2. comparison operators
   >,<,=>,=<
   3. logical operators.
     &&,||, !
 */
// -
let number1 = 30;
let number2 = 10;
let result = number1 - number2;
console.log(result);
//+
console.log((result = number1 + number2));
/*   **   */
console.log((result = number1 ** number2));
/*   *   */
console.log((result = number1 * number2));
// %
console.log((result = number1 % number2));
// /
console.log((result = number1 / number2));

// when you try performing calculation between any of these operators with a string the output will be NaN.
// + operator can also be used in string concatination. Joining two strings together.It wont throw an error.

let firstName = "Ombonyo  ";
let lastName = "Hendrix  ";
let iLoveJavascript = true;

console.log(
	"My name is " +
		firstName +
		lastName +
		"and i love javascript" +
		iLoveJavascript
);
let prompt = require("prompt-sync")();
let userName = prompt("Please Enter your Name ");
if (userName !== String) {
	//console.log("Please Enter a string of letters not a number");
} else {
	console.log("Your name is : ${userName}");
}
