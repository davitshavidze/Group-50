
class Shape {
    constructor(color, width, height, coordinates){
        this.color = color;
        this.width = width;
        this.height = height;
        this.coordinates = []
    }

    changeWidth(newWidth){
        this.width = newWidth;
    }

    changeHeight(newHeight){
        this.height = newHeight;
    }

    changeColor(newColor){
        this.color = newColor;
    }

    changeCoordinates(newCoordinates){
        this.coordinates = newCoordinates;
    }

    printStatus(){
        console.log(`კოორდინატებზე - ${this.coordinates} იხატება ფიგურა, რომლის ზომებია ${this.height}/${this.width}, რომლის ფერია ${this.color}.`)
    }
}

const circle = new Shape("red", 100, 176, [6,10])

console.log(circle.color)
console.log(circle.height)
console.log(circle.width)
console.log(circle.coordinates)

circle.changeColor("green")
circle.changeWidth(190)
circle.changeHeight(189)
circle.changeCoordinates([8,9])