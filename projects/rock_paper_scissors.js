/* i will implement it when i grasp the logic behind it 
paper beats rock.
rock beats scissors.
scissors beats rock.
userChoice.
computerChoice.*/
// we need to get user input.
const getUserChoice = (userInput) => {
	let prompt = require("prompt-sync")();
	userInput = prompt("Please Enter your choice: rock, paper or scissors ");
	userInput = userInput.toLowerCase();
	if (
		userInput === "rock" ||
		userInput === "paper" ||
		userInput === "scissors"
	) {
		return userInput;
	} else {
		return "Please Enter the right Input";
	}
};
// now lets work on computerchoice.
const getComputerChoice = () => {
	//generate random number.
	const randNumber = Math.floor(Math.random() * 3);
	//assigning the random number to each value.
	switch (randNumber) {
		case 0:
			return "paper";
		case 1:
			return "rock";
		case 2:
			return "scissors";
	}
	return randNumber;
};
//console.log(getComputerChoice());
//console.log(getComputerChoice());
//console.log(getComputerChoice());
const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return `It's a tie.Congratulations to both of you.`;
	}
	if (userChoice === "rock") {
		if (computerChoice === "paper") {
			return `Computer win the game .`;
		} else {
			return `Sorry!, you've lost the game to computer.`;
		}
	}
	if (userChoice === "paper") {
		if (computerChoice === "scissors") {
			return `Computer Wins the game.`;
		} else {
			return `Sorry!,you've lost the game to the computer.`;
		}
	}
	if (userChoice === "scissors") {
		if (computerChoice === "rock") {
			return `Computer Wins the game.`;
		} else {
			return `Sorry!,you've lost the game to the computer.`;
		}
	}
};
//console.log(determineWinner("rock", "paper"));
//console.log(determineWinner("scissors", "paper"));
//console.log(determineWinner("paper", "scissors"));

const playingGame = () => {
	const userChoice = getUserChoice();
	//console.log(userChoice);
	const computerChoice = getComputerChoice();
	console.log(`You threw : ${userChoice}`);
	console.log(`computer threw : ${computerChoice}`);
	console.log(determineWinner(userChoice, computerChoice));
};
playingGame();
