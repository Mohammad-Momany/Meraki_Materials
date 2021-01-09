// Practice

// Q2
// Write a function fullName that accepts string arguments, firstName and lastName then returns a string containing your full name combined

const fullName = (firstName, lastName) => {
    return firstName + " " + lastName;
  };
  
  // Q3
  // Write a function average that accepts two number arguments and returns the average of these numbers
  
  const average = (a, b) => {
    return (a + b) / 2;
  };
  
  // Q4
  // Using the defined functions below and your average function to guess the output of the following expressions
  
  const square = (number) => {
    return number * number;
  };
  
  const cube = (number) => {
    return number * number * number;
  };
  
  // cube(25) + 20; // => 15645
  // square(5) + cube(2); // => 33
  // square(10 / 5) + cube(2 + 1); // => 31
  // average(square(average(6, 2)), cube(4)); // => 40
  
  // Q5
  // Write a function toThePowerOf that accepts two number arguments, base, exponent and returns the base to the exponent power
  
  const toThePowerOf = (base, exponent) => {
    return Math.pow(base, exponent);
  };
  
// ===================================================================Extra Practice====================================================================  
  
  // Q1
  // Write a function floor that accepts one number argument, number and returns the number as an integer.
  
  const floor = (number) => {
    return Math.floor(number);
  };
  // Q2
  //   Write a function calculateProfit that accepts three arguments unitsSold, unitCost, unitPrice and returns the net profit.
  
  const calculateProfit = (unitsSold, unitCost, unitPrice) => {
    return unitsSold * (unitPrice - unitCost);
  };
  
  // Q3
  // Write a function calculateTotalBillAmount that accepts three arguments total, taxPercentage, tip and returns the total after adding the tax and the tip.
  
  const calculateTotalBillAmount = (total, taxPercentage, tip) => {
    return total * (taxPercentage + 1) + tip;
  };
  
  // Q4
  // Write a function ageInDays that accepts a number argument ageInYears and returns the age in days (ignore leap years).
  
  const ageInDays = (ageInYears) => {
    return 365 * ageInYears;
  };
  
  // Q5
  //   Write two functions calculateConeVolume and calculateConeSurfaceArea that accepts two number arguments height and radius and returns the volume and surface area for a Right Circular Cone
  
  const calculateConeVolume = (height, radius) => {
      // TODO: Your code here
    };
    const calculateConeSurfaceArea = (height, radius) => {
      // TODO: Your code here
    };
  