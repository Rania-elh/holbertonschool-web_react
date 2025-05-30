namespace Subjects {
	// Extend Teacher interface with React experience
	export interface Teacher {
		experienceTeachingReact?: number;
	}

	export class React extends Subject {
		public getRequirements(): string {
			return 'Here is the list of requirements for React';
		}

		public getAvailableTeacher(): string {
			const teacher = this.getTeacher();
			if (teacher && teacher.experienceTeachingReact && teacher.experienceTeachingReact > 0) {
				return `Available Teacher: ${teacher.firstName}`;
			} else {
				return 'No available teacher';
			}
		}
	}
}

