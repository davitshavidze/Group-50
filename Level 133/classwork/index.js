
async function fetchAllData() {
  const getUserInfo = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username: "Davit", age: 22, location: "Tbilisi, Gldani" });
    }, 1200);
  });

  const getUserPosts = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { postName: "Summer Vibes", PostImage: "summer.jpg" },
        { postName: "Coding Time", PostImage: "code.png" },
        { postName: "Mountain Trip", PostImage: "mountain.jpeg" },
      ]);
    }, 800);
  });

  const getUserFriends = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Davit", age: 15 },
        { name: "Vano", age: 20 },
        { name: "Gio", age: 13 },
      ]);
    }, 1500);
  });

  const results = await Promise.all([
    getUserInfo,
    getUserPosts,
    getUserFriends,
  ]);

  results.forEach((data) => {
    console.log(data);
  });
}

fetchAllData();
