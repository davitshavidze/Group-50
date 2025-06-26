class guinneaPig {
  constructor(color, size, year, month, day) {
    this.color = color;
    this.size = size;
    this.birthDate = new Date(year, month, day);
  }

  calculateAge() {
    const today = new Date();
    let years = today.getFullYear() - this.birthDate.getFullYear();
    let months = today.getMonth() - this.birthDate.getMonth() - 1;
    let days = today.getDate() - this.birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  }
}

const Pig = new guinneaPig("Red", "Big", 2021, 11, 6);
const age = Pig.calculateAge();

console.log(Pig.color);
console.log(Pig.size);
console.log(Pig.birthDate);

console.log(age);
