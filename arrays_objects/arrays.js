/* An array is one of non-primitive data type in javascript
its used to hold multiple values.{strings, boolean, number.......}
we have two ways of creating an array:
     1. arr1 = new Array("Yellow", "Black", "Red") 
     2. arr2 = ["Yellow", "Black", "Red"]
Both methods are correct but the second one is the most prefered because the first one might end up throwing unexpected erros.
so lets stike to the second one.
*/

arr1 = new Array(10);
arr2 = [10];

console.log(arr1);
console.log(arr2);
// we want to see what will be output when we run the code.
arr3 = ["Hello Hendrix", 20, true];
//always remember that an index of array is 0 based.
console.log(typeof arr3[0]);
console.log(typeof arr3[1]);
console.log(typeof arr3[2]);
// when using the const key word on arrays you can change the values of the arrays but you cannot assign a new value to the array it will throw an error.

const arr4 = [20];
arr4[0] = 30;
//arr4 = "Hendrix Ombonyo";
console.log(arr4[0]);
//console.log(arr4);

//overwritting elements of an array

colours = ["Red", "Blue", "Black"];
colours[0] = "white";
colours[2] = "orange";

colours[3] = "Navy blue";
colours[-1] = "purple";

console.log(colours);

// The built-in length property of an arry.
// These will return the number of elements array has.
console.log(colours.length);
emptyArray = [];
console.log(emptyArray.length);

numbers = [10, 30, 40, 50];
numbers[7] = 80;
console.log(numbers.length);
console.log(numbers);

myShoppingList = ["Bread", "Banana", "Milk", "Sugar"];
myShoppingList[0] = "Salt";
console.log(myShoppingList, myShoppingList.length);

// array methods
//Adding and replacing elements
//push()=>adds a new element at the end of the array.

myFavouriteFruits = ["Mango", "Orange", "Banana"];
myFavouriteFruits.push("Tangerine");
console.log(myFavouriteFruits);
console.log(myFavouriteFruits.length);

let lengthOfMyFavouriteFruits = myFavouriteFruits.push("Apple");
console.log(myFavouriteFruits);
console.log(lengthOfMyFavouriteFruits.length);

//splice method()=> used when you want to add elements at a certain index of an array
//denoted with splice(index of where you want you new element to start at, the number of elements you want to delete)

let myFavouriteCars = ["BMW", "Mercedece", "Audi"];
myFavouriteCars.splice(1, 0, "Toyota", "Subaru");
console.log(myFavouriteCars);
console.log(myFavouriteCars.length);

//lets try deleting some elements on our array using splice method

let myProgrammingLanguages = ["Java", "Python", "Javascript", "Rust"];
myProgrammingLanguages.splice(3, 2, "Golang", "Go", "Swift");
console.log(myProgrammingLanguages);
console.log(myProgrammingLanguages.length);

//concat() method => these will join two arrays together to form one array as a result.

let myNumbers = [1, 2, 3, 4, 5];
let myNumbers1 = [6, 7, 8, 9, 10];

let myNewArray = myNumbers.concat(myNumbers1);

console.log(myNewArray);
console.log(myNewArray.length);

//adding new values to the array using the concat method.
let myNewArray1 = myNewArray.concat(11, 12, 13, 14, 15);

//onsole.log(myNewArray1);
//console.log(myNewArray1.length);

// Deleting elements on array.
//pop()=> these method will delete last element of array.
myNewArray.pop();
console.log(myNewArray1);
console.log(myNewArray1.length);

// shift ()=> these method will delete the first element of array
console.log(myNewArray1.shift());

//Finding elements in array
//Find() method =>these method will try and search if what you are looking for is in the array.
//it is acheived by the help of function

myCounties = ["Nairobi", "Kisumu", "Nakuru"];
//with a regular function
let findValue = myCounties.find(function (e) {
	return e === "Kakamega";
});
console.log(findValue);

//with a arrow function
let findvalue2 = myCounties.find((e) => e === "Nairobi");
console.log(findvalue2);

//finding the index of an element
//indexOf() is used.
// if the element is not on the array list it will return -1 as output

let findIndexOfValue = myCounties.indexOf("Kakamega");
console.log(findIndexOfValue);

// lasIndexOf()=> this method is useful when we have occurence on our arrray.

let animals = ["Cow", "Goat", "Donkey", "Horse", "Cow"];
let lastAnimal = animals.lastIndexOf("Cow");
console.log(lastAnimal);

// sorting method.
//it is a built - in array method.
//on numbers it sort from the smallest to the highest and on stringit sorts alphebetically A-Z

//sting

let names = ["John", "Hendrix", "Ombonyo", "Sing"];
names.sort();
console.log(names);

//numbers

let myScores = [90, 80, 30, 57, 98, 46, 10];
//myScores.sort();
//console.log(myScores);

//reversing() method=> it changes the order of elements in array
//the last comes first and the first goes to the end
//it does not matter whether the array is sorted or not, it will just reverse the array

myScores.reverse();
console.log(myScores);
