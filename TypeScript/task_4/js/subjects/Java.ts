import { Subject } from './Subject';
import { Teacher } from './Teacher';

export class Java extends Subject {
	getRequirements(): string {
		return 'Here is the list of requirements for Java';
	}

	getAvailableTeacher(): string {
		const teacher = this.getTeacher();
		if (!teacher || !teacher.experienceTeachingJava || teacher.experienceTeachingJava <= 0) {
			return 'No available teacher';
		}
		return `Available Teacher: ${teacher.firstName}`;
	}
}

