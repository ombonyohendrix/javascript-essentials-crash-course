/* oop is important programming paradigm wherein code is structured in objects,making it more easy to maintain and reuse the code. 
objects are collection of properties and methods.*/

// recap on objects.

let dog = {
	dogName: "Hendrix",
	weight: 20,
	color: "white",
	breed: "chihauhau",
};
console.log(dog.dogName);
/* classes in javascript encapsulate data/properties and functions that are part of that class.
when coming up with a class in javasript;
 1. use class keyword at the begining in lowercase.
 2. capitalize the first letter of the className.
classes are nothing but blueprint of objects. */

class ClassName {
	constructor(prop1, prop2) {
		this.prop1 = prop1;
		this.prop2 = prop2;
	}
}
// now creating objects from our class.

let obj1 = new ClassName("arg1", "arg2");

class Person {
	constructor(firstName, secondName, age, gender) {
		this.firstName = firstName;
		this.secondName = secondName;
		this.age = age;
		this.gender = gender;
	}
}

let person1 = new Person("Ombonyo", "Hendrix", 25, "Kenyan");

console.log(person1);

let person2 = new Person("Ombonyo");
// javascript is a forgiving language,if you forget to specify the remaing argurments,javascript will automatically assign undefined to them instead of throwing an error or crashing.
console.log(
	"Hi",
	person2.firstName,
	person2.secondName,
	person2.age,
	person2.gender
);

class Books {
	constructor(title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}
	print() {
		console.log(
			`The book ${this.title} was written by ${this.author} and contains ${this.pages} pages`
		);
	}
}
let book1 = new Books("Atomic Habits", "Jame Clear", 250);
book1.print();
// we use # symbol infront of our properties in class if we dont want them to be accessed outside the class.
class Cars {
	#brand;
	#color;
	#wheels;
	constructor(brand, color, wheels) {
		this.#brand = brand;
		this.#color = color;
		this.#wheels = wheels;
	}
	get brand() {
		return this.#brand;
	}
	set brand(brand) {
		this.#brand = brand;
	}
	get color() {
		return this.#color;
	}
	set color(color) {
		this.#color = color;
	}
	get wheels() {
		return this.#wheels;
	}
	set wheels(wheels) {
		this.#wheels = wheels;
	}
}
let car = new Cars("BMW", "Red", 4);

console.log(car.brand, car.color, car.wheels);
// to access these properties we use getters and setters.
// the set method takes in one parameter.=> the name of that property.
class Person12 {
	#firstname;
	#lastname;
	constructor(firstname, lastname) {
		this.#firstname = firstname;
		this.#lastname = lastname;
	}
	get firstname() {
		return this.#firstname;
	}
	set firstname(firstname) {
		if (firstname.startsWith("M")) {
			this.#firstname = firstname;
		} else {
			this.#firstname = "M" + firstname;
		}
	}
	get lastname() {
		return this.#lastname;
	}
	set lastname(lastname) {
		this.#lastname = lastname;
	}
}

let p = new Person12("Hendrix", "Ombonyo");

console.log(p.firstname, p.lastname);
// we are able to access firstname property because of get method that is defined in our class above.
console.log(p.firstname);
// we are also able to update our property lastname because of the set method in our class above.
p.lastname = "Ogutu";
console.log(p.firstname, p.lastname);
// to add logics, we do that in our setter method.
/* inheritance.
inheritance in javascript is achieved when child class inherit some of the properties from the parent/base class.
extend and super keywords are used to fully inherit properties from the base class.
 */

class Animals {
	constructor(color, legs, origin, speed) {
		this.color = color;
		this.origin = origin;
		this.legs = legs;
		this.speed = speed;
	}
	movingSpeed(speed) {
		return ` Moving at a speed of ${speed} km/hr`;
	}
}
class Cat extends Animals {
	constructor(color, legs, origin, breed, speed) {
		super(color, legs, origin, speed);
		this.breed = breed;
	}
}

let cat = new Cat("white", 4, "spaniard", "spaniard");
console.log(cat.movingSpeed(20));
/* prototypes.
Its a mechanism in javascript that makes it possible to have objects.
when you create an empty class it will inherit objects from the prototype method,swhich is a javascript built-in method.
object.prototype.
we consider it as our base object.
how to access it in javascript. => className.prototype 
prototype is a proterty holding all properties and methods of an object.*/

// how to add a function to our class using prototype.
// adding function to the prototype is adding a function to the class.

Cat.prototype.numberOfLegs = function () {
	console.log(`I have ${this.legs} legs`);
};
cat.numberOfLegs();

// how to add property to a class using prototype.
Cat.prototype.numberOfCats = 10;
console.log(cat.numberOfCats);

//protochain in javascript.
function userCreator(name, score) {
	const newUser = Object.create(functioScore);
	newUser.name = name;
	newUser.score = score;
	return newUser;
}
const functioScore = {
	icrement: function () {
		return `${this.score++}`;
	},
	login: function () {
		console.log("You're logged in");
	},
};
const user1 = userCreator("Ombonyo", 2);
const user2 = userCreator("Hendrix", 8);
console.log(user1);
console.log(user2);
console.log(user1.icrement());
console.log(user2.icrement());
