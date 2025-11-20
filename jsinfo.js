// https://javascript.info/object task 1
let user = {};

user["name"] = "John";
user["surname"] = "Smith";
user["name"] = "Pete";
delete user["name"];

// Task 2, check if object is empty
const isEmpty = (object) => {
  for (let key in object) {
    return false;
  }
  return true;
};

// Task 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sumSalaries = (salaries) => {
  let salarySum = 0;
  for (let salary in salaries) {
    salarySum += salaries[salary];
  }
  return salarySum;
};

// Task 4
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
const multiplyNumeric = (menu) => {
  for (let key in menu) {
    if (typeof menu[key] == "number") {
      menu[key] *= 2;
    }
  }
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};

// Arrays
let fruits = ["apple", "pear", "Strawberry"];

// https://javascript.info/object-copy Task 1

const camelize = (str) => {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};
