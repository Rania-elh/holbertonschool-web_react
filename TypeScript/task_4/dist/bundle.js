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
        return 'Here is the list of requirements for Cpp';
    };
    Cpp.prototype.getAvailableTeacher = function () {
        if (!this.teacher || !this.teacher.experienceTeachingC || this.teacher.experienceTeachingC <= 0) {
            return 'No available teacher';
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
        if (!this.teacher || !this.teacher.experienceTeachingJava || this.teacher.experienceTeachingJava <= 0) {
            return 'No available teacher';
        }
        return "Available Teacher: ".concat(this.teacher.firstName);
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
var React = /** @class */ (function () {
    function React() {
    }
    React.prototype.setTeacher = function (teacher) {
        this._teacher = teacher;
    };
    Object.defineProperty(React.prototype, "teacher", {
        get: function () {
            return this._teacher;
        },
        enumerable: false,
        configurable: true
    });
    React.prototype.getRequirements = function () {
        return 'Here is the list of requirements for React';
    };
    React.prototype.getAvailableTeacher = function () {
        if (!this.teacher || !this.teacher.experienceTeachingReact || this.teacher.experienceTeachingReact <= 0) {
            return 'No available teacher';
        }
        return "Available Teacher: ".concat(this.teacher.firstName);
    };
    return React;
}());



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
        this._teacher = teacher;
    };
    Object.defineProperty(Subject.prototype, "teacher", {
        get: function () {
            return this._teacher;
        },
        enumerable: false,
        configurable: true
    });
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
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/React */ "./js/subjects/React.ts");
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/Java */ "./js/subjects/Java.ts");



