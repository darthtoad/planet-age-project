import { Calculator } from "./../js/scripts.js";

describe('Calculator', function(){

  it ('should instantiate Calculator correctly', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc instanceof Calculator);
  })

  it ('should calculate age in Mercury years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateAgeMercury() instanceof Number);
  })

  it ('should calculate age in Venus years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateAgeVenus() instanceof Number);
  })

  it ('should calculate age in Mars years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateAgeMars() instanceof Number);
  })

  it ('should calculate age in Jupiter years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateAgeJupiter() instanceof Number);
  })

  it ('should return life expectancy in Mercury years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateMercuryLifeExpectancy(81) > 50).toBe(true);
  })

  it ('should return life expectancy in Venus years', function(){
    let newCalc = new Calculator("06-15-1987");
    expect(newCalc.calculateVenusLifeExpectancy(81) > 50).toBe(true);
  })
})
