// Q3
const login = (username, password) => {
  if (!(username.length > 4)) {
    return "Invalid login information, the username length must be greater than 4";
  } else if (!(password.length >= 8)) {
    return "Invalid login information, the password length must be greater or equal to 8";
  } else if (
    (username.toLowerCase() === "MrPotato".toLowerCase() &&
      password === "LonelyPotato") ||
    (username.toLowerCase() === "theWiseMan".toLowerCase() &&
      password === "12345678")
  ) {
    return "login successful";
  } else {
    return "Invalid login information, wrong username or password";
  }
};

// Q4
// Write a function isLeapYear that accepts a number argument year and returns true if the year is a leap year, leap years are divisible by 4 but non leap years are divisible by 100 for the exception of 400 (leap years are also divisible by 400)

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// Q5
// Write a function deposit that accepts an argument amount and returns the deposited amount, the function should only accept positive number arguments otherwise return "Please enter a valid number"

const deposit = (amount) => {
  if (typeof amount === "number" && amount > 0) {
    return amount;
  }
  return "Please enter a valid number";
};

// ===================================================================Extra Practice====================================================================

// Q1
// write a function `startsWith` that accept two string arguments `string`, `character` and returns true if the string starts with that character

const startsWith = (string, character) => {
  return string[0].toLowerCase() === character.toLowerCase();
};

// Q2
// Write a function endsWith that accept two string arguments string, character and returns true if the string ends with that character.

const endsWith = (string, character) => {
  return string[string.length - 1].toLowerCase() === character.toLowerCase();
};

// Q3
// Write a function rockPaperScissors that accepts a string argument with only the following values,
//  rock, paper, scissors and returns invalid move if anything else is passed and return you win,
//  you lose, and it is a draw depending on the user input and the random selected move,
//   read the comments for more explanation.

const random = () => {
  const result = Math.ceil(Math.random() * 3);

  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  }
  return "scissors";
};

const rockPaperScissors = (move) => {
  const randomMove = random();

  if (move === randomMove) {
    return "it is a draw";
  } else if (move === "rock") {
    return randomMove === "scissors" ? "you win" : "you lose";
  } else if (move === "paper") {
    return randomMove === "rock" ? "you win" : "you lose";
  } else if (move === "scissors") {
    return randomMove === "paper" ? "you win" : "you lose";
  }
  return "invalid move";
};

// Q4
// Write a function guessTheSquareRoot that accepts two number arguments number, squareRoot and returns a string correct if the guess is correct and returns incorrect if the guess is incorrect.

const guessTheSquareRoot = (number, squareRoot) => {
  if (Math.sqrt(number) === squareRoot) {
    return "Correct";
  }
  return "Incorrect";
};

// Q5
// Write a function search that accepts two string arguments string, letter and returns true if the letter is inside the string and returns false if it doesn't.

const search = (string, letter) => {
  return string.toUpperCase().split("").includes(letter.toUpperCase());
};
