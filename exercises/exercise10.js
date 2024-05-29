/* Explore how to create a table grid that contains nested arrays as rows within a table. 
The rows will each contain the number of cells needed for the number of columns set 
in the variables. This grid table will dynamically adjust depending on the values for 
the variables.
1. Create a grid array variable.
2. Set a value of 64 for the number of cells.
3. Set a counter to 0.
4. Create a global variable to be used for the row array.
5. Create a loop that will iterate up to the number of cells you want in the array, 
plus one to include the zero value. In our example, we would use 64+1.
6. Add an outer if statement, which uses modulo to check if the main counter 
is divisible by 8 or whatever number of columns you want.
7. Inside the preceding if statement, add another if statement to check if the 
row is undefined, indicating whether it is the first run or whether the row 
is complete. If the row has been defined, then add the row to the main grid 
array.
8. To finish off the outer if statement, if the counter is divisible by 8, clear the 
row array—it has already been added to the grid by the inner if statement.
9. At the end of the for loop, increment of the main counter by 1.
10. Set up a temporary variable to hold the value of the counter and push it to 
the row array.
11. Within the loop iteration, check if the value of the counter is equal to the total 
number of columns you want; if it is, then add the current row to the grid.
12. Please note that the extra cell will not be added to the grid since there aren't 
enough cells to make a new row within the condition that adds the rows to 
the grid. An alternative solution would be to remove the +1 from the loop 
condition and add grid.push(row) after the loop is completed, both of which 
will provide the same solution output.
13. Output the grid into the console*/
let grid = [];
let numberOfCells = 80;
let counter = 0;
let row;
for (i = 0; i < numberOfCells + 1; i++) {
	if (counter % 8 === 0) {
		if (row != undefined) {
			grid.push(row);
		}
		row = [];
	}
	counter++;
	let temporary = counter;
	row.push(temporary);
}
console.table(grid);
