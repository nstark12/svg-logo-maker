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