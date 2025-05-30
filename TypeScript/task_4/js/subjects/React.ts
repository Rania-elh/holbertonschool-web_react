import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

export class React {
	// tu peux hériter aussi de Subject si tu veux : 
	// export class React extends Subject

	private _teacher!: Teacher;

	setTeacher(teacher: Teacher) {
		this._teacher = teacher;
	}

	get teacher(): Teacher {
		return this._teacher;
	}

	getRequirements(): string {
		return 'Here is the list of requirements for React';
	}

	getAvailableTeacher(): string {
		if (!this.teacher || !this.teacher.experienceTeachingReact || this.teacher.experienceTeachingReact <= 0) {
			return 'No available teacher';
		}
		return `Available Teacher: ${this.teacher.firstName}`;
	}
}

