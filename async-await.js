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

// Promises converted to async/await
async function getUserPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();
  console.log(user.name);
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
  );
  const postsJson = await posts.json();
  console.log(postsJson.length);
}

getUserPosts();
