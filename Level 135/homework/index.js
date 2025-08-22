
const task1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("fast task finished");
  }, 500);
});

const task2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("medium task finished");
  }, 1000);
});

const task3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("slow task finished");
  }, 1500);
});

Promise.race([task1, task2, task3])
  .then(result => {
    console.log("fastest completed task:", result);
  });
