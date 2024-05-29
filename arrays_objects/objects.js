/* objects are one of the most useful data structures in javascript
They are used to represent real world entities 
arrays are objects with named indexed while objects are with named properties.
This means instead of using automatically generated numbers , we will use a custom descriptive name
*/
//the reason to why arrays are special objects.

let arr = ["Hendrix", "Ombonyo", "Sing"];

console.log(typeof arr);
// an object is a chance to group mutiple variables together.
let person = {
	name: "Hendrix",
	age: 25,
	nationality: "Kenyan",
	gender: "Male",
};
console.log(typeof person);
// accesing object properties can be done in two way using [] or Dot notation.
//using . notation
console.log(person.name);
console.log(person.nationality);

//using []
console.log(person["age"]);
console.log(person["gender"]);

//updating objects.
person.name = "Ombonyo";
person["nationality"] = "American";

console.log(person);

//objects in objects
//we can also refer to them as nested objects.

let myCompany = {
	companyName: "Web Technologies",
	activities: "Web Development",
	address: {
		street: "first Avenue",
		number: 26,
		zipecode: "24fw",
		city: "Nairobi",
		state: "Nairobi",
	},
	numberOfWorkers: 1000,
	startDate: 1990,
};
//accesing the values of the nested object.
//console.log(myCompany.activities);
//console.log(myCompany.address.state);
//console.log(myCompany["address"]["city"]);

// changing values of the object
myCompany.companyName = "Motors";
myCompany.activities = "Car manufacturing";
myCompany["numberOfWorkers"] = 2000;
myCompany["address"]["state"] = "Florida";
console.log(myCompany);

// arrays in objects
let sports = {
	categories: ["Football", "Table tennis", "Rugby"],
	startOfTornaments: 20,
	numberOfCompetitors: 2000,
	rewards: {
		male: "medals",
		female: "silver",
	},
};
//accesing values.
let value1 = sports.categories[2];
console.log(value1);
let value2 = sports["rewards"]["female"];
console.log(value2);
sports.rewards.female = "Gold";
console.log(sports);

//objects in arrays

let names = [
	{
		firstName: "Hendrix",
		lastName: "Ombonyo",
	},
	{
		firstName: "Sing",
		lastName: "Lihanda",
	},
];
// accessing the properties
let getFirstName = names[0].firstName;
let getLastName = names[1].lastName;
console.log(getFirstName);
console.log(getLastName);

//objects in arrays in objects

let company = {
	companyName: "Healthy Candy",
	activities: [
		"Food Manufacturing",
		"Improving kids Health",
		"Manufacturing Toys",
	],
	address: [
		{
			street: "2nd street",
			number: 123,
			zipecode: 64738,
			city: "Miami",
			state: "Florida",
		},

		{
			street: "2nd west avenue",
			number: 123,
			zipecode: 64738,
			city: "Miami",
			state: "Texas",
		},
	],
	yearOfEstablishiment: 1890,
};

//accessing values
let getActivities = company.activities[1];
console.log(getActivities);

let getState = company.address[0].state;
console.log(getState);

//updating our object
company.address[0].city = "Califonia";
console.log(company);
