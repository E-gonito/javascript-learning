// Exercise 1
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json(); // BUG HERE // FIXED
  })
  .then((user) => {
    console.log(user.name); // This will error
  })
  .catch((error) => console.log("Error:", error.message));

// Exercise 2
Promise.resolve(5)
  .then((num) => {
    console.log("Step 1:", num);
    return num * 2; // ✓ Now it returns 10
  })
  .then((num) => {
    console.log("Step 2:", num); // Gets 10
    return num + 10; // Returns 20
  })
  .then((num) => {
    console.log("Step 3:", num); // Gets 20
  });
