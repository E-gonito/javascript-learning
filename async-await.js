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

// One rejects fails the rest, lose all results (fail-fast)
async function testPromiseAll() {
  try {
    const results = await Promise.all([
      Promise.resolve("Success 1"),
      Promise.reject("Failed!"),
      Promise.resolve("Success 3"),
    ]);
    console.log("Results:", results);
  } catch (error) {
    console.log("Caught:", error);
  }
}

// using Promise.allSettled when you want all results with failures
async function testPromiseAllSettled() {
  const results = await Promise.allSettled([
    Promise.resolve("Success 1"),
    Promise.reject("Failed!"),
    Promise.resolve("Success 3"),
  ]);

  console.log("Results:", results);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index}: Success -`, result.value);
    } else {
      console.log(`Promise ${index}: Failed -`, result.reason);
    }
  });
}

async function testPromiseRace() {
  const result = await Promise.race([
    new Promise((resolve) => setTimeout(() => resolve("Slow: 2s"), 2000)),
    new Promise((resolve) => setTimeout(() => resolve("Fast: 500ms"), 500)),
    new Promise((resolve) => setTimeout(() => resolve("Medium: 1s"), 1000)),
  ]);

  console.log("Winner:", result);
}

async function testPromiseRaceWithFailure() {
  try {
    const result = await Promise.race([
      new Promise((_, reject) =>
        setTimeout(() => reject("Fast fail: 200ms"), 200)
      ),
      new Promise((resolve) =>
        setTimeout(() => resolve("Slow success: 1s"), 1000)
      ),
    ]);
    console.log("Result:", result);
  } catch (error) {
    console.log("Caught:", error);
  }
}

function fetchWithTimeout(url, timeoutMs) {
  const fetchPromise = fetch(url);

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Request timed out")), timeoutMs);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
}

// Test it
fetchWithTimeout("https://jsonplaceholder.typicode.com/users/1", 1)
  .then((response) => response.json())
  .then((user) => console.log(user.name))
  .catch((error) => console.log("Error:", error.message));
