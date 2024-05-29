/* We are going to create a program that will randomly describe an inputted name.
1. Create an array of descriptive words.
2. Create a function that contains a prompt asking the user for a name.
3. Select a random value from the array using Math.random.
4. Output into the console the prompt value and the randomly selected array 
value.
5. Invoke the function */
let prompt = require("prompt-sync")();
let myAdjectives = ["Super", "Wonderfull", "Bad", "Angry", "Careful"];

function describingUserName() {
	const userName = prompt("Please Enter Your Name: ");
	let randomNumber = Math.random() * myAdjectives.length;
	randomNumber = Math.floor(randomNumber);
	//console.log(randomNumber);
	return myAdjectives[randomNumber] + "  " + userName;
}
console.log(describingUserName());
