// https://javascript.info/object
//Exercise 1: Hello, object
const user = {
  name: "John",
  surname: "Smith",
  years: 40,
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

// Exercise 3: Sum object properties
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

// Exercise 4: multiplyNumeric
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (menu) => {
  for (let key in menu) {
    if (Number.isInteger(menu[key])) {
      menu[key] *= 2;
    }
  }
};

//https://javascript.info/object-copy
const man = {
  name: "Man",
  price: 200,
  limbs: { arms: 2, legs: 2 },
};
man1 = man;
man2 = man1;
man2.price = 100; // console.log(man.price) = 100
man2 === man; // True, both reference same object
const man3 = Object.assign({}, man); //Shallow copy
const man4 = structuredClone(man); //Deep copy, but not for functions

//https://javascript.info/destructuring-assignment
// Exercise 1
const { name, surname, years: age, isAdmin = false } = user;
