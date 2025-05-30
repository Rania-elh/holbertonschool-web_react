/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// 1. Interfaces DirectorInterface et TeacherInterface
// 2. Classes Director et Teacher
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
// 3. Fonction createEmployee
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    if (typeof salary === 'string') {
        var numericSalary = Number(salary.replace(/\D/g, ''));
        if (numericSalary < 500)
            return new Teacher();
        else
            return new Director();
    }
    return new Director();
}
// 4. Fonction isDirector comme prédicat de type
function isDirector(employee) {
    return employee instanceof Director;
}
// 5. Fonction executeWork
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
// 7. Fonction teachClass
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    if (todayClass === 'History') {
        return 'Teaching History';
    }
    // Optional fallback
    return '';
}
// --- Tests ---
console.log(createEmployee(200)); // Teacher instance
console.log(createEmployee(1000)); // Director instance
console.log(createEmployee('$500')); // Director instance
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QiIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAxLiBJbnRlcmZhY2VzIERpcmVjdG9ySW50ZXJmYWNlIGV0IFRlYWNoZXJJbnRlcmZhY2VcblxuaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcblx0d29ya0Zyb21Ib21lKCk6IHN0cmluZztcblx0Z2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuXHR3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcblx0d29ya0Zyb21Ib21lKCk6IHN0cmluZztcblx0Z2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuXHR3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuLy8gMi4gQ2xhc3NlcyBEaXJlY3RvciBldCBUZWFjaGVyXG5cbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuXHR3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ1dvcmtpbmcgZnJvbSBob21lJztcblx0fVxuXG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJztcblx0fVxuXG5cdHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcblx0fVxufVxuXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG5cdHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcblx0fVxuXG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcblx0fVxuXG5cdHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0dldHRpbmcgdG8gd29yayc7XG5cdH1cbn1cblxuLy8gMy4gRm9uY3Rpb24gY3JlYXRlRW1wbG95ZWVcblxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xuXHRpZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XG5cdFx0cmV0dXJuIG5ldyBUZWFjaGVyKCk7XG5cdH1cblx0aWYgKHR5cGVvZiBzYWxhcnkgPT09ICdzdHJpbmcnKSB7XG5cdFx0Y29uc3QgbnVtZXJpY1NhbGFyeSA9IE51bWJlcihzYWxhcnkucmVwbGFjZSgvXFxEL2csICcnKSk7XG5cdFx0aWYgKG51bWVyaWNTYWxhcnkgPCA1MDApIHJldHVybiBuZXcgVGVhY2hlcigpO1xuXHRcdGVsc2UgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xuXHR9XG5cdHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbn1cblxuLy8gNC4gRm9uY3Rpb24gaXNEaXJlY3RvciBjb21tZSBwcsOpZGljYXQgZGUgdHlwZVxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG5cdHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yO1xufVxuXG4vLyA1LiBGb25jdGlvbiBleGVjdXRlV29ya1xuXG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogc3RyaW5nIHtcblx0aWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSB7XG5cdFx0cmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCk7XG5cdH1cblx0cmV0dXJuIGVtcGxveWVlLndvcmtUZWFjaGVyVGFza3MoKTtcbn1cblxuLy8gNi4gU3RyaW5nIGxpdGVyYWwgdHlwZSBTdWJqZWN0c1xuXG50eXBlIFN1YmplY3RzID0gJ01hdGgnIHwgJ0hpc3RvcnknO1xuXG4vLyA3LiBGb25jdGlvbiB0ZWFjaENsYXNzXG5cbmZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcge1xuXHRpZiAodG9kYXlDbGFzcyA9PT0gJ01hdGgnKSB7XG5cdFx0cmV0dXJuICdUZWFjaGluZyBNYXRoJztcblx0fVxuXHRpZiAodG9kYXlDbGFzcyA9PT0gJ0hpc3RvcnknKSB7XG5cdFx0cmV0dXJuICdUZWFjaGluZyBIaXN0b3J5Jztcblx0fVxuXHQvLyBPcHRpb25hbCBmYWxsYmFja1xuXHRyZXR1cm4gJyc7XG59XG5cbi8vIC0tLSBUZXN0cyAtLS1cblxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSk7ICAgICAgIC8vIFRlYWNoZXIgaW5zdGFuY2VcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKTsgICAgICAvLyBEaXJlY3RvciBpbnN0YW5jZVxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKSk7ICAgIC8vIERpcmVjdG9yIGluc3RhbmNlXG5cbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpKTsgICAvLyBHZXR0aW5nIHRvIHdvcmtcbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKSk7ICAvLyBHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXG5cbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ01hdGgnKSk7ICAgICAgIC8vIFRlYWNoaW5nIE1hdGhcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ0hpc3RvcnknKSk7ICAgIC8vIFRlYWNoaW5nIEhpc3RvcnlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9