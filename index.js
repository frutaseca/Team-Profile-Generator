const inquirer = require('inquirer');
const fs = require('fs');

const Manager = [
    {
        name: 'start',
        type: 'confirm',
        message: 'Welcome to the Team Profile Generator! Please fill out the information below.',
      },
      {
        name: 'name',
        type: 'input',
        message: 'Please enter the name of the manager:'
      },
      {
        name: 'id',
        type: 'input',
        message: 'What is your employee ID?'
      },
      {
        name: 'email',
        type: 'input',
        message: 'Please enter your email address:'
      },
      {
        name: 'officeNumber',
        type: 'input',
        message: 'What is your office number?'
      },
      {
        name: 'Next',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What is next?',
      },
];

const Enginner = [
    {
        name: 'name',
        type: 'input',
        message: "Please enter the name of the engineer:"
      },
      {
        name: 'id',
        type: 'input',
        message: "Please enter the ID of the engineer:"
      },
      {
        name: 'email',
        type: 'input',
        message: "What is the engineer's email address?"
      },
      {
        name: 'github',
        type: 'input',
        message: "Please enter the engineer's Github username:"
      },
      {
        name: 'Next',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What is next?',
      },
];

const Intern = [
    {
        name: 'name',
        type: 'input',
        message: "What is the intern's name?"
      },
      {
        name: 'id',
        type: 'input',
        message: "What is the intern's employee ID?"
      },
      {
        name: 'email',
        type: 'input',
        message: "Please enter the intern's email address:"
      },
      {
        name: 'school',
        type: 'input',
        message: "What college or university does the intern attend?"
      },
      {
        name: 'Next',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What is next?',
      },
];