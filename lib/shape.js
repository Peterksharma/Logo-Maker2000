const Shape = require('/shapeColor.js');


//extends shape class to the triangle, renders the triangle, then 
class Trinagle extends Shape {
    render() {
        //upside down triangle
        return `<polygon points="10,200 150,10 290, 200" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="150", cy="100" r="75" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill=${this.color}"/>`
    }
}

module.exports = {Triangle, Circle, Square};