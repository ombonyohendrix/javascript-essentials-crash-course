/* 1. Create an empty array to use as a shopping list.
2. Add Milk, Bread, and Apples to your list.
3. Update "Bread" with Bananas and Eggs.
4. Remove the last item from the array and output it into the console.
5. Sort the list alphabetically.
6. Find and output the index value of Milk.
7. After Bananas, add Carrots and Lettuce.
8. Create a new list containing Juice and Pop.
9. Combine both lists, adding the new list twice to the end of the first list.
10. Get the last index value of Pop and output it to the console. */

let myShopping = [];
myShopping.push("Milk", "Bread", "Apples");
console.log(myShopping);
myShopping.splice(1, 1, "Bananas", "Eggs");

console.log(myShopping);
myShopping.pop();
console.log(myShopping);
myShopping.sort();
console.log(myShopping);
let indexOfMilk = myShopping.indexOf("Milk");
console.log(indexOfMilk);
myShopping.splice(1, 0, "Carrots", "Lettuce");
console.log(myShopping);
let myNewList = ["Juice", "Pop"];

let combineList = myShopping.concat(myNewList);
console.log(combineList);
let indexOfPop = combineList.indexOf("Pop");
console.log(indexOfPop);
