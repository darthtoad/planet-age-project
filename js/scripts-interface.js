import { Calculator } from "./../js/scripts.js";

$(document).ready(function(){
  $("#birthday").submit(function(event){
    event.preventDefault();
    $("#result").empty();
    let birthdayString = $('input[type="date"]').val();
    let expectancy = $('input[type="number"]').val();
    const birthdayDate = new Calculator(birthdayString);
    console.log(birthdayDate.age)
    if ($("input:radio[name=planet]:checked").val() === "Mercury") {
      $("#result").append(`Your age is ${birthdayDate.calculateAgeMercury()}`);
      if (birthdayDate.calculateMercuryLifeExpectancy(expectancy) > 0) {
        $("#result").append(` and you have ${birthdayDate.calculateMercuryLifeExpectancy(expectancy)} years left`);
      } else {
        $("#result").append(" and you should be dead by now.")
      }
    } else if ($("input:radio[name=planet]:checked").val() === "Venus") {
      $("#result").append(`Your age is ${birthdayDate.calculateAgeVenus()}`);
      if (birthdayDate.calculateVenusLifeExpectancy(expectancy) > 0) {
        $("#result").append(` and you have ${birthdayDate.calculateVenusLifeExpectancy(expectancy)} years left`);
      } else {
        $("#result").append(" and you should be dead by now.")
      }
    } else if ($("input:radio[name=planet]:checked").val() === "Mars") {
      $("#result").append(`Your age is ${birthdayDate.calculateAgeMars()}`);
      if (birthdayDate.calculateMarsLifeExpectancy(expectancy) > 0) {
        $("#result").append(` and you have ${birthdayDate.calculateMarsLifeExpectancy(expectancy)} years left`);
      } else {
        $("#result").append(" and you should be dead by now.")
      }
    } else if ($("input:radio[name=planet]:checked").val() === "Jupiter") {
      $("#result").append(`Your age is ${birthdayDate.calculateAgeJupiter()}`);
      if (birthdayDate.calculateJupiterLifeExpectancy(expectancy) > 0) {
        $("#result").append(` and you have ${birthdayDate.calculateJupiterLifeExpectancy(expectancy)} years left`);
      } else {
        $("#result").append(" and you should be dead by now.")
      }
    } else {
      alert("You have caused an error, you stupid human!");
    }
  })
})
