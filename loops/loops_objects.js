/* we can also loop through object properties using loops.
looping through objects can be done in a few ways.
using for in loop
convert the object into array the loop over the array. */

// for in loop.=> it just work as for of loop.
let car1 = {
	model: "Golf",
	make: "Volkswagen",
	year: 1999,
	color: "black",
};

for (let prop in car1) {
	console.log(car1[prop]);
}
//looping over objects by converting to array.
// this can be achieved by using the built-in function objects.keys()

let person = {
	firstName: "Hendrix",
	lastName: "Ombonyo",
	yearOfBirth: 1998,
	Gender: "Male",
	nationality: "Kenyan",
};
//console.log(typeof person);
//lets get keys of our object by converting them to array.

let arrKeys = Object.keys(person);
console.log(arrKeys);
//console.log(typeof arrKeys);
// lets loop through our newly formed array.

for (let arr in arrKeys) {
	console.log(arrKeys[arr]);
}

//lets loop through the values
let arrValues = Object.values(person);
console.log(arrValues);
//now lets loop through the values of our newly formed array.

for (let newValue of arrValues) {
	console.log(newValue);
}
// lets use the length property to loop through the arry.

for (let i = 0; i < arrKeys.length; i++) {
	console.log(arrKeys[i] + " : " + person[arrKeys[i]]);
}

// to loop over both arrays at the same time we will use the Object.entries() built-in function.
// usually returns two-dimensional array, containing key-value pair.
let arrEntries = Object.entries(person);
console.log(arrEntries);
//looping over the two dimension array.

for (const [Key, Value] of arrEntries) {
	console.log(Key, " : ", Value);
}

// break and continue.
//break and continue are used to control the flow of execution while looping.
//break => used same as that of switch statement.

for (let i = 0; i <= 10; i++) {
	if (i === 5) {
		break;
	}
	console.log(i);
}

let cars = [
	{
		model: "Golf",
		make: "Volkswagen",
		year: 1999,
		color: "black",
	},
	{
		model: "Picanto",
		make: "Kia",
		year: 2020,
		color: "red",
	},
	{
		model: "Peugeot",
		make: "208",
		year: 2021,
		color: "black",
	},
	{
		model: "Fiat",
		make: "Punto",
		year: 2020,
		color: "black",
	},
];
for (let i = 0; i < cars.length; i++) {
	if (cars[i].year >= 2000) {
		if (cars[i].color === "black") {
			console.log("I have found the car.", cars[i]);
			break;
		}
	}
}

// continue.
// it is the opposite of break. It will move to the next iteration of the loop.

for (let car of cars) {
	if (car.color !== "black") {
		continue;
	}
	if (car.year >= 2020) {
		console.log("I love this car.", car);
	}
}
// break, continue and nested loops.
// when break and continue is used in a nested loop, the outer loop will not break.

// lets try finding names that starts with "M"
let groupOfNames = [
	["Martin", "Daniel", "Keith"],
	["Margot", "Marina", "Ali"],
	["Helen", "Jonah", "Sambikos"],
];
let matches = 0;
for (i = 0; i < groupOfNames.length; i++) {
	//console.log(groupOfNames);

	for (j = 0; j < groupOfNames[i].length; j++) {
		if (groupOfNames[i][j].startsWith("M")) {
			matches++;
		} else {
			continue;
		}
		if (matches === 2) {
			console.log("Found a group with two names starting with an M:");
			console.log(groupOfNames[i]);
			break;
		}
	}
}
//console.log(matches);
// if we are not interested with the matches the code below is the right way of going about it.
for (let group of groupOfNames) {
	for (let member of group) {
		if (member.startsWith("M")) {
			//console.log("found one starting with M:", member);

			break;
		}
	}
}
// break and continue and labeled blocks.
//we can break out of the outer loop from the inside loop only if we give a label to our loop.
outer: for (let group of groupOfNames) {
	inner: for (let member of group) {
		if (member.startsWith("M")) {
			console.log("found one starting with M:", member);
			break outer;
		}
	}
}
