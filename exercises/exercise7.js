/* 1. Create a variable called prize and use a prompt to ask the user to set the 
value by selecting a number between 0 and 10
2. Convert the prompt response to a number data type
3. Create a variable to use for the output message containing the value "My 
Selection: "
4. Using the switch statement (and creativity), provide a response back 
regarding a prize that is awarded depending on what number is selected
5. Use the switch break to add combined results for prizes
6. Output the message back to the user by concatenating your prize variable 
strings and the output message string */
let prompt = require("prompt-sync")();

let prize = prompt("Select a number between 0 and 10 ");
prize = Number(prize);
let output = "My Reward is :  ";
if (Number.isNaN(prize)) {
	console.log("Please select a valid Number!");
} else {
	switch (prize) {
		case 0:
			output += "Gold";
			break;
		case 1:
			output += "Gold";
			break;
		case 2:
			output += "Gold";
			break;
		case 3:
			output += "Gold";
			break;
		case 4:
			output += "Gold";
			break;
		case 5:
			output += "Gold";
			break;
		case 6:
			output += "Gold";
			break;
		case 7:
			output += "Gold";
			break;
		case 8:
			output += "Gold";
			break;
		case 9:
			output += "Gold";
			break;
		case 10:
			output += "Gold";
			break;
		default:
			output += "No reward for this selection";
	}
	console.log(output);
}
