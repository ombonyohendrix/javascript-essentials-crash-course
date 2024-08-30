/* Create a recursive function
Create a recursive function that counts up to 10. Invoke the function with different 
start numbers as the arguments that are passed into the function. The function 
should run until the value is greater than 10. */

const getRecursion = function counter(i) {
	console.log(i);
	if (i < 10) return counter(i + 1);
	return i;
};
getRecursion(0);

//Decrementing a number using recustion.

function decrementNumber(number) {
	console.log(number);
	if (number > 0) return decrementNumber(--number);
}
decrementNumber(10);
