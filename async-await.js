// Promise based api fetching
/*
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    console.log(user.name);
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
  })
  .then((response) => response.json())
  .then((posts) => {
    console.log(posts.length);
  });
*/

// Promises converted to async/await
async function getUserPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const user = await response.json();
    console.log(user.name);
    const posts = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const postsJson = await posts.json();
    console.log(postsJson.length);
  } catch (error) {
    console.error(`Oh no! Error: ${error}`);
  }
}
//getUserPosts();

// Parallel requests
async function getThreeUsers() {
  // Fetch users 1, 2, 3 in parallel
  // Log all three names
  try {
    const responses = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/1`),
      fetch(`https://jsonplaceholder.typicode.com/users/2`),
      fetch(`https://jsonplaceholder.typicode.com/users/3`),
    ]);
    responses.forEach((response) => {
      if (!response.ok) {
        throw new Error(`HTTP: ${response.status}`);
      }
    });
    const users = await Promise.all(
      responses.map((response) => response.json())
    );
    users.forEach((user) => console.log(user.name));
    return users;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
//getThreeUsers();

