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
})
