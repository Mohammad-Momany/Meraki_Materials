// Q1
// write a function `reverseWords` that accepts a string argument and returns the same string if only
// one word was passed in, and if more than one is passed it will return a string of the words in a reverse order

const reverseWords = (string) => {
  return string.split(" ").reverse().join(" ");
};

// Q2
// Write a function addToLast that accepts two arguments an array,
//  value and returns an array with the value added to the end of the array while using unshift instead of push

const addToLast = (array, value) => {
  let arrlength = array.length;
  array[arrlength] = value;
  return array;
};

// Q3 P1
// write a function `getLength` that accepts an array and returns the
// length of the array without using the array's attribute `length`

const getLength = (array) => {
  return array.push();
};

// Q3 P2
// write a function `getFirstVal` that accepts an array and returns the
// first value of the array without using the index to access the value

const getFirstVal = (array) => {
  return array.shift();
};

// Q4
// Write a function updateOrCreate that accepts three arguments
//  an array, value, index and returns an updated array, check the output for more information on the updated array
const updateOrCreate = (array, value, index) => {
  array[index] = value;
  return array;
};

// Q5
//  Write a function `sliceArray` that accepts three arguments an ordered numeric `array` (unique numbers), `startVal`, `endVal`
// and returns an array starting at the `startVal` and ending at `endVal`

const sliceArray = (array, startVal, endVal) => {
  startVal = array.indexOf(startVal);
  endVal = array.indexOf(endVal) + 1;
  return array.slice(startVal, endVal);
};

// ===================================================================Extra Practice====================================================================

// Q1
// Write a function isPalindrome that accepts a string argument and returns whether the string is a palindrome or not.

const isPalindrome = (string) => {
  string = string.split(" ").join("");
  return string === string.split("").reverse().join("");
};

// Q2
// Write a function randomFruit that accepts an array of fruits and returns a random element from that array.

const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
const randomFruit = (array) => {
  let random = Math.floor(Math.random() * array.length);
  return array[random];
};

// Q3
// Write a function convertToString that accepts an array of strings and returns a string made out of the array values.

const convertToString = (array) => {
  return array.join(" ");
};

// Q4
// Write a function search that accepts an array of strings and a string then returns whether the string is inside of the array or not.

const search = (array, string) => {
  array = array.join(" ").toUpperCase().split(" ");
  string = string.toUpperCase();
  return array.includes(string);
};
