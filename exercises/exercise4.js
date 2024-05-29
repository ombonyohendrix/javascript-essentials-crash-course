/* 1. Create an object named people that contains an empty array that is called 
friends.
2. Create three variables, each containing an object, that contain one of your 
friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console. */

let people = {
	friends: [],
};
let friend1 = {
	firstName: "John",
	lastName: "Kimani",
	id: 3782677,
};
let friend2 = {
	firstName: "Mike",
	lastName: "Kamau",
	id: 8665777,
};
let friend3 = {
	firstName: "Hendrix",
	lastName: "Ombonyo",
	id: 375648968,
};
//adding the three friends to the friend array using push() method
people.friends.push(friend1, friend2, friend3);
console.log(people);
console.log(
	"My name is " +
		people.friends[0].firstName +
		" " +
		people.friends[0].lastName +
		" " +
		"and my id is" +
		people.friends[0].id
);
console.log(
	"My name is " +
		people.friends[1].firstName +
		" " +
		people.friends[1].lastName +
		" " +
		" and my id is" +
		"  " +
		people.friends[1].id
);
console.log(
	"My name is " +
		people.friends[2].firstName +
		" " +
		people.friends[2].lastName +
		" " +
		"and my id is" +
		" " +
		people.friends[2].id
);
console.log(typeof people);
