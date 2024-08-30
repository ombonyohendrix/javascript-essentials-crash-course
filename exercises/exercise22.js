/* Using the replace() string method, complete this vowel replacer exercise by 
replacing the vowels in a string with numbers. You can start with this string: */

let myString = "I love Conding In Javascript";
myString = myString.toLowerCase();
let vowels = ["a", "e", "i", "o", "u"];
vowels.forEach((vowel, index) => {
	console.log(vowel, index);
	// replace() method takes in two arguement old and new. in our case vowel is our old and index is our new.()
	myString = myString.replaceAll(vowel, index);
});
console.log(myString);
