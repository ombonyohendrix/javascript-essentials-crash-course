/* Using string manipulation, create a function that will return a string with the first 
letter of all the words capitalized and the rest of the letters in lowercase. You should 
transform the sentence thIs will be capiTalized for each word into This Will Be 
Capitalized For Each Word: 
1. Create a string with several words that have letters with different cases, a 
mix of upper and lowercase words.
2. Create a function that gets a string as an argument, which will be the value 
that we will manipulate.
3. In the function first transform everything to lowercase letters.
4. Create an empty array that can hold the values of the words when we 
capitalize them.
5. Convert the phrase into words in an array using the split() method.
6. Loop through each one of the words that are now in the new array, so you 
can select each one independently. You can use forEach() for this.
7. Using slice() isolate the first letter in each word, then transform it to 
uppercase. Again using slice(), get the remaining value of the word 
without including the first letter. Then concatenate the two together to form 
the word that is now capitalized.
8. Add the new capitalized word into the blank array that you created. By the 
end of the loop you should have an array with all the words as separate 
items in the new array.
9. Take the array of updated words and using the join() method, transform 
them back into a string with spaces between each word.
10. Return the value of the newly updated string with capitalized words that can 
then be output into the console.
*/

const myString = "thIs will be capiTalized for each word";

function stringManipulation(str) {
	str = str.toLowerCase();
	const tempoArray = [];
	let words = str.split(" ");
	words.forEach((word) => {
		let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
		tempoArray.push(temp);
	});
	return tempoArray.join(" ");
}
console.log(stringManipulation(myString));

const myString2 =
	"MY FAVORITE proGRamming LanGUAGE IS javascRIPT. I love it WITH all my heart.";
// step one create a function.

function manipulatingString(str) {
	// step two declare an empty array where you will store each and every word.
	const myArry = [];
	// step three. convert the string into lower case.
	str = str.toLowerCase();
	// step four split the words.
	let words = str.split(" ");
	// step five. loop through each and every word in words and capitalize the first letter the rejoing the remaining letters together to form complete word.
	words.forEach((word) => {
		let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
		// push the temp into our empty array that we declared above.
		myArry.push(temp);
	});
	// return myArray and rejoin it.
	return myArry.join(" ");
}
// last step is calling the function.
console.log(manipulatingString(myString2));
