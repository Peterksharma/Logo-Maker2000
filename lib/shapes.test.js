const { Triangle, Circle, Square } = require('./shape')

test('Triangle render', () => {
    const triangle = new Triangle ();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual(`<polygon points="10,200 150,10 290, 200" fill="blue"/>`);
});

test('Circle render', () => {
    const circle = new Circle ();
    circle.setColor('red')
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="75" fill="red"/>`);
})

test('Square render', () => {
    const square = new Square ();
    square.setColor('green');
    expect(square.render()).toEqual(`<rect x="100" y="50" width="100" height="100" fill="green"/>`);
})
