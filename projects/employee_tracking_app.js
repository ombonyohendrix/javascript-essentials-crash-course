/* Create a class to track the employees of a company:
1. Use first names, last names, and the number of years worked as values in the 
constructor.
2. Create two or more people with values for their first names, last names, and 
the number of years they've worked at the company. Add the people into an 
array.
3. Set up a prototype to return the details of the person's first and last names 
and how long they've worked at the company.
4. Iterate the contents of the array to output the results into the console, adding 
some text to make the output a full sentence */
class Employees {
	constructor(firstname, lastname, years) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.years = years;
	}
}
let employee1 = new Employees("Ombonyo", "Hendrix", 1);
let employee2 = new Employees("Ogutu", "Berly", 2);
console.log(employee1, employee2);
console.log(employee1.firstname, employee2.firstname);

let workers = [employee1, employee2];
console.log(workers);
//using prototype to add function to our class.

Employees.prototype.DetailsOfEmployee = function () {
	return `${this.firstname} ${this.lastname} has worked with us for ${this.years} years.`;
};

console.log(employee1.DetailsOfEmployee());
console.log(employee2.DetailsOfEmployee());

// iterating through our arry using foreach method.
workers.forEach((person) => {
	console.log(person.DetailsOfEmployee());
});
