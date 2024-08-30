/* Experiment with the Math object with these steps:
1. Output the value of PI into the console using Math.
2. Using Math get the ceil() value of 5.7, get the floor() value of 5.7, get the 
round value of 5.7, and output it into the console.
3. Output a random value into the console.
4. Use Math.floor() and Math.random() to get a number from 0 to 10.
5. Use Math.floor() and Math.random() to get a number from 1 to 10.
6. Use Math.floor() and Math.random() to get a number from 1 to 100.
7. Create a function to generate a random number using the parameters of min
and max. Run that function 100 times, returning into the console a random 
number from 1 to 100 each time. */
console.log(Math.PI);
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.round(5.7));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

function randNum(max, min) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let x = 0; x < 100; x++) {
	console.log(randNum(1, 100));
}
