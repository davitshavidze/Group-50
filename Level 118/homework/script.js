
class Employee {
  #id;
  #monthSalary;

  constructor(id, firstName, lastName, monthSalary) {
    this.#id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.monthSalary = monthSalary;
  }

  get id() {
    return this.#id;
  }

  get monthSalary() {
    return this.#monthSalary;
  }

  set monthSalary(value) {
    if (value > 0) {
      this.#monthSalary = value;
    } else {
      console.error("Salary must be more than 0 :D");
    }
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(full) {
    const parts = full.trim().split(" ");
    if (parts.length >= 2) {
      this.firstName = parts[0];
      this.lastName = parts.slice(1).join(" ");
    }
  }

  get yearSalary() {
    return this.#monthSalary * 12;
  }
}


class Manager extends Employee {
  constructor(id, firstName, lastName, monthSalary, department) {
    super(id, firstName, lastName, monthSalary);
    this.department = department;
  }

  set changeDepartment([newDept, newSalary]) {
    if (typeof newDept === "string" && newSalary > this.monthSalary) {
      this.department = newDept;
      this.monthSalary = newSalary;
    } else {
      console.warn("Not enough Salary");
    }
  }

  get yearSalary() {
    return super.yearSalary * 1.15;
  }

  info() {
    return `Manager ${this.fullName} Works ${this.department} departament. Salary with premiere:  ${this.yearSalary} ₾`;
  }
}