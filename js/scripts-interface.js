import { Calculator } from "./../js/scripts.js";

$(document).ready(function(){
  $("#birthday").submit(function(event){
    event.preventDefault();
    $("#result").empty();
    let birthdayString = $('input[type="date"]').val();
    let expectancy = $('input[type="number"]').val();
    const birthdayDate = new Calculator(birthdayString);
    if ($("input:radio[name=planet]:checked").val() === "Mercury") {
      $("#result").append(`Your age is ${Math.floor(birthdayDate.calculateAgeMercury())}. `);
      if (Math.floor(birthdayDate.calculateNextBirthdayMercury()) > 0) {
        $("#result").append(`You have ${Math.floor(birthdayDate.calculateNextBirthdayMercury())} days until your next birthday`);
      } else {
        $("#result").append(`It is your birthday on ${$("input:radio[name=planet]:checked")}`)
      }

      if (birthdayDate.calculateMercuryLifeExpectancy(expectancy) > 0) {
        $("#result").append(` and you have ${Math.ceil(birthdayDate.calculateMercuryLifeExpectancy(expectancy))} years left until you die, human.`);
      } else {
        $("#result").append(" and you should be dead by now.")
      }
    } else if ($("input:radio[name=planet]:checked").val() === "Venus") {
      $("#result").append(`Your age is ${Math.floor(birthdayDate.calculateAgeVenus())}. `);
      if (Math.floor(birthdayDate.calculateNextBirthdayVenus()) > 0) {
        $("#result").append(`You have ${Math.floor(birthdayDate.calculateNextBirthdayVenus())} days until your next birthday`);
      } else {
        $("#result").append(`It is your birthday on ${$("input:radio[name=planet]:checked")}`)
      }
      if (birthdayDate.calculateVenusLifeExpectancy(expectancy) > 0) {
        $("#result").append(` and you have ${Math.ceil(birthdayDate.calculateVenusLifeExpectancy(expectancy))} years left until you die, human.`);
      } else {
        $("#result").append(" and you should be dead by now.")
      }
    } else if ($("input:radio[name=planet]:checked").val() === "Mars") {
      $("#result").append(`Your age is ${Math.floor(birthdayDate.calculateAgeMars())}. `);
      if (Math.floor(birthdayDate.calculateNextBirthdayMars()) > 0) {
        $("#result").append(`You have ${Math.floor(birthdayDate.calculateNextBirthdayMars())} days until your next birthday`);
      } else {
        $("#result").append(`It is your birthday on ${$("input:radio[name=planet]:checked")}`)
      }
      if (birthdayDate.calculateMarsLifeExpectancy(expectancy) > 0) {
        $("#result").append(` and you have ${Math.ceil(birthdayDate.calculateMarsLifeExpectancy(expectancy))} years left until you die, human.`);
      } else {
        $("#result").append(" and you should be dead by now.")
      }
    } else if ($("input:radio[name=planet]:checked").val() === "Jupiter") {
      $("#result").append(`Your age is ${Math.floor(birthdayDate.calculateAgeJupiter())}. `);
      if (Math.floor(birthdayDate.calculateNextBirthdayJupiter()) > 0) {
        $("#result").append(`You have ${Math.floor(birthdayDate.calculateNextBirthdayJupiter())} days until your next birthday`);
      } else {
        $("#result").append(`It is your birthday on ${$("input:radio[name=planet]:checked")}`)
      }
      if (birthdayDate.calculateJupiterLifeExpectancy(expectancy) > 0) {
        $("#result").append(` and you have ${Math.ceil(birthdayDate.calculateJupiterLifeExpectancy(expectancy))} years left until you die, human.`);
      } else {
        $("#result").append(" and you should be dead by now.")
      }
    } else {
      alert("You have caused an error, you stupid human!");
    }
  })
})
