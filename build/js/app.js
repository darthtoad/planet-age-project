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
      var ms = new Date(this.age);
      var currentDate = new Date();
      var ageNumber = currentDate.getTime() - ms.getTime();
      console.log(ageNumber / 31557600000);
      var mercuryNumber = parseFloat(ageNumber) / 0.24;
      var mercuryYear = mercuryNumber / 31557600000;
      console.log("Mercury: " + mercuryYear);
      return mercuryYear;
    }
  }, {
    key: "calculateMercuryLifeExpectancy",
    value: function calculateMercuryLifeExpectancy(expectancy) {
      var age = this.calculateAgeMercury();
      var expectancyYear = parseFloat(expectancy) / 0.24;
      var yearsLeft = expectancyYear - age;
      console.log("Mercury: " + yearsLeft);
      return yearsLeft;
    }
  }, {
    key: "calculateAgeVenus",
    value: function calculateAgeVenus() {
      var ms = new Date(this.age);
      var currentDate = new Date();
      var ageNumber = currentDate.getTime() - ms.getTime();
      var venusNumber = parseFloat(ageNumber) / 0.62;
      var venusYear = venusNumber / 31557600000;
      console.log("Venus: " + venusYear);
      return venusYear;
    }
  }, {
    key: "calculateVenusLifeExpectancy",
    value: function calculateVenusLifeExpectancy(expectancy) {
      var age = this.calculateAgeVenus();
      var expectancyYear = parseFloat(expectancy) / 0.62;
      var yearsLeft = expectancyYear - age;
      console.log("Venus: " + yearsLeft);
      return yearsLeft;
    }
  }, {
    key: "calculateAgeMars",
    value: function calculateAgeMars() {
      var ms = new Date(this.age);
      var currentDate = new Date();
      var ageNumber = currentDate.getTime() - ms.getTime();
      var marsNumber = parseFloat(ageNumber) / 1.88;
      var marsYear = marsNumber / 31557600000;
      console.log("Mars: " + marsYear);
      return marsYear;
    }
  }, {
    key: "calculateMarsLifeExpectancy",
    value: function calculateMarsLifeExpectancy(expectancy) {
      var age = this.calculateAgeMars();
      var expectancyYear = parseFloat(expectancy) / 1.88;
      var yearsLeft = expectancyYear - age;
      console.log("Mars: " + yearsLeft);
      return yearsLeft;
    }
  }, {
    key: "calculateAgeJupiter",
    value: function calculateAgeJupiter() {
      var ms = new Date(this.age);
      var currentDate = new Date();
      var ageNumber = currentDate.getTime() - ms.getTime();
      var jupiterNumber = parseFloat(ageNumber) / 11.86;
      var jupiterYear = jupiterNumber / 31557600000;
      console.log("Jupiter: " + jupiterYear);
      return jupiterYear;
    }
  }, {
    key: "calculateJupiterLifeExpectancy",
    value: function calculateJupiterLifeExpectancy(expectancy) {
      var age = this.calculateAgeJupiter();
      var expectancyYear = parseFloat(expectancy) / 11.86;
      var yearsLeft = expectancyYear - age;
      console.log("Jupiter: " + yearsLeft);
      return yearsLeft;
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
    var expectancy = $('input[type="number"]').val();
    var birthdayDate = new _scripts.Calculator(birthdayString);
    console.log(birthdayDate.age);
    if ($("input:radio[name=planet]:checked").val() === "Mercury") {
      $("#result").append("Your age is " + birthdayDate.calculateAgeMercury());
      if (birthdayDate.calculateMercuryLifeExpectancy(expectancy) > 0) {
        $("#result").append(" and you have " + birthdayDate.calculateMercuryLifeExpectancy(expectancy) + " years left");
      } else {
        $("#result").append(" and you should be dead by now.");
      }
    } else if ($("input:radio[name=planet]:checked").val() === "Venus") {
      $("#result").append("Your age is " + birthdayDate.calculateAgeVenus());
      if (birthdayDate.calculateVenusLifeExpectancy(expectancy) > 0) {
        $("#result").append(" and you have " + birthdayDate.calculateVenusLifeExpectancy(expectancy) + " years left");
      } else {
        $("#result").append(" and you should be dead by now.");
      }
    } else if ($("input:radio[name=planet]:checked").val() === "Mars") {
      $("#result").append("Your age is " + birthdayDate.calculateAgeMars());
      if (birthdayDate.calculateMarsLifeExpectancy(expectancy) > 0) {
        $("#result").append(" and you have " + birthdayDate.calculateMarsLifeExpectancy(expectancy) + " years left");
      } else {
        $("#result").append(" and you should be dead by now.");
      }
    } else if ($("input:radio[name=planet]:checked").val() === "Jupiter") {
      $("#result").append("Your age is " + birthdayDate.calculateAgeJupiter());
      if (birthdayDate.calculateJupiterLifeExpectancy(expectancy) > 0) {
        $("#result").append(" and you have " + birthdayDate.calculateJupiterLifeExpectancy(expectancy) + " years left");
      } else {
        $("#result").append(" and you should be dead by now.");
      }
    } else {
      alert("You have caused an error, you stupid human!");
    }
  });
});

},{"./../js/scripts.js":1}]},{},[2]);
