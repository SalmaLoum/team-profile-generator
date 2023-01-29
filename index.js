//required node modules
const fs = require('fs')
const inquirer = require('inquirer')

//importing team profiles
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//linking to HTML template
const generateHtml = require('./utils/templateHTML')

//teamMembers empty array, put data in this array every class we generate
const employeeMembers = []

//creating html file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateHtml(employeeMembers), (err) =>
    err
      ? console.log(err)
      : console.log('HTML file created in the root folder'),
  )
}

//Creating main questions for all team members.
function memberQu() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Choose a team member to create your team profile page',
        choices: ['Manager', 'Engineer', 'Intern', 'create the team'],
        name: 'team_member',
      },
    ])
    .then((answers) => {
      if (answers.team_member === 'Manager') {
        addManager()
      } else if (answers.team_member === 'Engineer') {
        addEngineer()
      } else if (answers.team_member === 'Intern') {
        addIntern()
      } else {
        createFile()
      }
    })
}

//creating job titles
// Get manager data inputs
function addManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your manager full name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID of the manager?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the email address of the team manager?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: `What is the office number of the team manager?`,
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber,
      )
      console.table(manager)
      employeeMembers.push(manager)
      return memberQu()
    })
}

//Get engineer data input//
function addEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team engineer?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID of the team engineer?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the email address of the team engineer?',
      },
      {
        type: 'input',
        name: 'gitHub',
        message: `What is the engineer's github profile name?`,
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.gitHub,
      )
      console.table(engineer)
      employeeMembers.push(engineer)
      return memberQu()
    })
}
//Get engineer data inputs //
function addIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team intern?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID of the team intern?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the email address of the team intern?',
      },
      {
        type: 'input',
        name: 'school',
        message: `What school did the intern go to?`,
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school,
      )
      console.table(intern)
      employeeMembers.push(intern)
      return memberQu()
    })
}

function createFile() {
  writeToFile('teamProfile.html', employeeMembers)
}

//starting application
function startApp() {
  addManager()
}

startApp()
