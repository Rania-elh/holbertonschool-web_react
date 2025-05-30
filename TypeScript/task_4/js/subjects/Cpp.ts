namespace Subjects {
	// Using declaration merging to add an optional property to Teacher
	export interface Teacher {
		experienceTeachingC?: number;
	}

	export class Cpp extends Subject {
		// Returns the requirements string
		public getRequirements(): string {
			return 'Here is the list of requirements for Cpp';
		}

		// Returns a string depending on teacher's C teaching experience
		public getAvailableTeacher(): string {
			const teacher = this.getTeacher();
			if (teacher && teacher.experienceTeachingC && teacher.experienceTeachingC > 0) {
				return `Available Teacher: ${teacher.firstName}`;
			} else {
				return 'No available teacher';
			}
		}
	}
}

