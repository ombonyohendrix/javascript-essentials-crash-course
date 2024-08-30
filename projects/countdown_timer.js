/* Create code for a countdown timer that can be executed in the console window, and 
will show the total milliseconds, days, hours, minutes, and seconds remaining until a 
target date is reached:
1. Create an end date that you want to count down to. Format it in a date type 
format within a string.
2. Create a countdown function that will parse the endDate() and subtract the 
current date from that end date. This will show the total in milliseconds. 
Using Date.parse() you can convert a string representation of a date to a 
numeric value as a number of milliseconds since January 1, 1970, 00:00:00 
UTC.
 3. Once you have the total milliseconds, to get the days, hours, minutes, and 
seconds you can take the following steps:
• To get days you can divide the number of milliseconds in a date, 
removing the remainder with Math.floor().
• To get hours you can use modulus to capture just the remainder once 
the total days are removed.
• To get minutes you can use the value of milliseconds in a minute and 
using the modulus capture the remainder.
• Do the same for seconds by dividing the number by seconds in 
milliseconds and getting the remainder. If you use Math.floor() you 
can round down removing any remaining decimal places that will be 
shown in the lower values.
4. Return all the values within an object with property names indicating what 
the unit of time the values refer to.
5. Create a function to use a setTimeout() to run the update() function every 
second (1,000 milliseconds). The update() function will create a variable that 
can temporarily hold the object return values of countdown(), and create an 
empty variable that will be used to create the output values.
6. Within the same function, using the for loop get all the properties and values 
of the temp object variable. As you iterate through the object update the 
output string to contain the property name and property value. 
7. Using console.log(), print the output result string into the console.*/

const endDate = "Aug 24 2024";
function countdown() {
	const total = Date.parse(endDate) - new Date();
	const days = Math.floor(total / (1000 * 60 * 60 * 24));
	const hrs = Math.floor((total / (1000 * 60 * 60)) * 24);
	const mins = Math.floor((total / 1000 / 60) % 60);
	const secs = Math.floor((total / 1000) % 60);

	return {
		days,
		hrs,
		mins,
		secs,
	};
}
function update() {
	const temp = countdown();
	let output = "";
	for (const property in temp) {
		output += `${property} : ${temp[property]}`;
	}
	console.log(output);
	setTimeout(update, 1000);
}
update();
