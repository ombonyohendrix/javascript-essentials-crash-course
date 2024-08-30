/* how to write clean code in javascript using es6 syntax. */
// template literals.
function yell(name) {
	return `Come here ${name.toUpperCase()}`;
}
console.log(yell("hendrix"));

// arrays.

const names = ["Hendrix", "Ombonyo", "Sing", "Developer"];

function alphabetizeNames() {
	return [...names].sort();
}
console.log(alphabetizeNames());

let staff = [
	{ name: " Hendrix", position: "Developer" },
	{ name: "Ogutu", position: "Auditor" },
];
function getAuditor(staff) {
	//return staff.filter((member) => member.position === "Auditor");
}

console.log(getAuditor());
const getPosition = staff.filter((val) => val.position === "Auditor");

console.log(getPosition);

let stringNames = staff.toString();
console.log(stringNames);

const game1 = {
	player: "Jim Jonas",
	hits: 2,
	runs: 1,
	errors: 0,
};
const game2 = {
	player: "Jim Jonas",
	hits: 3,
	runs: 0,
	errors: 1,
};
const total = {};
const stats = Object.keys(game1);
//console.log(stats);

for (let i = 0; i < stats.length; i++) {
	const stat = stats[i];
	//console.log(stat);
	if (stat !== "player") {
		total[stat] = game1[stat] + game2[stat];
	}
}
console.log(total);

const sections = ["contact", "shipping"];

function displayShipping(sections) {
	return sections.indexOf("shipping") > -1;
}
console.log(displayShipping());
