// Classwork No.1

function createDelayedPromise() {
  return new Promise((resolve) => {
    const wait = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(() => {
      resolve(`Primise resolved ${wait / 1000} in seconds`);
    }, wait);
  });
}

// Classwork No.2

function withTimeout(promise, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Promise made an error"));
    }, timeout);

    promise
      .then((data) => {
        clearTimeout(timer);
        resolve(data);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
}

withTimeout(createDelayedPromise(), 5000)
  .then((result) => console.log("Success:", result))
  .catch((error) => console.error("Error:", error.message));

// Classwork No.3

function delayedValue() {
  const delay = Math.floor(Math.random() * 10 + 1) * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`answer resolved in ${delay / 1000} seconds`);
    }, delay);
  });
}

function timeout(limit = 5000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Times Limit – ${limit / 1000} sec in more`));
    }, limit);
  });
}

Promise.race([delayedValue(), timeout()])
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
