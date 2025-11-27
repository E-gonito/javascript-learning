// Exercise 1
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json(); // BUG HERE // FIXED
  })
  .then((user) => {
    console.log(user.name); // This will error
  })
  .catch((error) => console.log("Error:", error.message));
