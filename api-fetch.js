/*
Requirements:
1. Extract only four properties per user: id, name, email, and city (found at address.city)
2. Keep only users whose city name starts with a letter between A and M (case-insensitive)
3. Sort the filtered results alphabetically by name
4. Display each user in this format:

ID: 1
Name: Chelsey Dietrich
Email: Lucio_Hettinger@annie.ca
City: McKenziehaven
*/

async function getUserData() {
  // Step 1: Fetch all users from the API
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const users = await response.json();

    // Step 2: Transform the data
    // Extract only: id, name, email, city (from address.city)
    // Filter users whose city name starts with A-M
    // Sort results by name alphabetically
    const simplifiedUsers = users
      .map(({ id, name, email, address }) => ({
        id,
        name,
        email,
        city: address.city,
      }))
      .filter(
        (user) =>
          user.city[0].toUpperCase() <= "M" && user.city[0].toUpperCase() >= "A"
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    // Step 3: Display formatted output
    for (let user of simplifiedUsers) {
      console.log(`ID: ${user.id}`);
      console.log(`Name: ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log(`City: ${user.city} \n`);
    }
  } catch (error) {
    console.error("Failed:", error.message);
  }
}

getUserData();
