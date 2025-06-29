
class Car {
  constructor(brand, model, horsepower, image, sound) {
    this.brand = brand;
    this.model = model;
    this.horsepower = horsepower;
    this.image = image;
    this.sound = sound;
  }

  getInfo() {
    return `${this.brand} ${this.model} – ${this.horsepower} ცხ.ძ.`; 
  }

  engineSound() {
    const audio = new Audio(this.sound);
    audio.play();
  }
}


class BMW extends Car {
  constructor(model, horsepower, image, sound) {
    super('BMW', model, horsepower, image, sound);
    this.luxury = true;
  }
}

class Mercedes extends Car {
  constructor(model, horsepower, image, sound) {
    super('Mercedes-Benz', model, horsepower, image, sound);
    this.comfort = 'High';
  }
}

class Audi extends Car {
  constructor(model, horsepower, image, sound) {
    super('Audi', model, horsepower, image, sound);
    this.quattro = true;
  }
}


const cars = {
  mercedes: new Mercedes('E63 AMG', 612, 'https://avatars.mds.yandex.net/get-verba/997355/2a00000187e6a56fc2d2c95326c2b0135d3c/456x342', 'mercedes.mp3'),
  audi: new Audi('RS6', 591, 'audi.jpg', 'audi.mp3')
};


function selectCar(key) {
  const car = cars[key];
  const container = document.getElementById('car-display');
  container.innerHTML = `
    <h2>${car.brand} ${car.model}</h2>
    <img src="${car.image}" width="300" />
    <p>${car.getInfo()}</p>
    <button onclick="alert('${car.getInfo()}')">getInfo</button>
    <button onclick="cars['${key}'].engineSound()">engineSound</button>
  `;
}