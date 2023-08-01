const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shape');
const { writeLogoToFile } = require('./lib/logo');  // function to create and write SVG to file

const shapeClasses = {
    Triangle: Triangle,
    Circle: Circle,
    Square: Square
};

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to three characters for logo text:',
            name: 'text',
            validate: function (value) {
                var pass = value.match(
                    /^.{1,3}$/
                );
                if (pass) {
                    return true;
                }
                return 'Please enter up to three characters for logo text';
            }
        },
        {
            type: 'input',
            message: 'Enter the color for the text:',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Choose a shape:',
            name: 'shape',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            message: 'Enter the color for the shape:',
            name: 'shapeColor',
        },
    ])
    .then(answers => {
        const shape = new shapeClasses[answers.shape]();
        shape.setColor(answers.shapeColor);

        writeLogoToFile(answers.text, answers.textColor, shape);
    })
    .catch(error => {
        if(error.isTtyError) {
            console.error('Prompt could not be rendered because:', error);
        } else {
            console.error('An error occurred because:', error);
        }
    });
