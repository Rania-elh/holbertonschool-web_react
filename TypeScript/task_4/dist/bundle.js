/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/subjects/Cpp.ts":
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cpp: () => (/* binding */ Cpp)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Cpp = /** @class */ (function (_super) {
    __extends(Cpp, _super);
    function Cpp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cpp.prototype.getRequirements = function () {
        return "Here is the list of requirements for Cpp";
    };
    Cpp.prototype.getAvailableTeacher = function () {
        if (!this.teacher || !this.teacher.experienceTeachingC || this.teacher.experienceTeachingC <= 0) {
            return "No available teacher";
        }
        return "Available Teacher: ".concat(this.teacher.firstName);
    };
    return Cpp;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject));



/***/ }),

/***/ "./js/subjects/Java.ts":
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Java: () => (/* binding */ Java)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Java = /** @class */ (function (_super) {
    __extends(Java, _super);
    function Java() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Java.prototype.getRequirements = function () {
        return 'Here is the list of requirements for Java';
    };
    Java.prototype.getAvailableTeacher = function () {
        var teacher = this.getTeacher();
        if (!teacher || !teacher.experienceTeachingJava || teacher.experienceTeachingJava <= 0) {
            return 'No available teacher';
        }
        return "Available Teacher: ".concat(teacher.firstName);
    };
    return Java;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject));



/***/ }),

/***/ "./js/subjects/React.ts":
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   React: () => (/* binding */ React)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var React = /** @class */ (function (_super) {
    __extends(React, _super);
    function React() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    React.prototype.getRequirements = function () {
        return 'Here is the list of requirements for React';
    };
    React.prototype.getAvailableTeacher = function () {
        var teacher = this.getTeacher();
        if (!teacher || !teacher.experienceTeachingReact || teacher.experienceTeachingReact <= 0) {
            return 'No available teacher';
        }
        return "Available Teacher: ".concat(teacher.firstName);
    };
    return React;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject));



/***/ }),

/***/ "./js/subjects/Subject.ts":
/*!********************************!*\
  !*** ./js/subjects/Subject.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
var Subject = /** @class */ (function () {
    function Subject() {
    }
    Subject.prototype.setTeacher = function (teacher) {
        this.teacher = teacher;
    };
    Subject.prototype.getTeacher = function () {
        return this.teacher;
    };
    return Subject;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Cpp */ "./js/subjects/Cpp.ts");
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Java */ "./js/subjects/Java.ts");
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/React */ "./js/subjects/React.ts");



