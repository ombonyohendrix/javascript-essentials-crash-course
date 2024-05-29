/* a starnded multiplication table of 1 to 12 */

const numberOfRows = 12;
const numberOfColumns = 12;
const myTable = [];
for (let i = 0; i <= numberOfRows; i++) {
	// where we will push our values after the multiplication of x*y
	const tempArr = [];
	for (let y = 0; y <= numberOfColumns; y++) {
		tempArr.push(i * y);
	}
	myTable.push(tempArr);
}
console.table(myTable);
