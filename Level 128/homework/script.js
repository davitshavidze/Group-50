// Homework No.1

const step1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Step 1"), 1000));

const step2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Step 2"), 1000));

const step3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Step 3"), 1000));

step1()
  .then((result) => {
    console.log(result);
    return step2();
  })
  .then((result) => {
    console.log(result);
    return step3();
  })
  .then((result) => console.log(result));

// Homework No.2

const multiplyChain = new Promise((resolve) => resolve(5));

multiplyChain
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => num * 4)
  .then((final) => console.log(final));

// Homework No.3

const getUsername = new Promise((resolve) =>
  setTimeout(() => resolve("Gio"), 2000)
);

getUsername
  .then((name) => `Hello, ${name}!`)
  .then((greeting) => console.log(greeting));

// Homework No.4

const randomNumber = new Promise((resolve, reject) => {
  const num = Math.floor(Math.random() * 10) + 1;
  if (num > 5) {
    resolve(num);
  } else {
    reject(`Low number: ${num}`);
  }
});

randomNumber
  .then((num) => console.log(`High number: ${num}`))
  .catch((err) => console.log(`Low number: ${err}`));

// Homework No.5

const getUserInfo = new Promise((resolve, reject) => {
  const isUserFound = Math.round(Math.random());
  const timeToFindUser = Math.floor(Math.random() * 10) * 1000;

  if (isUserFound === 1) {
    setTimeout(() => {
      resolve({
        firstName: "Davit",
        lastName: "Shavidze",
        age: 15,
        gender: "Male",
      });
    }, timeToFindUser);
  } else {
    reject("User not found.");
  }
});

getUserInfo.then(
  (user) => console.log("User Info:", user),
  (error) => console.log("Error:", error)
);
