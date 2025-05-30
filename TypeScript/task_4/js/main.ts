import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";
import { Teacher } from "./subjects/Teacher";

// Définition du prof
const cppTeacher: Teacher = {
	firstName: "John",
	lastName: "Doe",
	experienceTeachingC: 10
};

const javaTeacher: Teacher = {
	firstName: "Alice",
	lastName: "Smith",
	experienceTeachingJava: 5
};

const reactTeacher: Teacher = {
	firstName: "Bob",
	lastName: "Brown",
	experienceTeachingReact: 2
};

// Création des instances
const cppCourse = new Cpp();
cppCourse.setTeacher(cppTeacher);

const javaCourse = new Java();
javaCourse.setTeacher(javaTeacher);

const reactCourse = new React();
reactCourse.setTeacher(reactTeacher);

// Tests
console.log("Cpp:", cppCourse.getRequirements());
console.log("Cpp:", cppCourse.getAvailableTeacher());

console.log("Java:", javaCourse.getRequirements());
console.log("Java:", javaCourse.getAvailableTeacher());

console.log("React:", reactCourse.getRequirements());
console.log("React:", reactCourse.getAvailableTeacher());

