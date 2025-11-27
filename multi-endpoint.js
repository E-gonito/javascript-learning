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


