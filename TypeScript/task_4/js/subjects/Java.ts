namespace Subjects {
	// Extend Teacher interface with Java experience
	export interface Teacher {
		experienceTeachingJava?: number;
	}

	export class Java extends Subject {
		public getRequirements(): string {
			return 'Here is the list of requirements for Java';
		}

		public getAvailableTeacher(): string {
			const teacher = this.getTeacher();
			if (teacher && teacher.experienceTeachingJava && teacher.experienceTeachingJava > 0) {
				return `Available Teacher: ${teacher.firstName}`;
			} else {
				return 'No available teacher';
			}
		}
	}
}

