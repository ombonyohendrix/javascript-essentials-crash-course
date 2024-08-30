/* Built in methods are predefined functions that comes with javascript engine.
    -Global javascript methods.
    -String methods.
    -Math methods.
    -Date methods.
    -Array methods.
    -Number methods. */
// chaining methods.

const myName = "Ombonyo";

console.log(
	myName
		.concat("  Hendrix  ")
		.toUpperCase()
		.replace("OMBONYO", "Sing")
		.concat(" I love coding ")
);

// global method.
const myValue = 10;

//console.log(Number.isNaN(myValue));
console.log(isNaN(myValue));

// decoding and encoding urls
let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

/* parsing numbers. 
when parsing integers use parseInt()
when parsing float numbers use parseFloat()*/
//string to interger.

const number = parseInt("20");
console.log(typeof number);

const number2 = "20";

console.log(typeof number2);

// floating number.

const floatNumber = parseFloat("3.8.9");
console.log(floatNumber);

/* array methods. */

// foreach method.

const myNames = ["Ombonyo", "Hendrix", "Sing"];

function printNames(element, index) {
	console.log("name :", element, "postion :", index);
}
myNames.forEach(printNames);

// filter method.
// if the value in the array evaluate to true they will remain in the array , if not they will be popped off in the array.

let myArray = ["Hendrix", 9, 40, 30, "Ombonyo", "Sing"];

function filterArray(element, index) {
	return typeof element === "string";
}
let myResult = myArray.filter(filterArray);
console.log(myResult);

let arr = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
	return typeof element === "string";
}
let filterArr = arr.filter(checkString);
console.log(filterArr);

// every method
// every method both elements must be of one type to be eveluated as true else it will evaluate to false.
console.log(myArray.every(filterArray));

const numbers = [1, 2, 3, 4, 5];
function checkIfIntegers(element) {
	return typeof element === "number";
}
console.log(numbers.every(checkIfIntegers));

//map method.
//This method will transform the entire array into a new array.

let numbersDoubled = [2, 3, 4, 5];
let newArray = numbersDoubled.map((elem) => {
	return elem * 2;
});
console.log(newArray);

/* String Methods. */
//1. concat() method. it wont transform the original string but it will join them together.

const firstName = "Ombonyo";
const secondName = "Hendrix";
const fullName = firstName.concat(secondName);
console.log(fullName);

//2. split method => it converts string into an array.

const myFavoriteLang = "Javascript Javascript Javascript";
const resultOfSplit = myFavoriteLang.split(" ");
console.log(resultOfSplit);

//3. join() => it converts array into  a string.

const myCharName = ["O", "m", "b", "o", "n", "y", "o"];
const myFirstName = myCharName.join("");
console.log(myFirstName);

// working with positions and index.

let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("re");
console.log(index_re);
// when it cant finf the index of certain characters/missing in thestring it will return -1
let index_python = poem.indexOf("python");
console.log(index_python);

// an alternative method.
// search() will accept a regex format as input but indexOf() will only take or accept string.

let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("my");
console.log(pos);
/* creating substrings */

// using a slice() method we can extract a substing from the original string.
//slice() takes in two parameters. The index where you want to start and the index where ypu want to end.
// if you dont specify the end it will run through the entire string.

const greetings = "Hello Ombonyo Hendrix, How is your day so far.";
//omiting the end index it will output the entire string.
const sub_string = greetings.slice(0);
const sub_string1 = greetings.slice(0, 13);
console.log(sub_string);
console.log(sub_string1);

/* replacing parts of a string. */
//replace() method. it takes in two parameters old and new. replace(old,new)

const nameSwap = "Hendrix";
const newName = nameSwap.replace("Hendrix", "Ombonyo");

console.log(newName);
/* lowercase and upercase. */

//toLowerCase(). => convert the specified srting to lowercase.

const upperName = "OMBONYO HENDRIX";
const lowerName = upperName.toLowerCase();
console.log(lowerName);

//toUpperCase. => converts the specified string to uppercase.

const programmingLang = "javascript";
const upperProgrammingLang = programmingLang.toUpperCase();
console.log(upperProgrammingLang);

// combine the both methods and make it a bit complex.

const uppercaseString = "MY FAVOURITE PROGRAMMING LANGUAGE IS JAVASCRIPT.";
const tolower_case = uppercaseString.toLowerCase();
const capitalizeFirstLetter = tolower_case.charAt(0).toUpperCase();
const finalResults = capitalizeFirstLetter.concat(tolower_case.slice(1));
console.log(finalResults);

/* Number Methods. */
//1. Number.isNaN() => checks whether something is a number or not.
// isFinite(),isInteger(), toFixed(), toPrecision().

const myNumber = 20;
const myFirstNam = "Ombonyo";
console.log(Number.isNaN(myNumber));
console.log(isNaN(myFirstNam));
/* Math Methods. */
//1.finding the highest and lowest number.

const highestNuber = Math.max(28, 90, 87, 2, 7, 90, 100);
console.log(highestNuber);

const lowestNumber = Math.min(2, 0, 89, 76, 9, 30);
console.log(lowestNumber);

// square root and raising to the power of.

const results = Math.sqrt(64);

console.log(results);
// power method takes in two parameters. The base and the exponent.
const results1 = Math.pow(5, 3);
console.log(results1);

// turning decimals into integers.
// ceil(), floor()

const Num1 = 3.9;
const Num2 = 8.9;
console.log("Num1 : ", Num1, "rounded to", Math.round(Num1));
console.log("Num2 : ", Num2, "rounded to", Math.round(Num2));

//Exponent and logarithm.
/* Date Methods. */
// create date.

let currentDateTime = new Date(1000);
console.log(currentDateTime);

let currentDateTimeNow = Date.now();
console.log(currentDateTimeNow);

// Methods to get and set elements of a date.
let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

console.log(d.toDateString());
console.log(d.toLocaleDateString());
