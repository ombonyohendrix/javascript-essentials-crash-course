/* in javascript we have two data types.
_primitive data types
_non  primitive data types.

1. primitive datatypes
-these are datatypes that can only hold one single value
      -boolean
      -string
      -Number
      -BigInt
      Null
      Symbol
      undefined.
2. non primitive datatypes.
they can hold multiple values
      arrays
      objects
 */
//type conversion.
let number1 = 10;
let number2 = "20";
let result = number1 + number2;
//if you want to get 30, we will have to convert number2 to a number the add them together.

//console.log(result);
// javascript is very forgiving when it comes to types conversion.
//it wont throw an error instead it will combine the sting type and number type together.
//when it comes to multiplication it will multiply the two numbers

//console.log((result = number1 * number2));
/* we have three types of conversion in js i.e
  string()=>converts to string
  number()=>converts to number 
  boolean()=>converts to boolean.
  lets see them in action*/

//let numberToString = 6;
//numberToString = String(numberToString);
//console.log(numberToString, typeof numberToString);

//let stringToNumber = "12";
//stringToNumber = Number(stringToNumber);
//console.log(stringToNumber, typeof stringToNumber);

let stringToBoolean = "Iam Hendrix Ombonyo and I love javascript";
stringToBoolean = Boolean(stringToBoolean);
//console.log(stringToBoolean, typeof stringToBoolean);

//lets trying converting an actual string to a number and see what will happen when we run the code

let stringToNumber = "Hendrix";
stringToNumber = Number(stringToNumber);

//console.log(stringToNumber, typeof stringToNumber);

//console.log((result = number1 + Number(number2)));
let str1 = "Laurence";
console.log(str1, typeof str1);
let str2 = "Svekis";
console.log(str2, typeof str2);
let val1 = undefined;
console.log(val1, typeof val1);
let val2 = null;
console.log(val2, typeof val2);
let myNum = 1000;
console.log(myNum, typeof myNum);
