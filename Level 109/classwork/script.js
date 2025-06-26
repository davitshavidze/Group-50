
const obj = {
  arr: [
    // item1
    {
      level: [10, 50, 100],
    },

    // item2
    {
      level: [20, 40, 60],
      students: [
        {
          name: "jemala",
          surname: "barkalaia",
          score: [8, 8, 10],
        },
        {
          name: "jumbera",
          surname: "lamazi",
          score: [10, 7, 9],
        },
      ],
    },

  ],
};

const [{ level: [lvl1A, lvl1B, lvl1C] }, { level: [lvl2A, lvl2B, lvl2C], students: [{ name: name1, surname: surname1, score: [s1A, s1B, s1C] }, { name: name2, surname: surname2, score: [s2A, s2B, s2C] }] }] = obj.arr;

console.log(lvl1A);
console.log(lvl1B);
console.log(lvl1C);

console.log("------------------");

console.log(lvl2A);
console.log(lvl2B);
console.log(lvl2C);

console.log("------------------");

console.log(name1);
console.log(surname1);

console.log("------------------");

console.log(s1A);
console.log(s1B);
console.log(s1C);

console.log("------------------");

console.log(name2);
console.log(surname2);

console.log("------------------");

console.log(s2A)
console.log(s2B)
console.log(s2C)
