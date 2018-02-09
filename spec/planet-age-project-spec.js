import { Calculator } from "./../js/scripts.js";

describe('Calculator', function(){

  it ('should instantiate Calculator correctly', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc instanceof Calculator);
  })

  it ('should calculate age in Mercury years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateAgeMercury()).toBeGreaterThan(30);
    expect(newCalc.calculateAgeMercury()).toBeLessThan(10000000000);
  })

  it ('should calculate age in Venus years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateAgeVenus()).toBeGreaterThan(30);
    expect(newCalc.calculateAgeVenus()).toBeLessThan(5000);
  })

  it ('should calculate age in Mars years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateAgeMars()).toBeGreaterThan(10);
    expect(newCalc.calculateAgeMars()).toBeLessThan(30);
  })

  it ('should calculate age in Jupiter years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateAgeJupiter()).toBeGreaterThan(0);
    expect(newCalc.calculateAgeJupiter()).toBeLessThan(5);
  })

  it ('should return life expectancy in Mercury years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateMercuryLifeExpectancy(81)).toBeLessThan(5000000);
    expect(newCalc.calculateMercuryLifeExpectancy(81)).toBeGreaterThan(0);
  })

  it ('should return life expectancy in Venus years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateVenusLifeExpectancy(81)).toBeLessThan(300);
    expect(newCalc.calculateVenusLifeExpectancy(81)).toBeGreaterThan(0);
  })

  it ('should return life expectancy in Mars years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateMarsLifeExpectancy(81)).toBeGreaterThan(0);
    expect(newCalc.calculateMarsLifeExpectancy(81)).toBeLessThan(50);
  })

  it ('should return life expectancy in Jupiter years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateJupiterLifeExpectancy(81)).toBeGreaterThan(0);
    expect(newCalc.calculateJupiterLifeExpectancy(81)).toBeLessThan(10);
  })
})
