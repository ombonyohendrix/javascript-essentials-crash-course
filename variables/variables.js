/* variables are very important when it comes to the world of programming.
varible definition consist of three parts: keyword{var,let,const},name and value
var is a scope variable while let is a block scope variable.
const in the other hand is only used when you dont have the intentions of reassigning the variable with a new value in the middle of the program.
 */
let firstname = "Ombonyo";
var lastname = "Hendrix";

//console.log(firstname);
/* lets try assigning a new value to our const varible and see what will happen */
const name1 = "Ombonyo";
name1 = "Hendrix";
console.log(name1); //we are going to get a beautifull error.
/* we have rules to follow when declaring our varibles.
1.They should start with a lowercase.
2.dont use the preserved keywords.
3.avoid using spaces
4. they cannot start with a number or symbols.
5.dont use short forms eg x, y...be descriptive. */
