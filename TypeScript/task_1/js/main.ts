// 1. Interface Teacher
interface Teacher {
	readonly firstName: string;              // can only be set at initialization
	readonly lastName: string;               // can only be set at initialization
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;                      // allow any additional property with any type
}

// 2. Interface Directors extending Teacher
interface Directors extends Teacher {
	numberOfReports: number;
}

// 3. Function printTeacher and its interface
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
};

// 4. Interface for StudentClass constructor and class itself
interface StudentClassInterface {
	firstName: string;
	lastName: string;
}

interface StudentClassInterfaceMethods {
	workOnHomework(): string;
	displayName(): string;
}

// 5. StudentClass implementation
class StudentClass implements StudentClassInterfaceMethods {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}

// --- Examples ---

const teacher3: Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	fullTimeEmployee: false,
	location: 'London',
	contract: false,
};

console.log(teacher3);

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	fullTimeEmployee: true,
	location: 'London',
	numberOfReports: 17,
};

console.log(director1);

console.log(printTeacher("John", "Doe")); // Output: "J. Doe"

const student = new StudentClass("Jane", "Smith");
console.log(student.workOnHomework());   // Output: "Currently working"
console.log(student.displayName());      // Output: "Jane"

