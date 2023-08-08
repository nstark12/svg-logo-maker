// import inquirer and file system module
import fs from 'fs'
import inquirer from 'inquirer'


// destructure and import classes from ./lib.shapes
import { Circle, Square, Triangle } from './lib/shapes.js'


// questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter desired text color (color keyword or hexadecimal)'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose logo shape',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter desired shape color (color keyword or hexadecimal'
        }
    ])
        .then(answers => {
            // Show error if text input is greater than 3 characters
            if(answers.text.length > 3) {
                console.log('Please enter a value less than or equal to 3')

                questions()

            } else {
                console.log('File saved!')
                createFile('logo.svg', answers)
            }

        })
}

// Run function to prompt user
questions()

// create file with user answers
function createFile(fileName, answers) {
    // initial state is empty string
    let fileString = ''

    // create a container to hold the logo
    fileString =  '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'

    // info from w3 schools: <g> tag needed so text goes in front of shape
    fileString += '<g>'

    //  insert user input
    fileString += `${answers.shape}`

    let userShape
    if (answers.shape === 'Circle') {
        // instantiate a new circle
        userShape = new Circle()
        fileString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}" />`
    } else if (answers.shape === 'Square') {
        // instantiates a new square
        userShape = new Square()
        fileString += `<rect x="50" width="160" height="160" fill="${answers.shapeColor}" />`
    } else if (answers.shape === 'Triangle') {
        // instantiates a new triangle
        userShape = new Triangle()
        fileString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />`
    }

    // give logo text default font size and user color
    fileString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`

    // info from w3 schools: close g tag
    fileString += '</g>'
    fileString += '</svg>'

    // generate svg file using fs
    fs.writeFile(fileName, fileString, (err) => {
        if (err) {
            console.log(err)
        } 
        console.log('SVG file saved!')

    })

}