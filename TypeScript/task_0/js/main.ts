// We create a blueprint (interface) that describes a student
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// We create two students that follow the blueprint
const student1: Student = {
	firstName: 'Jean',
	lastName: 'Dupont',
	age: 20,
	location: 'Paris',
};

const student2: Student = {
	firstName: 'Marie',
	lastName: 'Curie',
	age: 22,
	location: 'Lyon',
};

// We put the two students into a list
const studentsList: Student[] = [student1, student2];

// We create an HTML table (like a spreadsheet on a web page)
const table = document.createElement('table');

// We create a header row (with column titles)
const headerRow = document.createElement('tr');
const header1 = document.createElement('th');
header1.textContent = 'First Name';
const header2 = document.createElement('th');
header2.textContent = 'Location';
headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

// For each student, we add a row to the table
studentsList.forEach((student) => {
	const row = document.createElement('tr');
	const cell1 = document.createElement('td');
	cell1.textContent = student.firstName;
	const cell2 = document.createElement('td');
	cell2.textContent = student.location;
	row.appendChild(cell1);
	row.appendChild(cell2);
	table.appendChild(row);
});

// We add the table to the body of the webpage
document.body.appendChild(table);

