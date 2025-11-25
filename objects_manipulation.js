// https://javascript.info/object
//Exercise 1: Hello, object
const user = {
  name: "John",
  surname: "Smith",
};
user.name = "Pete";
delete user.name;

// Exercise 2: Check for emptiness
const isEmpty = (obj) => {
  for (let prop in obj) {
    return false;
  }
  return true;
};

// Exercise 3: SUm object properties
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sumSalaries = (salaries) => {
  let sum = 0;
  for (let salary in salaries) {
    sum += salaries[salary];
  }
  return sum;
};
