// Q4
// Write a function addToList that accepts a string argument toDo and returns the current list as a string, every time we invoke the function it should return the old toDo item + the new one

let toDos = "";
const addToList = (toDo) => {
  return (toDos = toDos + " " + toDo);
};

// Q5
// Write two functions deposit and withdraw that accepts a number argument amount and returns the current account balance

let currentAccountBalance = 0;

const deposit = (amount) => {
  return (currentAccountBalance += amount);
};

const withdraw = (amount) => {
  return (currentAccountBalance -= amount);
};

// ===================================================================Extra Practice====================================================================

// Q1
// Write a function minMax that accepts a number argument number and returns a string representing the maximum number and the minimum number, read the comments for more information.

let nums = [];
const minMax = (number) => {
  nums.push(number);
  return `the maximum number is: ${Math.max(
    ...nums
  )} and the minimum number is ${Math.min(...nums)} `;
};

// Q2
// Predict the correct value of the variables.

const a = 10;
let b = 1;
const functionOne = () => {
  b = 20;
  let c = 5;
  const functionTwo = () => {
    let d = 5;
    c = 8;
    b = a + b + c + d;
  };
  functionTwo();
};
const functionThree = () => {
  a = 20;
};

functionOne();
// functionThree(); The value cannot be changed const

// a; => 10
// b; 43
// c; => not defined
// d: => not defined

// Q3
// Modify the rockPaperScissors function from the previous lesson
// to save the score of how many times the user has won and how many the user has lost and return the score with every invocation.
// &&
// Q4
// Modify the rockPaperScissors function to have a score limit such as winning five times then reset the score back to zero.

const random = () => {
  const result = Math.ceil(Math.random() * 3);

  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
let win = 0;
let lose = 0;
let maxLimit = 5;
const rockPaperScissors = (move) => {
  const randomMove = random();
  if (win + lose === maxLimit) {
    win = 0;
    lose = 0;
  }
  if (move === randomMove) {
    return "it is a draw";
  } else if (move === "rock") {
    return randomMove === "scissors"
      ? `Won: ${(win += 1)}, Lost:${lose}`
      : `Won: ${win}, Lost:${(lose += 1)}`;
  } else if (move === "paper") {
    return randomMove === "rock"
      ? `Won: ${(win += 1)}, Lost:${lose}`
      : `Won: ${win}, Lost:${(lose += 1)}`;
  } else if (move === "scissors") {
    return randomMove === "paper"
      ? `Won: ${(win += 1)}, Lost:${lose}`
      : `Won: ${win}, Lost:${(lose += 1)}`;
  }
  return "invalid move";
};
