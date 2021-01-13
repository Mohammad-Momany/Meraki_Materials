// Q1
// Write a function countWords that accepts a string and returns an object that has all unique words as keys and the number of times the word was found in the string as a value.

const countWords = function (string) {
  // TODO: Your code here
};

countWords("hello hello world"); // => { "hello": 2, "world": 1 }
countWords("hello"); // => { "hello": 1 }
countWords(""); // => {}

// Q2
// Write a function averageGrade that accepts an array of student grades as values and returns the average grade and if the array is empty return "Please enter at least one grade".

const averageGrade = function (grades) {
  if (grades.length === 0) {
    return "Please enter at least one grade";
  }
  let gradeAvg = 0;
  grades.map((grade) => {
    gradeAvg += grade;
  });
  return gradeAvg / grades.length;
};

// Q3
// Write a function evenLengthOddIndex that accepts an array of strings and returns a new array of only the even length words that are in an odd index.

const evenLengthOddIndex = function (array) {
  return array.filter((arr, index) => {
    return arr.length % 2 === 0 && index % 2 !== 0;
  });
};

// Q4
// Write a function incrementByIndex that accepts and array of nested arrays that hold numbers as values and returns an array were each element of the nested arrays is incremented by the index of that nested array.

const incrementByIndex = function (array) {
  // TODO: Your code here
};

// the first nested array's values were incremented by 0 since it is the first index, second nested array was incremented by 1 and last one by 2
incrementByIndex([
  [1, 2, 3],
  [2, 7, 9],
  [10, 3, 44],
]); // => [[1, 2, 3], [3, 8, 10], [12, 5, 46]]

// Q5
// Write a function orderByType that accepts an array of mixed type values and returns a new array with the same values but ordered by type, meaning all the strings first then all numbers then all booleans.

const orderByType = function (array) {
  let strings = [];
  let arrays = [];
  let booleans = [];
  array.filter((arr) => {
    if (typeof arr === "string") {
      strings.push(arr);
    } else if (typeof arr === "number") {
      arrays.push(arr);
    } else if (typeof arr === "boolean") {
      booleans.push(arr);
    }
  });
  return strings.concat(arrays).concat(booleans);
};

// ===================================================================Extra Practice====================================================================

// Q1
// Write a function loop that accepts two arguments an array and a callback function,
//  the function loop should enable us to access all the values in the array and gives us the ability to modify the elements by using the callback function
//   (Just like forEach).

const loop = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};
