/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cars */ "./src/cars.js");
// DON'T CHANGE THIS LINE
const myBadAssGarage = "kenns-garage";
document.querySelector("#garage-name").innerText = myBadAssGarage.replace(
  /-/g,
  " "
);
// //////////////////////



Object(_cars__WEBPACK_IMPORTED_MODULE_0__["fetchCars"])();

const carBrand = document.querySelector("#brand");
const carModel = document.querySelector("#model");
const carPlate = document.querySelector("#plate");
const carOwner = document.querySelector("#owner");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const carData = {
    brand: carBrand.value,
    model: carModel.value,
    plate: carPlate.value,
    owner: carOwner.value,
  };
  Object(_cars__WEBPACK_IMPORTED_MODULE_0__["postCar"])(carData);
});


/***/ }),

/***/ "./src/cars.js":
/*!*********************!*\
  !*** ./src/cars.js ***!
  \*********************/
/*! exports provided: fetchCars, postCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCars", function() { return fetchCars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postCar", function() { return postCar; });
const myBadAssGarage = "kenns-garage";
const url = `https://wagon-garage-api.herokuapp.com/${myBadAssGarage}/cars`;

const carsList = document.querySelector(".cars-list");

const displayCars = (data) => {
  carsList.innerHTML = "";
  data.forEach((car) => {
    carsList.insertAdjacentHTML(
      "beforeend",
      `<div class="car">
        <div class="car-image">
          <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
        </div>
        <div class="car-info">
          <h4>${car.brand} ${car.model}</h4>
          <p><strong>Owner:</strong>${car.owner}</p>
          <p><strong>Plate:</strong>${car.plate}</p>
        </div>
      </div>
      `
    );
  });
};

const fetchCars = () => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      displayCars(data);
    });
};

const postCar = (carData) => {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(carData),
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      fetchCars();
    });
};




/***/ })

/******/ });
//# sourceMappingURL=main.js.map