// 1. Interfaces DirectorInterface et TeacherInterface

interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

// 2. Classes Director et Teacher

class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}

	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}

	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}

	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}

	workTeacherTasks(): string {
		return 'Getting to work';
	}
}

// 3. Fonction createEmployee

function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	}
	if (typeof salary === 'string') {
		const numericSalary = Number(salary.replace(/\D/g, ''));
		if (numericSalary < 500) return new Teacher();
		else return new Director();
	}
	return new Director();
}

// 4. Fonction isDirector comme prédicat de type

function isDirector(employee: Director | Teacher): employee is Director {
	return employee instanceof Director;
}

// 5. Fonction executeWork

function executeWork(employee: Director | Teacher): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	}
	return employee.workTeacherTasks();
}

// 6. String literal type Subjects

type Subjects = 'Math' | 'History';

// 7. Fonction teachClass

function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
		return 'Teaching Math';
	}
	if (todayClass === 'History') {
		return 'Teaching History';
	}
	// Optional fallback
	return '';
}

// --- Tests ---

console.log(createEmployee(200));       // Teacher instance
console.log(createEmployee(1000));      // Director instance
console.log(createEmployee('$500'));    // Director instance

console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks

console.log(teachClass('Math'));       // Teaching Math
console.log(teachClass('History'));    // Teaching History

