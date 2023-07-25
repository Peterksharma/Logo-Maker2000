const Shape = require('/shapeColor.js');


//renders Triangle and looks for the color. 
//test the triangle shape.
class Triangle extends Shape {
    render() {
        //upside down triangle
        return `<polygon points="10,200 150,10 290, 200" fill="${this.color}"/>`
    }
}

//renders Circle and looks for the color.
class Circle extends Shape {
    render () {
        return `<circle cx="150", cy="100" r="75" fill="${this.color}"/>`
    }
}

// renders the square and looks for the color.
class Square extends Shape {
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill=${this.color}"/>`
    }
}

//export the shapes
module.exports = {Triangle, Circle, Square};