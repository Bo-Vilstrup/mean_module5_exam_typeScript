/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by bo on 11/14/16.
	 */
	"use strict";

	var _typeScriptDemo = __webpack_require__(1);

	var _typeScriptDemo2 = _interopRequireDefault(_typeScriptDemo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var todo = "";
	for (var i = 0; i < _typeScriptDemo2.default.length; i++) {
	    todo += "<p>";
	    todo += "todo: " + _typeScriptDemo2.default[i].todo + ", importance: " + _typeScriptDemo2.default[i].importance;
	    todo += "</p>";
	    //alert(todos[i].todo);
	}
	document.getElementById("todos").innerHTML = "Todos: " + todo;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	;
	var Todo = (function () {
	    function Todo(todo, importance) {
	        var _this = this;
	        this.todo = todo;
	        this.importance = importance;
	        this.toString = function () { return ("Todo: " + _this.todo + ", Importance: " + _this.importance + " "); };
	    }
	    Todo.maxImportance = 5;
	    return Todo;
	}());
	var todos = [new Todo("Drink beer", 5), new Todo("Learn TS", 4)];
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = todos;


/***/ }
/******/ ]);