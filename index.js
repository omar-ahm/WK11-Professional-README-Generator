const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
},
{
    type: 'input',
    name: 'description',
    message: `Provide a description explaining the what, why and how of your project.
    Use the following questions to guide you:
    - What was your motivation?
    - Why did you build this project?
    - What problem does it solve?
    - What did you learn?
    :`,
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the instructions for installation for your project?',
},
{
    type: 'input',
    name: 'usage',
    message: "What are the usage instructions for your project?",
},
{
    type: 'list',
    name: 'license',
    message: 'What license will your project be covered under?',
    choices: ['MIT', 'Apache 2.0', 'ISC'],
},
{
    type: 'list',
    name: 'contributing',
    message: 'What contributing guidelines would you like to include?',
    choices: ['The GitHub Docs - contribution guidelines.', ]
},
{
    type: 'input',
    name: 'tests',
    message: 'What test instructions would you like to include with your project?',
},
{
    type: ' input',
    name: 'github',
    message: 'What is your GitHub username? (e.g. github.io/xxxx): ',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Your README.md file has been successfully generated.')
    );
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then((answers) => {
    const fileName = 'README.md';
    writeToFile(fileName, answers);
})
.catch((error) => {
    console.error(error);
});
}

// function call to initialize program
init();
