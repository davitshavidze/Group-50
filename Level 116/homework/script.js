class Transport {
  constructor(maxSpeed, color, fuel, distanceTraveled) {
    this.maxSpeed = maxSpeed;
    this.color = color;
    this.fuel = fuel;
    this.distanceTraveled = 0;
  }

  refuel(liter) {
    if (typeof liter !== "number" || liter < 0) {
      console.log(
        "Fuel quantity must be molre than 0 liters and its must be number"
      );
    }
    this.fuel += liter;
  }

  changeColor(color) {
    if (typeof color !== "string") {
      console.log("Color must be String value");
    }
    this.color += color;
  }

  travel(distance, fuelNeed) {
    if (typeof distance !== "number" || typeof fuelNeed !== "number") {
      console.log("It must be number value");
    }
    if (this.fuel < fuelNeed) {
      console.log("Not enough fuel");
    }
    this.distanceTraveled += distance;
    this.fuel -= fuelNeed;
  }
}

class Car extends Transport {
  constructor(maxSpeed, color, fuel) {
    super(maxSpeed, color, fuel);
  }

  getInfo() {
    console.log(
      `This is car, which's max speed is ${this.maxSpeed}, color is ${this.color} and fuel is ${this.fuel} Litres`
    );
  }
}

const myCar = new Car(180, "green", 24);
myCar.refuel(12);
myCar.travel(50, 5);
console.log(myCar.getInfo());
