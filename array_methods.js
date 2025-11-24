// Exercise 1
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Carol", age: 35 },
];
// Extract all names into array
const names = users.map((user) => user.name);
// Expected: ["Alice", "Bob", "Carol"]

// Exercise 2
// Filter users with age greater than 28
const adults = users.filter((user) => user.age > 28);
// Expected: [{id: 2, name: "Bob", age: 30}, {id: 3, name: "Carol", age: 35}]

// Exercise 3
// Calculate sum of all ages
const sumOfAges = users.reduce((sum, user) => (sum += user.age), 0);
// Expected: 90

// Exercise 4
// Find user with id equal to 2
const userWithID2 = users.find((user) => user.id === 2);
// Expected: {id: 2, name: "Bob", age: 30}

// Exercise 5
// Check if any user is under 20 years old
const isAnyUserUnder20 = users.some((user) => user.age < 20);
// Expected: false

// Exercise 6
// Check if all users are adults (age >= 18)
const isAllAdults = users.every((user) => user.age >= 18);
// Expected: true

// Exercise 7
// Transform users into sentences: "Name is Age years old"
const userSentences = users.map(
  (user) => `${user.name} is ${user.age} years old`
);
// Expected: ["Alice is 25 years old", "Bob is 30 years old", "Carol is 35 years old"]

// Exercise 8
// Count users over 30 using reduce
// Expected: 1

// Exercise 9
// Group users by age bracket using reduce
// Create object with two properties: under30 (array), over30 (array)
// Expected: {under30: [{id: 1, name: "Alice", age: 25}], over30: [{id: 2, name: "Bob", age: 30}, {id: 3, name: "Carol", age: 35}]}

// Exercise 10
// Chain operations: get names of users over 28, sorted alphabetically
// Expected: ["Bob", "Carol"]
