/* 1. Create an array to hold an inventory of store items.
2. Create three items, each having the properties of name, model, cost, and 
quantity.
3. Add all three objects to the main array using an array method, and then log 
the inventory array to the console.
4. Access the quantity element of your third item, and log it to the console. 
Experiment by adding and accessing more elements within your data 
structure. */

let myInventory = [];
let myfirstItem = {
	name: "Tesla",
	model: "model-s",
	cost: "200 us-dollars",
	quantity: 1,
};
let mySecondItem = {
	name: "Bugatti",
	model: "model-y",
	cost: "300 us-dollars",
	quantity: 2,
};

let myThirdItem = {
	name: "Lambogini",
	model: "model-x",
	cost: "1000 us-dollars",
	quantity: 4,
};

myInventory.push(myfirstItem, mySecondItem, myThirdItem);
//console.log(myInventory);
//modifying the inventory
myInventory.pop();
console.log(myInventory);
