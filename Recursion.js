// Q1
// Write a function sumCubes that accepts an array and returns the sum of the cubed numbers.

const sumCubes = (number) => {
  if (number.length === 0) {
    return 0;
  }
  return Math.pow(number.shift(), 3) + sumCubes(number);
};

// Q2
// Write a function factorial that accepts a number and returns the factorial of that number.

const factorial = (number) => {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

// Q3
// Write a function getLength that accepts a string, and returns the length of the string.

const getLength = (string) => {
  let num = 0;
  if (string === "") {
    return 0;
  }
  return (num += 1 + getLength(string.slice(1)));
};

// Q4
// Write a function countCharacter that accepts a string, and a character and returns the number of times the character was repeated, using recursion.

const countCharacter = (string, character) => {
  if (string === "") {
    return 0;
  }
  if (string[0] === character) {
    return 1 + countCharacter(string.slice(1), character);
  }

  return countCharacter(string.slice(1), character);
};

// Q5
// Write a function oddOrEven that accepts a number and returns a string The number is even or The number is odd depending on whither the number is odd or even, do not use modulo operator %.

const oddOrEven = (number) => {
  if (number === 0) {
    return "even";
  } else if (number === 1) {
    return "odd";
  }
  return oddOrEven(number - 2);
};

// ===================================================================Extra Practice====================================================================

// Q1
// Write a function maximumNumber that accepts an array of numbers and returns the max number in the array.

const maximumNumber = (numbers) => {
  if (numbers.length === 1) {
    return numbers[0];
  }
  if (numbers[0] > numbers[1]) {
    numbers.splice(1, 1);
  } else {
    numbers.splice(0, 1);
  }
  return maximumNumber(numbers);
};

// Q2
// Write a function multiply that accepts two number argument's and returns the multiple of both numbers without using the * operator.
const multiply = function (numberOne, numberTwo) {
  if (numberTwo === 0) {
    return 0;
  }
  return numberOne + multiply(numberOne, numberTwo - 1);
};

// Q3
// Write a function familyTree that accepts an object representing a family tree and returns a string containing all names in the tree from the top to bottom.

const family = {
  name: "John",
  child: {
    name: "Bill",
    child: {
      name: "Mark",
      child: {
        name: "Terry",
        child: null,
      },
    },
  },
};

const familyTree = (family) => {
  // TODO: Your code here
};

familyTree(family); // => "John Bill Mark"

// Q4
// Write a function flattenArray that accepts a nested array and returns a one dimensional array.

const flattenArray = (array) => {
  return array.join().split(" ");
};
