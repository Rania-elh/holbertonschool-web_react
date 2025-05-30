namespace Subjects {
	export class Subject {
		// teacher implements Teacher interface
		private _teacher?: Teacher;

		// Setter to set teacher attribute
		public setTeacher(teacher: Teacher) {
			this._teacher = teacher;
		}

		// Optional getter to access teacher if needed
		public getTeacher(): Teacher | undefined {
			return this._teacher;
		}
	}
}

