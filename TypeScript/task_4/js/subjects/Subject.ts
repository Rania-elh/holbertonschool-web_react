import { Teacher } from "./Teacher";

export class Subject {
	private _teacher!: Teacher;

	setTeacher(teacher: Teacher) {
		this._teacher = teacher;
	}

	get teacher(): Teacher {
		return this._teacher;
	}
}

