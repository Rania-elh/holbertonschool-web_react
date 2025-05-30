import { Subjects } from "./subjects/Teacher";
import { Cpp } from "./subjects/Cpp";
import { React } from "./subjects/React";
import { Java } from "./subjects/Java";

// Création de quelques enseignants
const cppTeacher: Subjects.Teacher = {
	firstName: "John",
	lastName: "Doe",
	experienceTeachingC: 5,
};

const reactTeacher: Subjects.Teacher = {
	firstName: "Jane",
	lastName: "Smith",
	experienceTeachingReact: 0,
};

const javaTeacher: Subjects.Teacher = {
	firstName: "Mary",
	lastName: "Johnson",
	experienceTeachingJava: 3,
};

// Création des instances de classes
const cppCourse = new Cpp();
cppCourse.teacher = cppTeacher;

const reactCourse = new React();
reactCourse.teacher = reactTeacher;

const javaCourse = new Java();
javaCourse.teacher = javaTeacher;

// Tests
console.log(cppCourse.getRequirements()); // Here is the list of requirements for Cpp
console.log(cppCourse.getAvailableTeacher()); // Available Teacher: John

console.log(reactCourse.getRequirements()); // Here is the list of requirements for React
console.log(reactCourse.getAvailableTeacher()); // No available teacher

console.log(javaCourse.getRequirements()); // Here is the list of requirements for Java
console.log(javaCourse.getAvailableTeacher()); // Available Teacher: Mary

