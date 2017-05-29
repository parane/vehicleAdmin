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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
var CONFIG = {
    secretKey: "parane"
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_wizard_route__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_vehicle_route__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_user_route__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jsonwebtoken__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jsonwebtoken__);











//application init
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());

app.set('port', 3000);

//connect to mongoDB instance create on mongoLabs
__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect('mongodb://root:root@ds133321.mlab.com:33321/parane1');

/*app.use('/wizard',(req,res,next) =>{
   console.log("middle for authentication");
   let token = req.headers['x-access-token']
   if(!token){
       res.status().json({message:"Not autherized"})
   }else{
       jwt.verify(token,CONFIG.secretKey,(err,decoded)=>{
           if(err){
              res.send(err);
           }else{
               req.decoded = decoded;
               next();
           }
       })
   }
   //check for authentication
   //i true ==>
  // next();
})*/

app.get('/', function (req, res) {
    res.json({ 'message': 'hello world' });
});

// app.post('/example-post',(req,res) =>{
//   res.json({
//       message: 'Poste sucessful',
//       payload: req.body,
//       header: req.header 
//   });

// });
app.use('/wizard', __WEBPACK_IMPORTED_MODULE_2__routes_wizard_route__["a" /* WizardRoutes */]);
app.use('/vehicle', __WEBPACK_IMPORTED_MODULE_3__routes_vehicle_route__["a" /* VehicleRoutes */]);
app.use(__WEBPACK_IMPORTED_MODULE_6__routes_user_route__["a" /* USER_ROUTES */]);
app.listen(app.get('port'), function () {
    console.log('Node is running on port ' + app.get('port'));
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var user = new Schema({
    name: String,
    password: String,
    admin: Boolean
});

var User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', user);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wizard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var wizard = new Schema({
    name: String,
    house: String,
    pet: String
});

var Wizard = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Wizard', wizard);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(2);





var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.post('/register', function (req, res) {
    var user = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]({
        name: req.body.name,
        password: req.body.password,
        admin: req.body.admin
    });

    user.save(function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json({ message: "saved", data: user });
    });
});

router.get('/authenticate', function (req, res) {

    __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */].findOne({
        name: req.query.name
    }, function (err, user) {
        if (err) res.send(err);

        if (!user) {
            res.status(401).json({ message: "user not exsist" });
        } else {

            if (user.password === req.query.password) {
                var token = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.sign(user, __WEBPACK_IMPORTED_MODULE_3__config__["a" /* CONFIG */].secretKey, {
                    expiresIn: 1440
                });
                res.json({
                    message: "scuessfully login",
                    token: token
                });
            } else {
                res.status(401).json({ message: "password wrong" });
            }
        }
    });
});

var USER_ROUTES = router;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vehicle_model__ = __webpack_require__(12);



var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

//get all wizard
router.get('/', function (req, res) {
    __WEBPACK_IMPORTED_MODULE_1__models_vehicle_model__["a" /* Vehicle */].find(function (err, vehicles) {
        if (err) {
            res.send(err);
        }
        res.json(vehicles);
    });
});

//add wizard
router.post('/', function (req, res) {

    var vehicle = new __WEBPACK_IMPORTED_MODULE_1__models_vehicle_model__["a" /* Vehicle */]();
    vehicle.title = req.body.title;
    vehicle.description = req.body.description;
    vehicle.price = req.body.price;

    vehicle.save(function (err, data) {

        if (err) {
            res.send(err);
        }

        res.json({
            message: "Vehicle added scuess",
            data: data
        });
    });
});

// view wizard from ID
router.get('/:id', function (req, res) {});

// edit wizard from ID
router.put('/:id', function (req, res) {});

// edit wizard from ID
router.delete('/:id', function (req, res) {});

//javascript module
var VehicleRoutes = router;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_wizard_model__ = __webpack_require__(6);



var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

//get all wizard
router.get('/', function (req, res) {
    __WEBPACK_IMPORTED_MODULE_1__models_wizard_model__["a" /* Wizard */].find(function (err, wizards) {
        if (err) {
            res.send(err);
        }
        res.json(wizards);
    });
});

//add wizard
router.post('/', function (req, res) {

    var wizard = new __WEBPACK_IMPORTED_MODULE_1__models_wizard_model__["a" /* Wizard */]();
    wizard.name = req.body.name;
    wizard.house = req.body.house;
    wizard.pet = req.body.pet;

    wizard.save(function (err, data) {

        if (err) {
            res.send(err);
        }

        res.json({
            message: "Wizard added scuess",
            data: data
        });
    });
});

// view wizard from ID
router.get('/:id', function (req, res) {});

// edit wizard from ID
router.put('/:id', function (req, res) {
    __WEBPACK_IMPORTED_MODULE_1__models_wizard_model__["a" /* Wizard */].findById(req.params.id, function (err, wizard) {
        if (err) {
            res.send(err);
        }

        wizard.name = req.body.name;
        wizard.house = req.body.house;
        wizard.pet = req.body.pet;

        wizard.save(function (err, data) {

            if (err) {
                res.send(err);
            }

            res.json({
                message: "update scuess",
                data: data
            });
        });
    });
});

// edit wizard from ID
router.delete('/:id', function (req, res) {
    res.send('View wizard of ID --> ' + req.param.id);
});

//javascript module
var WizardRoutes = router;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vehicle; });
var mongoose = __webpack_require__(1);

var Schema = mongoose.Schema;

var vehicle = new Schema({
  title: String,
  description: String,
  price: Number
});

var Vehicle = mongoose.model('Vehicle', vehicle);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map