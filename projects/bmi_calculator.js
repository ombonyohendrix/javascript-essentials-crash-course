/* 1 inch = 2.54cms
   2.2046 pounds = 1 kilo 
   100cm = 1m*/

let height = 10;
let weight = 60;

let myHeight = 2.54 * 10;
let myWeight = 60 / 2.2046;

console.log(myHeight, myWeight);

let bmi = myWeight / ((myHeight * myHeight) / 100);

console.log(bmi);
