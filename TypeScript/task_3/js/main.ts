/// <reference path="./js/crud.d.ts" />

// Import types from interface.ts
import { RowID, RowElement } from './js/interface';

// Import everything from crud.js as CRUD
import * as CRUD from './js/crud.js';

// Create an object 'row' with type RowElement
const row: RowElement = {
	firstName: "Guillaume",
	lastName: "Salva",
};

// Insert the row and get a new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with the 'age' field added
const updatedRow: RowElement = {
	...row,
	age: 23,
};

// Update the row in the database
CRUD.updateRow(newRowID, updatedRow);

// Delete the row by its ID
CRUD.deleteRow(newRowID);

