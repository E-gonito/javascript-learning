// https://javascript.info/object task 1
const objectTask1 = () => {
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
};

// Task 3
const objectTask3 = () => {
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
};

// Task 4
// before the call
const objectTask4 = () => {
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
};

// Arrays
const arraysTask1 = () => {
  let fruits = ["apple", "pear", "Strawberry"];
};

// Arrays Task 2
const arraysTask2 = () => {
  let styles = ["Jazz", "Blues"];
  styles.push("Rock-n-roll");
  styles[Math.floor(styles.length - 1 / 2)] = "Classics";
  styles.shift();
  styles.unshift("Rap", "Reggae");
};

// https://javascript.info/object-copy Task 1

const camelize = (str) => {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

const getMaxSubSum = (arr) => {
  maxSubSum = 0;
  currentSubSum = 0;
  for (let num of arr) {
    currentSubSum += num;
    maxSubSum = Math.max(maxSubSum, currentSubSum);
    if (currentSubSum < 0) currentSubSum = 0;
  }
  return maxSubSum;
};

const filterRange = (arr, a, b) => {
  return arr.filter((num) => num >= a || num <= b);
};

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i <= arr.length; i++) {
    if (!(arr[i] >= a && arr[i] <= b)) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

const sortDesc = (arr) => {
  return arr.sort((a, b) => b - a);
};

const copySorted = (arr) => {
  let sortedArr = arr;
  return sortedArr.slice().sort();
};

const Calculator = () => {
  let operations = { "+": (a, b) => a + b, "-": (a, b) => a - b };
  const methods = {
    calculate: (calculation) => {
      const arrCalc = calculation.split(" ");
      const a = Number(arrCalc[0]);
      const op = arrCalc[1];
      const b = Number(arrCalc[2]);
      const calcFunction = operations[op];
      return calcFunction(a, b);
    },
    addMethod: (operator, method) => {
      operations[operator] = method;
      return;
    },
  };
  return methods;
};

const convertObjToArr = (users) => {
  namesArr = [];
  for (let user of users) {
    namesArr.push(user.name);
  }
  return namesArr;
};

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];
console.log(convertObjToArr(users));
