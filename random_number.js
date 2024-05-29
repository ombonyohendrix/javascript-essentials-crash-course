/* we use math.random() to generate a number from 0 to less than 1
you can scale it to desired range by multiplying the result with your range
if you want to get a whole number we use math.floor() to round it down to the nearest whole number

lets generate a number between 1-9*/
let randomNumber = Math.random();
//console.log(randomNumber);
randomNumber = randomNumber * 10;
//console.log(randomNumber);
randomNumber = Math.floor(randomNumber);
//console.log(randomNumber);
for (let i = 0; i <= randomNumber; i++) {
	console.log("Random number between 0 to 9 is : ", i);
}
