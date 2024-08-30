/* Create a class that contains properties for different animal species and the sound that 
each species makes, and create two (or more) animals:
1. Create a method that prints a given animal and its sound. 
2. Add a prototype with another action for the animal.
3. Output an entire animal object into the console. */

class Animal {
	constructor(spicies, sound) {
		this.spicies = spicies;
		this.sound = sound;
	}
	soundMadeBySpicies() {
		console.log(`${this.spicies}  ${this.sound}`);
	}
}

let animal1 = new Animal("dog", "barks");
animal1.soundMadeBySpicies();
let animal2 = new Animal("snake", "hiss");
animal2.soundMadeBySpicies();
console.log(animal1);
// using prototype to add methods and proterties to our class.

Animal.prototype.color = "black";
console.log(animal1.color);
Animal.prototype.eat = function () {
	return `${this.spicies} is eating`;
};
console.log(animal1.eat());
console.log(animal2.eat());
