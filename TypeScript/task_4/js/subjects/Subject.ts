import { Teacher } from './Teacher';

export class Subject {
	protected teacher!: Teacher;

	setTeacher(teacher: Teacher): void {
		this.teacher = teacher;
	}

	getTeacher(): Teacher {
		return this.teacher;
	}
}

