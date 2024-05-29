/*  Take the following array: 
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];
Manipulate your array using various methods, such as pop(), push(), shift(), and 
unshift(), and transform it into the following:
["FIRST", "Svekis","MIDDLE", "hello Word", "LAST"]*/
// remember while using const key word you can change the array but you can modify the values.

const theList = [
	"Laurence",
	"Svekis",
	true,
	35,
	null,
	undefined,
	{ test: "one", score: 55 },
	["one", "two"],
];
theList.splice(2, 6);
//console.log(theList);
theList.unshift("LAST");
//console.log(theList);
theList.push("FIRST");
//console.log(theList);
theList.reverse();
//console.log(theList);
theList.splice(2, 0, "MIDDLE", "hello Word");
console.log(theList);
/* second approach
• Remove the first item and the last item.
• Add FIRST to the start of the array.
• Assign hello World to the fourth item value.
• Assign MIDDLE to the third index value.
• Add LAST to the last position in the array.
• Output it to the console. */
