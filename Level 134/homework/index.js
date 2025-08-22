
// Task No.1

function randomOutcome(data, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve(data) : reject(`${data} failed`);
    }, delay);
  });
}

const getProduct = () => randomOutcome("Product info", 1000);
const getUser = () => randomOutcome("User info", 2000);
const getPayment = () => randomOutcome("Payment info", 3000);

Promise.all([getProduct(), getUser(), getPayment()])
  .then((results) => {
    console.log("Order processed successfully:", results);
  })
  .catch(() => {
    console.log("Order not done");
  });


// // Task No.2

function randomAPI(data) {
  return new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve(data) : reject("No info");
  });
}

const getWeather = () => randomAPI("🌤️");
const getCurrency = () => randomAPI(1.9);
const getNews = () =>
  randomAPI("Breaking news: JavaScript conquers the world!");

Promise.allSettled([getWeather(), getCurrency(), getNews()]).then((results) => {
  console.log("Universal API responses:");
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log({ status: result.status, value: result.value });
    } else {
      console.log({ status: result.status, reason: result.reason });
    }
  });
});

// Task No.3 

function fakeServer(serverName) {
  const willResolve = Math.round(Math.random());
  const time = Math.floor(Math.random() * (4000 - 100 + 1)) + 100;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willResolve === 1) {
        resolve(`received data from ${serverName} in ${time}ms`);
      } else {
        reject(`Error from ${serverName}`);
      }
    }, time);
  });
}

const servers = [
  fakeServer("Server A"),
  fakeServer("Server B"),
  fakeServer("Server C"),
  fakeServer("Server D"),
];

Promise.any(servers)
  .then((result) => {
    console.log(" First successful response:", result);
  })
  .catch((error) => {
    if (error instanceof AggregateError) {
      console.log("All servers failed. Reasons:");
      console.log(error.errors);
    }
  });
