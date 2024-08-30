/* Create a class which will allow you to work out the combined price of a number of 
items, and interact with it to work out the total cost of different orders.
1. Create a class that contains the prices of two menu items as private field 
declarations.
2. Use the constructor in the class to get the argument values (how many of 
each item are being bought).
3. Create a method to calculate and return the total cost depending on how 
many of each item the user selects.
4. Use a getter property to grab the value output by the calculation method.
5. Create two or three objects with different combinations of menu selections, 
and output the total cost in the console. */
class Menu {
	#price_of_first_item = 20;
	#price_of_second_item = 30;

	constructor(val1, val2) {
		this.val1 = val1;
		this.val2 = val2;
	}
	totalCost() {
		return (
			this.val1 * this.#price_of_first_item +
			this.val2 * this.#price_of_second_item
		);
	}
	get total() {
		return this.totalCost();
	}
}
let buyer1 = new Menu(3, 2);
console.log(buyer1.total);
let buyer2 = new Menu(0, 5);
console.log(buyer2.total);
let buyer3 = new Menu(1, 10);
console.log(buyer3.total);
