import { Calculator } from "./../js/scripts.js";

$(document).ready(function(){
  $("#birthday").submit(function(event){
    event.preventDefault();
    $("#result").empty();
    let birthdayString = $('input[type="date"]').val();
    const birthdayDate = new Calculator(birthdayString);
    console.log(birthdayDate.age)
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
  })
})
