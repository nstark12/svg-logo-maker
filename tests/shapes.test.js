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