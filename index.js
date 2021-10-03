// TODO: Include packages needed for this application
const  inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your Github user name?'
  }, 
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your your project name?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a descritption of your projects'
  },
  {
    type: 'input',
    name: 'install',
    message: 'What commands are needed to run this program?',
    default: 'npm install'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Check the license you want for this project',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
   type: 'input',
   name: 'contributing',
   message: 'What does the user need to know to contribute to this repo?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What commands are needed to run tests'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if(err) {
      console.log(err)
    }
    return "file saved correctly";
  });
  };

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    console.log(answers)
    writeToFile('README.md',generateReadMe(answers))
  })
}

// Function call to initialize app
init();

