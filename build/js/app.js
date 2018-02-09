(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = exports.Calculator = function () {
  function Calculator(age) {
    _classCallCheck(this, Calculator);

    this.age = age;
  }

  _createClass(Calculator, [{
    key: "calculateAgeMercury",
    value: function calculateAgeMercury() {
      console.log(this.age);
      var ms = new Date(this.age);
      console.log(ms);
      var ageNumber = ms.getTime();
      var mercuryNumber = parseFloat(ageNumber) / .24;
      var mercuryYear = mercuryNumber / 31536000000;
      return mercuryYear;
    }
  }, {
    key: "calculateAgeVenus",
    value: function calculateAgeVenus() {
      console.log(this.age);
      var ms = new Date(this.age);
      console.log(ms);
      var ageNumber = ms.getTime();
      var venusNumber = parseFloat(ageNumber) / .62;
      var venusYear = venusNumber / 31536000000;
      return venusYear;
    }
  }, {
    key: "calculateAgeMars",
    value: function calculateAgeMars() {
      console.log(this.age);
      var ms = new Date(this.age);
      console.log(ms);
      var ageNumber = ms.getTime();
      var marsNumber = parseFloat(ageNumber) / 1.88;
      var marsYear = marsNumber / 31536000000;
      return marsYear;
    }
  }, {
    key: "calculateAgeJupiter",
    value: function calculateAgeJupiter() {
      console.log(this.age);
      var ms = new Date(this.age);
      console.log(ms);
      var ageNumber = ms.getTime();
      var jupiterNumber = parseFloat(ageNumber) / 11.86;
      var jupiterYear = jupiterNumber / 31536000000;
      return jupiterYear;
    }
  }]);

  return Calculator;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _scripts = require("./../js/scripts.js");

$(document).ready(function () {
  $("#birthday").submit(function (event) {
    event.preventDefault();
    $("#result").empty();
    var birthdayString = $('input[type="date"]').val();
    var birthdayDate = new _scripts.Calculator(birthdayString);
    console.log(birthdayDate.age);
    if ($("input:radio[name=planet]:checked").val() === "Mercury") {
      $("#result").append(birthdayDate.calculateAgeMercury());
    } else if ($("input:radio[name=planet]:checked").val() === "Venus") {
      $("#result").append(birthdayDate.calculateAgeVenus());
    } else if ($("input:radio[name=planet]:checked").val() === "Mars") {
      $("#result").append(birthdayDate.calculateAgeMars());
    } else if ($("input:radio[name=planet]:checked").val() === "Jupiter") {
      $("#result").append(birthdayDate.calculateAgeJupiter());
    } else {
      alert("You have caused an error, you stupid human!");
    }
  });
});

},{"./../js/scripts.js":1}]},{},[2]);
