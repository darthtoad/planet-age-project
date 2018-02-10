export class Calculator {

  constructor(age) {
    this.age = age;
  }

  calculateAgeMercury() {
    let ms = new Date(this.age);
    let currentDate = new Date();
    let ageNumber = currentDate.getTime() - ms.getTime();
    console.log(ageNumber / 31557600000);
    let mercuryNumber = parseFloat(ageNumber) / 0.24;
    let mercuryYear = mercuryNumber / 31557600000;
    console.log("Mercury: " + mercuryYear);
    return mercuryYear;
  }

  calculateMercuryLifeExpectancy(expectancy) {
    let age = this.calculateAgeMercury();
    let expectancyYear = parseFloat(expectancy) / 0.24;
    let yearsLeft = expectancyYear - age;
    console.log("Mercury: " + yearsLeft);
    return yearsLeft;
  }

  calculateNextBirthdayMercury() {
    let age = this.calculateAgeMercury() - Math.floor(this.calculateAgeMercury());
    console.log(age);
    return 88 * (1 - age);
  }

  calculateAgeVenus() {
    let ms = new Date(this.age);
    let currentDate = new Date();
    let ageNumber = currentDate.getTime() - ms.getTime();
    let venusNumber = parseFloat(ageNumber) / 0.62;
    let venusYear = venusNumber / 31557600000;
    console.log("Venus: " + venusYear);
    return venusYear;
  }

  calculateVenusLifeExpectancy(expectancy) {
    let age = this.calculateAgeVenus();
    let expectancyYear = parseFloat(expectancy) / 0.62;
    let yearsLeft = expectancyYear - age;
    console.log("Venus: " + yearsLeft);
    return yearsLeft;
  }

  calculateNextBirthdayVenus() {
    let age = this.calculateAgeVenus() - Math.floor(this.calculateAgeVenus());
    return 225 * (1 - age);
  }

  calculateAgeMars() {
    let ms = new Date(this.age);
    let currentDate = new Date();
    let ageNumber = currentDate.getTime() - ms.getTime();
    let marsNumber = parseFloat(ageNumber) / 1.88;
    let marsYear = marsNumber / 31557600000;
    console.log("Mars: " + marsYear);
    return marsYear;
  }

  calculateMarsLifeExpectancy(expectancy) {
    let age = this.calculateAgeMars();
    let expectancyYear = parseFloat(expectancy) / 1.88;
    let yearsLeft = expectancyYear - age;
    console.log("Mars: " + yearsLeft);
    return yearsLeft;
  }

  calculateNextBirthdayMars() {
    let age = this.calculateAgeMars() - Math.floor(this.calculateAgeMars());
    return 687 * (1 - age);
  }

  calculateAgeJupiter() {
    let ms = new Date(this.age);
    let currentDate = new Date();
    let ageNumber = currentDate.getTime() - ms.getTime();
    let jupiterNumber = parseFloat(ageNumber) / 11.86;
    let jupiterYear = jupiterNumber / 31557600000;
    console.log("Jupiter: " + jupiterYear);
    return jupiterYear;
  }

  calculateJupiterLifeExpectancy(expectancy) {
    let age = this.calculateAgeJupiter();
    let expectancyYear = parseFloat(expectancy) / 11.86;
    let yearsLeft = expectancyYear - age;
    console.log("Jupiter: " + yearsLeft);
    return yearsLeft;
  }

  calculateNextBirthdayJupiter() {
    let age = this.calculateAgeJupiter() - Math.floor(this.calculateAgeJupiter());
    return (1 - age) * 4300;
  }

}