// Création de quelques enseignants
var cppTeacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 5,
};
var reactTeacher = {
    firstName: "Jane",
    lastName: "Smith",
    experienceTeachingReact: 0,
};
var javaTeacher = {
    firstName: "Mary",
    lastName: "Johnson",
    experienceTeachingJava: 3,
};
// Création des instances de classes
var cppCourse = new _subjects_Cpp__WEBPACK_IMPORTED_MODULE_0__.Cpp();
cppCourse.teacher = cppTeacher;
var reactCourse = new _subjects_React__WEBPACK_IMPORTED_MODULE_1__.React();
reactCourse.teacher = reactTeacher;
var javaCourse = new _subjects_Java__WEBPACK_IMPORTED_MODULE_2__.Java();
javaCourse.teacher = javaTeacher;
// Tests
console.log(cppCourse.getRequirements()); // Here is the list of requirements for Cpp
console.log(cppCourse.getAvailableTeacher()); // Available Teacher: John
console.log(reactCourse.getRequirements()); // Here is the list of requirements for React
console.log(reactCourse.getAvailableTeacher()); // No available teacher
console.log(javaCourse.getRequirements()); // Here is the list of requirements for Java
console.log(javaCourse.getAvailableTeacher()); // Available Teacher: Mary

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLDBCQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvQ3BwLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvSmF2YS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL1JlYWN0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvU3ViamVjdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcIi4vU3ViamVjdFwiO1xuaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gXCIuL1RlYWNoZXJcIjtcblxuZXhwb3J0IGNsYXNzIENwcCBleHRlbmRzIFN1YmplY3Qge1xuXHRnZXRSZXF1aXJlbWVudHMoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0hlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBDcHAnO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuXHRcdGlmICghdGhpcy50ZWFjaGVyIHx8ICF0aGlzLnRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nQyB8fCB0aGlzLnRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nQyA8PSAwKSB7XG5cdFx0XHRyZXR1cm4gJ05vIGF2YWlsYWJsZSB0ZWFjaGVyJztcblx0XHR9XG5cdFx0cmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0aGlzLnRlYWNoZXIuZmlyc3ROYW1lfWA7XG5cdH1cbn1cblxuIiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCIuL1N1YmplY3RcIjtcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tIFwiLi9UZWFjaGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBKYXZhIGV4dGVuZHMgU3ViamVjdCB7XG5cdGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnSGVyZSBpcyB0aGUgbGlzdCBvZiByZXF1aXJlbWVudHMgZm9yIEphdmEnO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuXHRcdGlmICghdGhpcy50ZWFjaGVyIHx8ICF0aGlzLnRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nSmF2YSB8fCB0aGlzLnRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nSmF2YSA8PSAwKSB7XG5cdFx0XHRyZXR1cm4gJ05vIGF2YWlsYWJsZSB0ZWFjaGVyJztcblx0XHR9XG5cdFx0cmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0aGlzLnRlYWNoZXIuZmlyc3ROYW1lfWA7XG5cdH1cbn1cblxuIiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCIuL1N1YmplY3RcIjtcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tIFwiLi9UZWFjaGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWFjdCB7XG5cdC8vIHR1IHBldXggaMOpcml0ZXIgYXVzc2kgZGUgU3ViamVjdCBzaSB0dSB2ZXV4IDogXG5cdC8vIGV4cG9ydCBjbGFzcyBSZWFjdCBleHRlbmRzIFN1YmplY3RcblxuXHRwcml2YXRlIF90ZWFjaGVyITogVGVhY2hlcjtcblxuXHRzZXRUZWFjaGVyKHRlYWNoZXI6IFRlYWNoZXIpIHtcblx0XHR0aGlzLl90ZWFjaGVyID0gdGVhY2hlcjtcblx0fVxuXG5cdGdldCB0ZWFjaGVyKCk6IFRlYWNoZXIge1xuXHRcdHJldHVybiB0aGlzLl90ZWFjaGVyO1xuXHR9XG5cblx0Z2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgUmVhY3QnO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuXHRcdGlmICghdGhpcy50ZWFjaGVyIHx8ICF0aGlzLnRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nUmVhY3QgfHwgdGhpcy50ZWFjaGVyLmV4cGVyaWVuY2VUZWFjaGluZ1JlYWN0IDw9IDApIHtcblx0XHRcdHJldHVybiAnTm8gYXZhaWxhYmxlIHRlYWNoZXInO1xuXHRcdH1cblx0XHRyZXR1cm4gYEF2YWlsYWJsZSBUZWFjaGVyOiAke3RoaXMudGVhY2hlci5maXJzdE5hbWV9YDtcblx0fVxufVxuXG4iLCJpbXBvcnQgeyBUZWFjaGVyIH0gZnJvbSBcIi4vVGVhY2hlclwiO1xuXG5leHBvcnQgY2xhc3MgU3ViamVjdCB7XG5cdHByaXZhdGUgX3RlYWNoZXIhOiBUZWFjaGVyO1xuXG5cdHNldFRlYWNoZXIodGVhY2hlcjogVGVhY2hlcikge1xuXHRcdHRoaXMuX3RlYWNoZXIgPSB0ZWFjaGVyO1xuXHR9XG5cblx0Z2V0IHRlYWNoZXIoKTogVGVhY2hlciB7XG5cdFx0cmV0dXJuIHRoaXMuX3RlYWNoZXI7XG5cdH1cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBTdWJqZWN0cyB9IGZyb20gXCIuL3N1YmplY3RzL1RlYWNoZXJcIjtcbmltcG9ydCB7IENwcCB9IGZyb20gXCIuL3N1YmplY3RzL0NwcFwiO1xuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi9zdWJqZWN0cy9SZWFjdFwiO1xuaW1wb3J0IHsgSmF2YSB9IGZyb20gXCIuL3N1YmplY3RzL0phdmFcIjtcblxuLy8gQ3LDqWF0aW9uIGRlIHF1ZWxxdWVzIGVuc2VpZ25hbnRzXG5jb25zdCBjcHBUZWFjaGVyOiBTdWJqZWN0cy5UZWFjaGVyID0ge1xuXHRmaXJzdE5hbWU6IFwiSm9oblwiLFxuXHRsYXN0TmFtZTogXCJEb2VcIixcblx0ZXhwZXJpZW5jZVRlYWNoaW5nQzogNSxcbn07XG5cbmNvbnN0IHJlYWN0VGVhY2hlcjogU3ViamVjdHMuVGVhY2hlciA9IHtcblx0Zmlyc3ROYW1lOiBcIkphbmVcIixcblx0bGFzdE5hbWU6IFwiU21pdGhcIixcblx0ZXhwZXJpZW5jZVRlYWNoaW5nUmVhY3Q6IDAsXG59O1xuXG5jb25zdCBqYXZhVGVhY2hlcjogU3ViamVjdHMuVGVhY2hlciA9IHtcblx0Zmlyc3ROYW1lOiBcIk1hcnlcIixcblx0bGFzdE5hbWU6IFwiSm9obnNvblwiLFxuXHRleHBlcmllbmNlVGVhY2hpbmdKYXZhOiAzLFxufTtcblxuLy8gQ3LDqWF0aW9uIGRlcyBpbnN0YW5jZXMgZGUgY2xhc3Nlc1xuY29uc3QgY3BwQ291cnNlID0gbmV3IENwcCgpO1xuY3BwQ291cnNlLnRlYWNoZXIgPSBjcHBUZWFjaGVyO1xuXG5jb25zdCByZWFjdENvdXJzZSA9IG5ldyBSZWFjdCgpO1xucmVhY3RDb3Vyc2UudGVhY2hlciA9IHJlYWN0VGVhY2hlcjtcblxuY29uc3QgamF2YUNvdXJzZSA9IG5ldyBKYXZhKCk7XG5qYXZhQ291cnNlLnRlYWNoZXIgPSBqYXZhVGVhY2hlcjtcblxuLy8gVGVzdHNcbmNvbnNvbGUubG9nKGNwcENvdXJzZS5nZXRSZXF1aXJlbWVudHMoKSk7IC8vIEhlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBDcHBcbmNvbnNvbGUubG9nKGNwcENvdXJzZS5nZXRBdmFpbGFibGVUZWFjaGVyKCkpOyAvLyBBdmFpbGFibGUgVGVhY2hlcjogSm9oblxuXG5jb25zb2xlLmxvZyhyZWFjdENvdXJzZS5nZXRSZXF1aXJlbWVudHMoKSk7IC8vIEhlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBSZWFjdFxuY29uc29sZS5sb2cocmVhY3RDb3Vyc2UuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTsgLy8gTm8gYXZhaWxhYmxlIHRlYWNoZXJcblxuY29uc29sZS5sb2coamF2YUNvdXJzZS5nZXRSZXF1aXJlbWVudHMoKSk7IC8vIEhlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBKYXZhXG5jb25zb2xlLmxvZyhqYXZhQ291cnNlLmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7IC8vIEF2YWlsYWJsZSBUZWFjaGVyOiBNYXJ5XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==