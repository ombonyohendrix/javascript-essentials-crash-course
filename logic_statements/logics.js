/* logic statements allow us to make multiple paths in or code
• if and if else statements
• else if statements
• Conditional ternary operators
• switch statements */

// if and if else statements
/* if some condition is true a certain action will happen else another action will happen.
 if it is raining then, I will take my umbrella, else I will leave my 
umbrella at home */

let raining = true;

if (raining) {
	console.log("I will take my umbrella");
} else {
	console.log("I will leave my umbrella at home");
}
/* if (expression){
    the code associated with the if block we only be executed if the expression is true
}else{
    code associated with the else block
    we dont need an esle block its optional
    this code will only be executed if the expression is false.
}
 */
let age1 = 30;

if (age1 >= 18) {
	console.log("Congrats Hendrix!. You are eligible for casting a vote");
} else {
	console.log(
		"Sorry Hendrix!. You are not eligible for voting you will have to wait until you turn 18 years old"
	);
}
// else if statement
/* if a value falls into a certain category, then a certain action wil happen, else if the value falls into a different categorythan the previous statements then a certain action will happen else if the value falls into a different category than either of the previous brackets then a certain action will happen
 If 
a person is younger than 3, then access is free, else if a person is older than 3 and 
younger than 12, then access is 5 dollars, else if a person is older than 12 and younger 
than 65, then access is 10 dollars, else if a person is 65 or older, then access is 7 
dollars: */
let age = 70;
let cost = 0;
let message;

if (age < 3) {
	cost = 0;
	message = "Access is free under the age of three years old";
} else if (age >= 3 && age < 12) {
	cost = 5;
	message = "The cost of your ticket is 5 dollars";
} else if (age >= 12 && age < 65) {
	cost = 10;
	message = "The cost of your ticket is 10 dollars";
} else {
	cost = 7;
	message = "The cost of your ticket is 7 dollars";
}

console.log(message);
console.log("Your total cast is :" + cost);
//ternary operator
/* it has three operands
operand1 ? operand2 : operand3 
operand is the expression that needs to be executed. if the vaule of the expression is true , operand1 gets executed. if the value of theexpression is false , operand3 gets executed
if operand1 then eperand2 else operand3
expression ? true : false*/
//casting vote
let ageForVoting =
	age1 >= 18 ? "Your are eligible for voting" : "Still young for voting";
console.log(ageForVoting);

// swtich statements
/* they are if else if alternatives.
they are very important when you have multiple values to select from.
switch(expression){
	case:1
	//code
	break;
	case:n
	//code
	break;
	default:
} */
//my weekday plan

let weekday = "Mon";
switch (weekday) {
	case "Monday":
		console.log("Its Monday do some coding");
		break;
	case "Tuesday":
		console.log("Its Tuesday Hendrix, time for physical exercises");
		break;
	case "Wensday":
		console.log("Its Wensday Hendrix,time for cycling");
		break;
	case "Thursday":
		console.log("Its Thursday Hendrix, read one of your favourite book");
		break;
	case " Friday":
		console.log("Its Friday Hendrix,do some coding");
		break;
	case "Saturday":
		console.log("Its Saturday Hendrix, push some code on Github");
		break;
	case "Sunday":
		console.log(
			"Its Sunday Hendrix, time to reflect on what you have achieved during the week"
		);
		break;
	default:
		console.log("Hey Hendrix!, you've entered the wrong day of the week");
}
