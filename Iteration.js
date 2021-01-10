// Q1
// Write a function sum that accepts an array of numbers and returns the sum of the numbers.

const sum = (numbers) => {
  let sumNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNum += numbers[i];
  }
  return sumNum;
};

// Q2
// Write a function onlyOddNumbers that accepts an array of numbers and returns a new array with only the odd numbers.
const filter = (numbers) => {
  let oddNum = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      oddNum.push(numbers[i]);
    }
  }
  return oddNum;
};

// Q3
// Write a function maximumNumber that accepts an array of numbers and returns the max number in the array.

const maximumNumber = (numbers) => {
  let maxNum = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
};

// Q4
// Write a function totalBill that accepts an object representing separate bills and returns the sum of all bills.

const totalBill = (billsObject) => {
  let objectSum = 0;
  for (let key in billsObject) {
    objectSum += billsObject[key];
  }
  return objectSum;
};

// ===================================================================Extra Practice====================================================================

// Q1
// Write a function onlyEven that accepts an array of numbers and returns the same array with only the even numbers.
const onlyEven = (numbers) => {
  let oddNum = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddNum.push(numbers[i]);
    }
  }
  return oddNum;
};

// Q2
// Write a function sort that accepts an unordered array of numbers and returns the same array in a descending order.

// const sort = (numbers) => {
//   let numSort = [];
//   for (let i = 0; i < numbers.length; i++) {
//     let str = Math.max(...numbers);
//     numSort.push(str);
//     let index = numbers.indexOf(str);
//     numbers = numbers.slice(0, index);
//   }
//   return numSort;
// };

// Q3
// Write a function compare that accepts an object with numerical keys and returns an array containing the values with the corresponding index.

const convertToArray = (object) => {
  return Object.values(object);
};

// Q4
// Write a function compare that accepts an array and an object and returns true if all the array values are present as object values.

const compare = (array, object) => {
  let includes = [];
  object = Object.values(object);
  for (let i = 0; i < array.length; i++) {
    if (object.includes(array[i])) {
      includes.push(array[i]);
    }
  }
  return includes.length === array.length;
};

// Q5
// Write a function deleteKeys that accepts an array and an object and returns the same object after removing all key-value pairs depending on the values in the array,
//  the array will contain the key names that must be removed from the object.

const deleteKeys = (array, object) => {
  for (let i = 0; i < array.length; i++) {
    if (object[array[i]]) {
      delete object[array[i]];
    }
  }
  return object;
};

// Q6
// Write a function sum that returns the sum of all arguments passed to the function, make sure not to use parameters.

const sum = () => {
  let sumNum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumNum += arguments[i];
  }
  return sumNum;
};
