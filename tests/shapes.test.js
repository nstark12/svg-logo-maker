// import classes from ./lib.shapes
const { Circle, Square, Triangle } = require('../lib/shapes.js')

// test Circle class
describe('Circle Class', () => {
    it('renders correctly', () => {
        const shape = new Circle()

        let color = ('pink')
        shape.setColor(color)

        expect(shape.render()).toBe(`<circle cx="150" cy="115" r="80" fill="${color}" />`)
    })
})

// test Square class
describe('Square Class', () => {
    it('renders correctly', () => {
        const shape = new Square()

        let color = ('pink')
        shape.setColor(color)

        expect(shape.render()).toBe(`<rect x="73" y="40" width="160" height="160" fill="${color}" />`)
    })
})

// test Triangle class
describe('Triangle Class', () => {
    it('renders correctly', () => {
        const shape = new Triangle()

        let color = ('pink')
        shape.setColor(color)

        expect(shape.render()).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`)
    })
})