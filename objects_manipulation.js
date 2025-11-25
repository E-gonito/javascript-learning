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

