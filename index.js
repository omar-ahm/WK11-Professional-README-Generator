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
    message: 'Provide a description explaining the what, why and how of your project:',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step guide on how to get the project running:',
},
{
    type: 'input',
    name: 'usage',
    message: "Provide intsructions & examples for use. Include screenshots where applicable:",
},
{
    type: 'list',
    name: 'license',
    message: 'What license will your project be covered under?:',
    choices: ['MIT', 'Apache 2.0', 'ISC'],
},
{
    type: 'input',
    name: 'credits',
    message: 'List any collaborators, if any, with links to their GitHub profiles. Include any third-party assets or links:',
    choices: ['The GitHub Docs - contribution guidelines.', ]
},
{
    type: 'list',
    name: 'contributing',
    message: 'What contributing guidelines would you like to include?:',
    choices: ['The GitHub Docs - contribution guidelines.', ]
},
{
    type: 'input',
    name: 'tests',
    message: 'Are there any tests you would like to provide (with examples) on how to runs them?:',
},
{
    type: ' input',
    name: 'github',
    message: 'Enter your GitHub username? (e.g. github.io/xxxx):',
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address? where users can contact you:',
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
