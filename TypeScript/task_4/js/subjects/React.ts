import { Subject } from './Subject';
import { Teacher } from './Teacher';

export class React extends Subject {
	getRequirements(): string {
		return 'Here is the list of requirements for React';
	}

	getAvailableTeacher(): string {
		const teacher = this.getTeacher();
		if (!teacher || !teacher.experienceTeachingReact || teacher.experienceTeachingReact <= 0) {
			return 'No available teacher';
		}
		return `Available Teacher: ${teacher.firstName}`;
	}
}

