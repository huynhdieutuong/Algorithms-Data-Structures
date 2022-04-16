/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/2-bigO/5-timing-our-code.ts":
/*!*****************************************!*\
  !*** ./src/2-bigO/5-timing-our-code.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUpTo1": () => (/* binding */ addUpTo1),
/* harmony export */   "addUpTo2": () => (/* binding */ addUpTo2)
/* harmony export */ });
var addUpTo1 = function (n) {
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    return total;
};
var addUpTo2 = function (n) {
    return (n * (n + 1)) / 2;
};


/***/ }),

/***/ "./src/2-bigO/index.ts":
/*!*****************************!*\
  !*** ./src/2-bigO/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _5_timing_our_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./5-timing-our-code */ "./src/2-bigO/5-timing-our-code.ts");

var number = 100000000;
var t1 = performance.now();
console.log((0,_5_timing_our_code__WEBPACK_IMPORTED_MODULE_0__.addUpTo1)(number));
var t2 = performance.now();
console.log("Time Elapsed 1: ".concat((t2 - t1) / 1000, " seconds."));
var t3 = performance.now();
console.log((0,_5_timing_our_code__WEBPACK_IMPORTED_MODULE_0__.addUpTo2)(number));
var t4 = performance.now();
console.log("Time Elapsed 2: ".concat((t4 - t3) / 1000, " seconds."));


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _2_bigO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2-bigO */ "./src/2-bigO/index.ts");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNLFFBQVEsR0FBRyxVQUFDLENBQVM7SUFDaEMsSUFBSSxLQUFLLEdBQUcsQ0FBQztJQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0IsS0FBSyxJQUFJLENBQUM7S0FDWDtJQUNELE9BQU8sS0FBSztBQUNkLENBQUM7QUFFTSxJQUFNLFFBQVEsR0FBRyxVQUFDLENBQVM7SUFDaEMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDMUIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1Z1RDtBQUV4RCxJQUFNLE1BQU0sR0FBRyxTQUFTO0FBRXhCLElBQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0REFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBbUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxjQUFXLENBQUM7QUFFM0QsSUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDREQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsSUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUFtQixDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLGNBQVcsQ0FBQzs7Ozs7OztVQ1ozRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxnb3JpdGhtcy8uL3NyYy8yLWJpZ08vNS10aW1pbmctb3VyLWNvZGUudHMiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtcy8uL3NyYy8yLWJpZ08vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbGdvcml0aG1zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbGdvcml0aG1zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FsZ29yaXRobXMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFkZFVwVG8xID0gKG46IG51bWJlcikgPT4ge1xyXG4gIGxldCB0b3RhbCA9IDBcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIHtcclxuICAgIHRvdGFsICs9IGlcclxuICB9XHJcbiAgcmV0dXJuIHRvdGFsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVcFRvMiA9IChuOiBudW1iZXIpID0+IHtcclxuICByZXR1cm4gKG4gKiAobiArIDEpKSAvIDJcclxufVxyXG4iLCJpbXBvcnQgeyBhZGRVcFRvMSwgYWRkVXBUbzIgfSBmcm9tICcuLzUtdGltaW5nLW91ci1jb2RlJ1xyXG5cclxuY29uc3QgbnVtYmVyID0gMTAwMDAwMDAwXHJcblxyXG5jb25zdCB0MSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbmNvbnNvbGUubG9nKGFkZFVwVG8xKG51bWJlcikpXHJcbmNvbnN0IHQyID0gcGVyZm9ybWFuY2Uubm93KClcclxuY29uc29sZS5sb2coYFRpbWUgRWxhcHNlZCAxOiAkeyh0MiAtIHQxKSAvIDEwMDB9IHNlY29uZHMuYClcclxuXHJcbmNvbnN0IHQzID0gcGVyZm9ybWFuY2Uubm93KClcclxuY29uc29sZS5sb2coYWRkVXBUbzIobnVtYmVyKSlcclxuY29uc3QgdDQgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG5jb25zb2xlLmxvZyhgVGltZSBFbGFwc2VkIDI6ICR7KHQ0IC0gdDMpIC8gMTAwMH0gc2Vjb25kcy5gKVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi8yLWJpZ08nXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==