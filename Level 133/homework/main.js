
async function getUser() {

  const num = Math.floor(Math.random() * 15) + 1; 

  const url = `https://jsonplaceholder.typicode.com/users/${num}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(`User with id ${num} not found`)
    }

    const user = await response.json();
    console.log("user found succesfully", user);
    return user
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUser()
  .then(user => console.log("resolved users name:", user.name))
  .catch(err => console.log("reject:", err.message));



