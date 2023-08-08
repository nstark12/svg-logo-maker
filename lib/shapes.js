// create a shape class to initialize color and set value
class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = color
    }
}

// create a circle class that inherits from shape and returns a circle
class Circle extends Shape {
    render() {
        // return circle with selected color
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`
    }
}

// create a square class that inherits from shape and returns a square
class Square extends Shape {
    render() {
        // return circle with selected color
        return `<rect x="50" width="160" height="160" fill="${this.color}" />`
    }
}

// create a triangle class that inherits from shape and returns a triangle
class Triangle extends Shape {
    render() {
        // return circle with selected color
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// destructure and export classes
export { Circle, Square, Triangle }