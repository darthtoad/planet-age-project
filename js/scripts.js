export class Calculator {
  constructor(age) {
    this.age = age;
  }

  calculateAgeMercury() {
    console.log(this.age);
    let ms = new Date(this.age);
    console.log(ms);
    let ageNumber = ms.getTime();
    let mercuryNumber = parseFloat(ageNumber) / .24;
    let mercuryYear = mercuryNumber / 31536000000;
    return mercuryYear;
  }

  calculateAgeVenus() {
    console.log(this.age);
    let ms = new Date(this.age);
    console.log(ms);
    let ageNumber = ms.getTime();
    let venusNumber = parseFloat(ageNumber) / .62;
    let venusYear = venusNumber / 31536000000;
    return venusYear;
  }

  // calculateAgeMars() {
  //   console.log(this.age);
  //   let ms = new Date(this.age);
  //   console.log(ms);
  //   let ageNumber = ms.getTime();
  //   let marsNumber = parseFloat(ageNumber) / 1.88;
  //   let marsYear = marsNumber / 31536000000;
  //   return marsYear;
  // }
  //
  // calculateAgeJupiter() {
  //   console.log(this.age);
  //   let ms = new Date(this.age);
  //   console.log(ms);
  //   let ageNumber = ms.getTime();
  //   let jupiterNumber = parseFloat(ageNumber) / 11.86;
  //   let jupiterYear = jupiterNumber / 31536000000;
  //   return jupiterYear;
  // }

}
