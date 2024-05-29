/* i will implement it when i grasp the logic behind it 
paper beats rock.
rock beats scissors.
scissors beats rock.
userChoice.
computerChoice.*/
// we need to get user input.
let prompt = require("prompt-sync")();

let userInput = prompt("Please Enter your choice: rock, paper or scissors ");
userInput = userInput.toLowerCase();
let userChoice = (userInput) => {
	if (
		userInput === "rock" ||
		userInput === "paper" ||
		userInput === "scissors"
	) {
		return userInput;
	} else {
		return "Wrong input";
	}
};
console.log(userChoice());