// Définition du prof
var cppTeacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
};
var javaTeacher = {
    firstName: "Alice",
    lastName: "Smith",
    experienceTeachingJava: 5
};
var reactTeacher = {
    firstName: "Bob",
    lastName: "Brown",
    experienceTeachingReact: 2
};
// Création des instances
var cppCourse = new _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__.Cpp();
cppCourse.setTeacher(cppTeacher);
var javaCourse = new _subjects_Java__WEBPACK_IMPORTED_MODULE_1__.Java();
javaCourse.setTeacher(javaTeacher);
var reactCourse = new _subjects_React__WEBPACK_IMPORTED_MODULE_2__.React();
reactCourse.setTeacher(reactTeacher);
// Tests
console.log("Cpp:", cppCourse.getRequirements());
console.log("Cpp:", cppCourse.getAvailableTeacher());
console.log("Java:", javaCourse.getRequirements());
console.log("Java:", javaCourse.getAvailableTeacher());
console.log("React:", reactCourse.getRequirements());
console.log("React:", reactCourse.getAvailableTeacher());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BwLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvSmF2YS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL1JlYWN0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvU3ViamVjdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcIi4vU3ViamVjdFwiO1xuaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gXCIuL1RlYWNoZXJcIjtcblxuZXhwb3J0IGNsYXNzIENwcCBleHRlbmRzIFN1YmplY3Qge1xuXHRnZXRSZXF1aXJlbWVudHMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gXCJIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgQ3BwXCI7XG5cdH1cblxuXHRnZXRBdmFpbGFibGVUZWFjaGVyKCk6IHN0cmluZyB7XG5cdFx0aWYgKCF0aGlzLnRlYWNoZXIgfHwgIXRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdDIHx8IHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdDIDw9IDApIHtcblx0XHRcdHJldHVybiBcIk5vIGF2YWlsYWJsZSB0ZWFjaGVyXCI7XG5cdFx0fVxuXHRcdHJldHVybiBgQXZhaWxhYmxlIFRlYWNoZXI6ICR7dGhpcy50ZWFjaGVyLmZpcnN0TmFtZX1gO1xuXHR9XG59XG5cbiIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gJy4vVGVhY2hlcic7XG5cbmV4cG9ydCBjbGFzcyBKYXZhIGV4dGVuZHMgU3ViamVjdCB7XG5cdGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnSGVyZSBpcyB0aGUgbGlzdCBvZiByZXF1aXJlbWVudHMgZm9yIEphdmEnO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuXHRcdGNvbnN0IHRlYWNoZXIgPSB0aGlzLmdldFRlYWNoZXIoKTtcblx0XHRpZiAoIXRlYWNoZXIgfHwgIXRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nSmF2YSB8fCB0ZWFjaGVyLmV4cGVyaWVuY2VUZWFjaGluZ0phdmEgPD0gMCkge1xuXHRcdFx0cmV0dXJuICdObyBhdmFpbGFibGUgdGVhY2hlcic7XG5cdFx0fVxuXHRcdHJldHVybiBgQXZhaWxhYmxlIFRlYWNoZXI6ICR7dGVhY2hlci5maXJzdE5hbWV9YDtcblx0fVxufVxuXG4iLCJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAnLi9TdWJqZWN0JztcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tICcuL1RlYWNoZXInO1xuXG5leHBvcnQgY2xhc3MgUmVhY3QgZXh0ZW5kcyBTdWJqZWN0IHtcblx0Z2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgUmVhY3QnO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuXHRcdGNvbnN0IHRlYWNoZXIgPSB0aGlzLmdldFRlYWNoZXIoKTtcblx0XHRpZiAoIXRlYWNoZXIgfHwgIXRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nUmVhY3QgfHwgdGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdSZWFjdCA8PSAwKSB7XG5cdFx0XHRyZXR1cm4gJ05vIGF2YWlsYWJsZSB0ZWFjaGVyJztcblx0XHR9XG5cdFx0cmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0ZWFjaGVyLmZpcnN0TmFtZX1gO1xuXHR9XG59XG5cbiIsImltcG9ydCB7IFRlYWNoZXIgfSBmcm9tICcuL1RlYWNoZXInO1xuXG5leHBvcnQgY2xhc3MgU3ViamVjdCB7XG5cdHByb3RlY3RlZCB0ZWFjaGVyITogVGVhY2hlcjtcblxuXHRzZXRUZWFjaGVyKHRlYWNoZXI6IFRlYWNoZXIpOiB2b2lkIHtcblx0XHR0aGlzLnRlYWNoZXIgPSB0ZWFjaGVyO1xuXHR9XG5cblx0Z2V0VGVhY2hlcigpOiBUZWFjaGVyIHtcblx0XHRyZXR1cm4gdGhpcy50ZWFjaGVyO1xuXHR9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ3BwIH0gZnJvbSBcIi4vc3ViamVjdHMvQ3BwXCI7XG5pbXBvcnQgeyBKYXZhIH0gZnJvbSBcIi4vc3ViamVjdHMvSmF2YVwiO1xuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi9zdWJqZWN0cy9SZWFjdFwiO1xuaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gXCIuL3N1YmplY3RzL1RlYWNoZXJcIjtcblxuLy8gRMOpZmluaXRpb24gZHUgcHJvZlxuY29uc3QgY3BwVGVhY2hlcjogVGVhY2hlciA9IHtcblx0Zmlyc3ROYW1lOiBcIkpvaG5cIixcblx0bGFzdE5hbWU6IFwiRG9lXCIsXG5cdGV4cGVyaWVuY2VUZWFjaGluZ0M6IDEwXG59O1xuXG5jb25zdCBqYXZhVGVhY2hlcjogVGVhY2hlciA9IHtcblx0Zmlyc3ROYW1lOiBcIkFsaWNlXCIsXG5cdGxhc3ROYW1lOiBcIlNtaXRoXCIsXG5cdGV4cGVyaWVuY2VUZWFjaGluZ0phdmE6IDVcbn07XG5cbmNvbnN0IHJlYWN0VGVhY2hlcjogVGVhY2hlciA9IHtcblx0Zmlyc3ROYW1lOiBcIkJvYlwiLFxuXHRsYXN0TmFtZTogXCJCcm93blwiLFxuXHRleHBlcmllbmNlVGVhY2hpbmdSZWFjdDogMlxufTtcblxuLy8gQ3LDqWF0aW9uIGRlcyBpbnN0YW5jZXNcbmNvbnN0IGNwcENvdXJzZSA9IG5ldyBDcHAoKTtcbmNwcENvdXJzZS5zZXRUZWFjaGVyKGNwcFRlYWNoZXIpO1xuXG5jb25zdCBqYXZhQ291cnNlID0gbmV3IEphdmEoKTtcbmphdmFDb3Vyc2Uuc2V0VGVhY2hlcihqYXZhVGVhY2hlcik7XG5cbmNvbnN0IHJlYWN0Q291cnNlID0gbmV3IFJlYWN0KCk7XG5yZWFjdENvdXJzZS5zZXRUZWFjaGVyKHJlYWN0VGVhY2hlcik7XG5cbi8vIFRlc3RzXG5jb25zb2xlLmxvZyhcIkNwcDpcIiwgY3BwQ291cnNlLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKFwiQ3BwOlwiLCBjcHBDb3Vyc2UuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxuY29uc29sZS5sb2coXCJKYXZhOlwiLCBqYXZhQ291cnNlLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKFwiSmF2YTpcIiwgamF2YUNvdXJzZS5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuXG5jb25zb2xlLmxvZyhcIlJlYWN0OlwiLCByZWFjdENvdXJzZS5nZXRSZXF1aXJlbWVudHMoKSk7XG5jb25zb2xlLmxvZyhcIlJlYWN0OlwiLCByZWFjdENvdXJzZS5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=