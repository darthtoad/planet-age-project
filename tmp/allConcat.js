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
      $("#result").append(`Your age is ${birthdayDate.calculateAgeMercury()}. `);
      $("#result").append(`You have ${birthdayDate.calculateNextBirthdayMercury()} days until your next birthday`);
      if (birthdayDate.calculateMercuryLifeExpectancy(expectancy) > 0) {
        $("#result").append(` and you have ${birthdayDate.calculateMercuryLifeExpectancy(expectancy)} years left until you die, human.`);
      } else {
        $("#result").append(" and you should be dead by now.")
      }
    } else if ($("input:radio[name=planet]:checked").val() === "Venus") {
      $("#result").append(`Your age is ${birthdayDate.calculateAgeVenus()}. `);
      $("#result").append(`You have ${birthdayDate.calculateNextBirthdayVenus()} days until your next birthday`);
      if (birthdayDate.calculateVenusLifeExpectancy(expectancy) > 0) {
        $("#result").append(` and you have ${birthdayDate.calculateVenusLifeExpectancy(expectancy)} years left until you die, human.`);
      } else {
        $("#result").append(" and you should be dead by now.")
      }
    } else if ($("input:radio[name=planet]:checked").val() === "Mars") {
      $("#result").append(`Your age is ${birthdayDate.calculateAgeMars()}. `);
      $("#result").append(`You have ${birthdayDate.calculateNextBirthdayMars()} days until your next birthday`);
      if (birthdayDate.calculateMarsLifeExpectancy(expectancy) > 0) {
        $("#result").append(` and you have ${birthdayDate.calculateMarsLifeExpectancy(expectancy)} years left until you die, human.`);
      } else {
        $("#result").append(" and you should be dead by now.")
      }
    } else if ($("input:radio[name=planet]:checked").val() === "Jupiter") {
      $("#result").append(`Your age is ${birthdayDate.calculateAgeJupiter()}. `);
        $("#result").append(`You have ${birthdayDate.calculateNextBirthdayJupiter()} days until your next birthday`);
      if (birthdayDate.calculateJupiterLifeExpectancy(expectancy) > 0) {
        $("#result").append(` and you have ${birthdayDate.calculateJupiterLifeExpectancy(expectancy)} years left until you die, human.`);
      } else {
        $("#result").append(" and you should be dead by now.")
      }
    } else {
      alert("You have caused an error, you stupid human!");
    }
  })
})
