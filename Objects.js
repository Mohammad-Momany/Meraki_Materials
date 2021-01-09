// Q3
// Write a factory function createCar that accepts three string arguments brand, name, color and returns an object representing the car.

const createCar = (brand, name, color) => {
  return { brand: brand, name: name, color: color };
};

// Q4
// Write a function getFullName that accepts an object representing a person and returns that person's full name in a string.

const getFullName = (person) => {
  return person.first + " " + person.middle + " " + person.last;
};

// Q5
// Write a function olderThan that accepts two objects personOne, personTwo and returns a string that represent who is older than the other.

const olderThan = (personOne, personTwo) => {
  if (personOne.age === personTwo.age) {
    return personOne.name + " is as old as " + personTwo.name;
  }
  return personOne.age > personTwo.age
    ? personOne.name + " is older than " + personTwo.name
    : personTwo.name + " is older than " + personOne.name;
};

// ===================================================================Extra Practice====================================================================

// Q2
// Write a factory function createIceCream that accepts Three arguments coneType, iceCreamFlavour, topping and returns and object representing the ice-cream.

const createIceCream = (coneType, iceCreamFlavour, topping) => {
  return {
    coneType: coneType,
    iceCreamFlavour: iceCreamFlavour,
    topping: topping,
  };
};

// Q4
// Write a function isValidUser that accepts an object representing login information and returns true if the User is valid otherwise return false, read the comments for more information.

const isValidUser = (loginInfo) => {
  const email = loginInfo.email;
  const password = loginInfo.password;
  const username = loginInfo.username.toLowerCase();
  return (
    email.length >= 6 &&
    password.length >= 8 &&
    email.includes("@") &&
    email.includes(".com") &&
    email === users[username].email &&
    password === users[username].password
  );
};

// Q5
// Write a function isPropertyOf that accepts a string and an object and return true if the string is a property of the object and return false if it isn't.

const isPropertyOf = (string, object) => {
  return string === Object.keys(object).join(" ");
};
