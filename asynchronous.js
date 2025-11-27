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
// Exercise 3
function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John" });
    }, 100);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Post 1", userId: userId },
        { id: 2, title: "Post 2", userId: userId },
      ]);
    }, 100);
  });
}

// Now use them:
getUserData(1)
  .then((user) => {
    console.log("User:", user.name);
    return getUserPosts(user);
  })
  .then((posts) => {
    console.log("Posts:", posts.length);
  });

// Someone tried to fetch 3 users in parallel
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((r) => r.json())
  .then((user1) => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((r) => r.json())
      .then((user2) => {
        fetch("https://jsonplaceholder.typicode.com/users/3")
          .then((r) => r.json())
          .then((user3) => {
            console.log([user1, user2, user3]);
          });
      });
  });

const promise1 = fetch("https://jsonplaceholder.typicode.com/users/1").then(
  (r) => r.json()
);

const promise2 = fetch("https://jsonplaceholder.typicode.com/users/2").then(
  (r) => r.json()
);
const promise3 = fetch("https://jsonplaceholder.typicode.com/users/3").then(
  (r) => r.json()
);

Promise.all([promise1, promise2, promise3]).then((results) => {
  console.log(results);
});

