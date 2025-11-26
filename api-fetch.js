async function getUserData() {
  // Step 1: Fetch all users from the API
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  // Step 2: Transform the data
  // Extract only: id, name, email, city (from address.city)
  // Filter users whose city name starts with A-M
  // Sort results by name alphabetically

  // Step 3: Display formatted output
}

getUserData();
```

Requirements:
1. Extract only four properties per user: id, name, email, and city (found at address.city)
2. Keep only users whose city name starts with a letter between A and M (case-insensitive)
3. Sort the filtered results alphabetically by name
4. Display each user in this format:

ID: 1
Name: Chelsey Dietrich
Email: Lucio_Hettinger@annie.ca
City: McKenziehaven
```;
