// multiplication table of 1 to 12

//let prompt = require("prompt-sync")();

//let userInPut = prompt("Multiplication of : ");

//userInPut = Number(userInPut);

let maxNumber = 12;

let result;

let message;

for (let i = 1; i <= maxNumber; i++) {
	//result = userInPut * i;
	//console.log(`${i} * ${userInPut}  =  ${result}`);
}
//
let i = 1;
while (i <= 12) {
	//console.log("Multiplication Table of : ", i);
	let j = 1;
	while (j <= 12) {
		let result = i * j;
		//console.log(`${i}  * ${j}  = ${result}`);
		j++;
	}
	i++;
}

let num1 = 20.95;
let num2 = 7.99;
let sum = num1 + num2;
//console.log(sum);
let num3 = 2095;
let num4 = 799;
let sum2 = (num3 + num4) / 100;
//console.log(sum2);
//if someone is eligible for driving.
let legalAgeOfDriving = 1;
if (legalAgeOfDriving >= 18) {
	//console.log("Yes you can drive.");
} else {
	//console.log("You are under age of driving.");
}
// rock paper scissor game
/* rules of the game
1.paper beat rock
2.rock beats scissors.
3.scissors beats paper. */

//lets generate computer choice.
let computerChoice = "";
let results = "";

let randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber) {
	case 0:
		computerChoice = "rock";
		break;
	case 1:
		computerChoice = "paper";
		break;
	case 2:
		computerChoice = "scissors";
		break;
}
//lets get userChoice

let prompt = require("prompt-sync")();

const getUserInput = () => {
	let userInPut = String(
		prompt("Please Enter one of these: rock, paper, scissors.")
	);
	userInput = userInput.toLowerCase();
	if (
		userInPut === "rock" ||
		userInPut === "paper" ||
		userInPut === "scissors"
	) {
		return userInPut;
	} else {
		console.log("Please enter correct input");
	}
};
if (computerChoice === "rock" && userChoice === "rock") {
	results = `You picked ${userChoice} and computer picked ${computerChoice}.It is a tie`;
} else if (computerChoice === "paper" && userChoice === "rock") {
	results = `You picked ${userChoice} and computer picked ${computerChoice}.You lose.!.`;
} else if (computerChoice === "scissors" && userChoice === "rock") {
	results = `You picked ${userChoice} and computer picked ${computerChoice}.Sorry you lose and computer won.`;
}
console.log(getUserInput());
