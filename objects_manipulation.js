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

// Exercise 2
salaries2 = salaries;
const topSalary = (salaries) => {
  let maxSalary = 0;
  let maxName = null;
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
};

// https://javascript.info/keys-values-entries
// Exercise 1
const sumSalarys = (salaries) => {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
};

// Exercise 2
const countProps = (obj) => {
  return Object.keys(obj).length;
};

// Exercise 21: Count properties in object
const config = { host: "localhost", port: 3000, timeout: 5000 };
// Count number of properties using Object.keys()
const countConfigProps = (config) => {
  return Object.keys(config).length;
};
// Expected: 3

// Exercise 22: Sum all numeric values in object
const scores = { math: 90, science: 85, english: 92 };
// Calculate total of all scores using Object.values() and reduce
const scoreTotal = (scores) => {
  return Object.values(scores).reduce((total, score) => total + score, 0);
};
// Expected: 267

// Exercise 23: Transform object to array of formatted strings
const inventory = { apples: 10, bananas: 5, oranges: 8 };
// Convert to array of strings in format "item: quantity"
// Use Object.entries()
const convertToStrArray = (obj) => {
  return Object.entries(obj);
};
// Expected: ["apples: 10", "bananas: 5", "oranges: 8"]

// Exercise 24: Safely access deeply nested property
const data = {
  user: {
    profile: {
      settings: null,
    },
  },
};
// Get data.user.profile.settings.theme without error
// Use optional chaining with nullish coalescing to provide default "light"
const userLightSetting = data.user?.profile?.settings ?? "light";
// Expected: "light"

// Exercise 25: Filter object properties
const product = {
  id: 1,
  name: "Widget",
  price: 0,
  inStock: true,
  discount: null,
};
// Create new object excluding properties with null or undefined values
// Use Object.entries(), filter, and Object.fromEntries()
const validProduct = Object.fromEntries(
  Object.entries(product).filter(
    ([property, value]) => value !== null && value !== undefined
  )
);
// Expected: { id: 1, name: "Widget", price: 0, inStock: true }

// Exercise 26: Invert object (swap keys and values)
const statusCodes = { ok: 200, notFound: 404, serverError: 500 };
// Create new object where values become keys and keys become values
// Use Object.entries() and Object.fromEntries()
const codesStatus = Object.fromEntries(
  Object.entries(statusCodes).map(([status, code]) => [code, status])
);
// Expected: { 200: "ok", 404: "notFound", 500: "serverError" }

// Exercise 27: Merge multiple objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };
// Combine all three objects (later objects override earlier)
const mergedObject = { ...obj1, ...obj2, ...obj3 };
// Expected: { a: 1, b: 3, c: 5, d: 6 }

// Exercise 28: Group array of objects by property
const transactions = [
  { id: 1, type: "debit", amount: 100 },
  { id: 2, type: "credit", amount: 200 },
  { id: 3, type: "debit", amount: 50 },
];
// Group transactions by type property
// Use reduce to build object with type as keys
// Expected: {
//   debit: [{ id: 1, type: "debit", amount: 100 }, { id: 3, type: "debit", amount: 50 }],
//   credit: [{ id: 2, type: "credit", amount: 200 }]
// }
const transactionInfo = transactions.reduce(
  (transactionGroups, transaction) => {
    (transactionGroups[transaction.type] =
      transactionGroups[transaction.type] || []).push(transaction);
    return transactionGroups;
  },
  {}
);

// Exercise 29: Pick specific properties from object
const userFull = {
  id: 1,
  name: "Alice",
  password: "secret",
  email: "alice@example.com",
};
// Create new object containing only id, name, and email (exclude password)
// Use destructuring or Object.entries() with filter
const { id, name: firstName, email } = userFull;
const newUser = { id, firstName, email };
// Expected: { id: 1, name: "Alice", email: "alice@example.com" }

// Exercise 30: Check if object has all required properties
const requiredKeys = ["id", "name", "email"];
const user1 = { id: 1, name: "Alice", email: "alice@example.com" };
const user2 = { id: 2, name: "Bob" };
// Write function that returns true if object contains all required keys
// Use Object.keys() or every()
const hasRequiredKeys = (requiredKeys, user) => {
  return requiredKeys.every((key) => key in user);
};
// Expected: hasRequiredKeys(user1, requiredKeys) === true
// Expected: hasRequiredKeys(user2, requiredKeys) === false
