// Define RowID as a number type
export type RowID = number;

// Define RowElement interface with firstName, lastName (required) and optional age
export interface RowElement {
	firstName: string;
	lastName: string;
	age?: number;
}

