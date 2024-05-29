/* In this exercise we will be generating a table of values. We will be using loops to 
generate rows and also columns, which will be nested within the rows. Nested arrays 
can be used to represent rows in a table. This is a common structure in spreadsheets, 
where each row is a nested array within a table and the contents of these rows are 
the cells in the table. The columns will align as we are creating an equal number of 
cells in each row.
1. To create a table generator, first create an empty array, myTable, to hold your 
table data.
2. Set variable values for the number of rows and columns. This will allow us 
to dynamically control how many rows and columns we want within the 
table. Separating the values from the main code helps make updates to the 
dimensions easier.
3. Set up a counter variable with an initial value of 0. The counter will be used 
to set the content and count the values of the cells within the table.
4. Create a for loop with conditions to set the number of iterations, and to 
construct each row of the table. Within it, set up a new temporary array 
(tempTable) to hold each row of data. The columns will be nested within 
the rows, generating each cell needed for the column. 
5. Nest a second loop within the first to count the columns. Columns are run 
within the row loop so that we have a uniform number of columns within 
the table.
6. Increment the main counter each iteration of the inner loop, so that we track 
a master count of each one of the cells and how many cells are created.
7. Push the counter values to the temporary array, tempTable. Since the array is 
a nested array representing a table, the values of the counter can also be used 
to illustrate the cell values next to each other in the table. Although these are 
separate arrays representing new rows, the value of the counter will help 
illustrate the overall sequence of cells in the final table.
8. Push the temporary array to the main table. As each iteration builds a new 
row of array items, this will continue to build the main table in the array. 
9. Output into the console with console.table(myTable). This will show you a 
visual representation of the table structure. */
let myTable = [];
let myRows = 5;
let myColumns = 10;
let counter = 0;
for (i = 0; i < myRows; i++) {
	let tempTable = [];
	for (k = 0; k < myColumns; k++) {
		counter++;
		tempTable.push(counter);
	}
	myTable.push(tempTable);
}
console.table(myTable);
