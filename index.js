const inquirer = require('inquirer');
const fs = require('fs');

const HTMLTemplate = require('./src/html-template');
const EngineerTemplate = require('./src/engineer-template');
const InternTemplate = require('./src/intern-template');
const ManagerTemplate = require('./src/manager-template');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamArray= [];

const ManagerQues = [
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

const EnginnerQues = [
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

const InternQues = [
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

questions(ManagerQues);

function questions(ques) {
    inquirer
    .prompt(ques) 
    .then((member) => {
        teamArray.push(member);

        if(member.Next === 'Add Engineer') {
            questions(EnginnerQues);
        } else if (member.Next === 'Add Intern') {
            questions(InternQues);
        } else {
            card(teamArray);
        }
    })
    .catch((err) => console.log(err));
}

function makeProfiles(team) {
  const profiles= team.map((member) => {
    const {name, id, email} = member;

    if (member.hasProperty('officeNumber')) {
      const {officenumber} = member;
      return new Manager(name, id, email, officenumber);
    }

    if (member.hasProperty('github')) {
      const { github } = member;
      return new Engineer(name, id, email, github);
    }

    if (member.hasOwnProperty('school')) {
      const { school } = member;
      return new Intern(name, id, email, school);
    }

  });

  generateHTML(profiles);
}

function generateHTML(profiles) {
  let profileCards = '';
  profiles.forEach((profile) => {
    if (profile instanceof Manager) {
      const card = addManagerCard(profile);
      profileCards += card;
    } else if (profile instanceof Engineer) {
      const card = addEngineerCard(profile);
      profileCards += card;
    } else if (profile instanceof Intern) {
      const card = addInternCard(profile);
      profileCards += card;
    }
})


const HTML = wrapProfileCards(profileCards);

writeHtml(HTML);
};

function writeHTML(HTML) {
  fs.writeFile('./dist/index.html', HTML, 'utf-8', (err) => {
    err ? console.log(err) : console.log('HTML file successfully created.')
  })
}