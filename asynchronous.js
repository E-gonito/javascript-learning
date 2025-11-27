// Exercise 5
fetch("https://jsonplaceholder.typicode.com/users/999") // Invalid ID
  .then((response) => response.json())
  .then((user) => console.log(user.name))
  .catch((error) => console.log("Caught:", error.message)); // Does not execute
// Fix
fetch("https://jsonplaceholder.typicode.com/users/999")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((user) => console.log(user.name))
  .catch((error) => console.log("Caught:", error.message));
