/* This exercise will construct an array as it loops through the incrementing values of 
x. Once the array is done, this exercise also will demonstrate several ways to output 
array contents. 
1. Create an empty array
2. Run a loop 10 times, adding a new incrementing value to the array
3. Log the array into the console
4. Use the for loop to iterate through the array (adjust the number of iterations 
to however many values are in your array) and output into the console
5. Use the for of loop to output the value into the console from the array */
let emptyArray = [];
for (i = 1; i <= 10; i++) {
	emptyArray.push(i);
}
//console.log(emptyArray);
for (i = 0; i < emptyArray.length; i++) {
	//console.log(emptyArray[i]);
}
for (let arr of emptyArray) {
	console.log("Number :  ", arr);
}
