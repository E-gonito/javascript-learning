// You need a loop that tries maxRetries times
// Each iteration should:
//   1. Try the fetch
//   2. If success → return the result
//   3. If failure → decide: retry or throw?
//   4. Before retry → wait (exponentially longer)

async function fetchWithRetry(url, maxRetries = 3) {
  for (let i = 0; i <= maxRetries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP: ${response.status}`);
      }
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      if (i === maxRetries) {
        throw new Error(`No more retries left! No. Retries = ${maxRetries}`);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 2 ** i * 1000));
      }
    }
  }
}

async function fetchAllData() {
  const BASE = "https://jsonplaceholder.typicode.com";
  const response = await Promise.allSettled([
    fetchWithRetry(`${BASE}/users`),
    fetchWithRetry(`${BASE}/posts`),
    fetchWithRetry(`${BASE}/comments`),
  ]);

  let users, posts, comments;
  if (response[0].status === "fulfilled") {
    users = response[0].value;
  } else {
    throw new Error("Failed to fetch users");
  }
  if (response[1].status === "fulfilled") {
    posts = response[1].value;
  } else {
    throw new Error("Failed to fetch posts");
  }
  if (response[2].status === "fulfilled") {
    comments = response[2].value;
  } else {
    comments = [];
  }
  return { users, posts, comments };
}

const enrichPosts = (data) => {
  const users = data.users;
  const posts = data.posts;
  const comments = data.comments;
  const findNameFromId = (users, id) => {
    return users.find((user) => user.id === id).name;
  };
  const countCommentsForPost = (comments, postId) => {
    return comments.reduce(
      (total, comment) => (comment.postId === postId ? total + 1 : total),
      0
    );
  };
  const enrichedPosts = posts.map((post) => {
    return {
      ...post,
      authorName: findNameFromId(users, post.userId),
      commentCount: countCommentsForPost(comments, post.id),
    };
  });
  return enrichedPosts;
};

const main = async () => {
  try {
    console.log("Fetching Data...");
    const data = await fetchAllData();

    console.log("Enriching Posts...");
    const enrichedPosts = enrichPosts(data);

    console.log("First enriched post:", enrichedPosts[0]);
    console.log(`Total posts: ${enrichedPosts.length}`);
  } catch (error) {
    console.error(`Error!: ${error}`);
  }
};

main();
