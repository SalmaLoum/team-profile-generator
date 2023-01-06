//required node modules
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

//Adding Readme file
//const Readme = require("./readme-generator");

// importing team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//teamMembers empty array
const teamMembers = [];

// linking to HTML template
const templateHtml = require("./src/templateHTML");

// Output Directory
const DIST_DIR = path.resolve(__dirname, "dist");

// Output file path and name
const outputPath = path.join(DIST_DIR, "teamProfile.html");

//team members

function addMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "what_team_member",
        message: "Add an engineer, Add an intern or assemble a team",
        choices: ["Engineer", "Intern", "assemble a team"],
      },
    ])
    .then((val) => {
      if (val.what_team_member === "Engineer") {
        addEngineer();
      } else if (val.what_team_member === "Intern") {
        addIntern();
      } else {
        createFile();
      }
    });
}
//creating job titles
// Get manager data inputs

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the team manager?",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID of the team manager?",
      },
      {
        type: "input",
        name: "email",
        message: "Email address of the team manager?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the office number of the team manager?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      console.table(manager);
      teamMembers.push(manager);
      addMember();
    });
}

//Get engineer data input//
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the team engineer?",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID of the team engineer?",
      },
      {
        type: "input",
        name: "email",
        message: "Email address of the team engineer?",
      },
      {
        type: "input",
        name: "gitHub",
        message: `What is the engineer's github profile name?`,
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.gitHub
      );
      console.table(engineer);
      teamMembers.push(engineer);
      addMember();
    });
}
//Get engineer data inputs //
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the team intern?",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID of the team intern?",
      },
      {
        type: "input",
        name: "email",
        message: "Email address of the team intern?",
      },
      {
        type: "input",
        name: "school",
        message: `What school did the intern go to?`,
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      console.table(intern);
      teamMembers.push(intern);
      addMember();
    });
}
//creating html file

function createFile() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  } else {
    fs.writeFileSync(outputPath, templateHtml("teamMembers"), "utf-8");
    console.log("HTML file created in the dist folder");
  }
}

//starting application

function startApp() {
  addManager();
}

startApp();
