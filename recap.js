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
// getting user choice.

const getUserChoice = (userInput) => {
	// taking all edge cases into account. User can type capitalized input or lowercase input.
	userInput = userInput.toLowerCase();
	//check for valid choices.
	if (
		userInput === "paper" ||
		userInput === "scissors" ||
		userInput === "rock"
	) {
		return userInput;
	} else {
		return "Please Enter Valid choice.";
	}
};
const getComputerChoice = () => {
	//generate a random number from 0-2 using math.random()
	const randomChoice = Math.floor(Math.random() * 3);
	//console.log(randomChoice);
	switch (randomChoice) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
	return randomChoice;
};
//console.log(getComputerChoice());
// check if the game is a tie.
const determineWinner = (userChoice, computerChoice) => {
	// our base case if statement
	if (userChoice === computerChoice) {
		return "Its a tie";
	}
	if (userChoice === "rock") {
		if (computerChoice === "paper") {
			return `Sorry!, you've lost the game.`;
		} else {
			return `Congratulations!,you've won the game.`;
		}
	}

	if (userChoice === "paper") {
		if (computerChoice === "rock") {
			return `Congratulations!,you've won the game`;
		} else {
			return `Sorry!, you've lost the game`;
		}
	}

	if (userChoice === "scissors") {
		if (computerChoice === "paper") {
			return `Congratulations!, you've won the game.`;
		} else {
			return `Sorry!,you've lost the game.`;
		}
	}
};
//console.log(determineWinner("rock", "paper"));
//console.log(determineWinner("paper", "rock"));
//console.log(determineWinner("rock", "rock"));
const playGame = () => {
	const userChoice = getUserChoice("rock");
	const computerChoice = getComputerChoice();
	console.log(`You threw : ${userChoice}`);
	console.log(`Computer threw : ${computerChoice}`);
	console.log(determineWinner(userChoice, computerChoice));
};
playGame();
// classes.

class Coupon {
	constructor(price, expiration) {
		this.price = price;
		this.expiration = expiration || "two weeks";
	}
	// methods.
	getPriceText() {
		return `$ ${this.price}`;
	}
	getExpirationText() {
		//return `The expiration will be in ${this.expiration} time.`;
	}
	isRewardsEligible(user) {
		//return user.rewardsEligible && user.active;
	}
	getsRewards(user) {
		//if (this.isRewardsEligible(user)) {
		//this.price = price * 0.9;
		//}
	}
}
const coupon = new Coupon(5);
//console.log(coupon.getsRewards());
console.log(coupon.price);
console.log(coupon["expiration"]);
console.log(coupon.getPriceText());
console.log(coupon.getExpirationText());

class flashCoupon extends Coupon {
	constructor(price, expiration) {
		super(price);
		this.expiration = expiration || "two hours";
	}
	getExpirationText() {
		return `This is a flash offer and expires in ${this.expiration} time.`;
	}
}

const flash = new flashCoupon(10);
console.log(flash.price);
console.log(flash.expiration);
console.log(flash.getExpirationText());
console.log(flash.getPriceText());

// map and filter array methods.

const numbers = [1, 2, 3, 8, 49, -1, 5, 4, 7, 6];
const sorted = numbers.sort();
console.log(sorted);
// chaining our methods.
const items = sorted.filter((n) => n > 0).map((n) => ({ value: n }));
//console.log(filtered);

console.log(items);

const players = [
	{ name: "Ombonyo", score: 20 },
	{ name: " Hendrix", score: 10 },
	{ name: "sing", score: 30 },
];
const formattedArray = players.map((player) => ({
	[player.name]: player.score,
}));
console.log(formattedArray);
const formattedArray2 = players.map(({ name, score }) => ({ [name]: score }));

console.log(formattedArray2);

// capitalize the first letters in the given string.

const myString = "i am ombonyo HENDRIX  anD I LOVE CODING iN javascript";
function capitalizedString(str) {
	str = str.toLowerCase();
	const myFinalStringCapitalized = [];
	let tempString = str.split(" ");
	tempString.map((word) => {
		let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
		myFinalStringCapitalized.push(temp);
	});
	return myFinalStringCapitalized.join(" ");
}
console.log(capitalizedString(myString));

// replacing vowels with their respective indexes.

const stringToBeReplaced = "I love CoDING";
const myVowels = ["a", "e", "i", "o", "u"];

function ReplacedString(str) {
	str = str.toLowerCase();
	myVowels.forEach((vowel, index) => {
		//console.log(vowel, index);
		// what is actually happening here is vowels from the string are being replaced by their corresponding indexes.
		str = str.replaceAll(vowel, index);
	});
	return str;
}
console.log(ReplacedString(stringToBeReplaced));
// lemme do it again using map and this time i wont use a function.
let stringToBeManipulated =
	"Hey OMBONYO hendrix, How are you. Do you love yourself.";
const vowels = ["a", "e", "i", "o", "u"];
stringToBeManipulated = stringToBeManipulated.toLowerCase();
vowels.map((vowel, index) => {
	stringToBeManipulated = stringToBeManipulated.replaceAll(vowel, index);
});
console.log(stringToBeManipulated);
/* a number game.
have a dynamic number
let user enter their number and compare to the dynamic number.
let user enter their name as well. */
const numberGame = () => {
	let prompt = require("prompt-sync")();
	const number = prompt("Please Enter a number :");
	const myName = prompt("Please Enter Your Name : ");
	const secretNum = 30;
	const results = "";
	if (isNaN(number)) {
		return `Please Enter a valid number`;
	}
	if (typeof !myName === "string") {
		return `Please Enter a valid Name not a string`;
	}
	if (typeof number === "number" && typeof myName === "string") {
		if (number === secretNum) {
			result += "Guess what" + " " + myName + "!," + "we tied.";
		}
		return result;
	}
};
console.log(numberGame());
