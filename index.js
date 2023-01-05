//Required Modules
const fs = require("fs");
const inquirer = require("inquirer");

//Adding Readme file
const Readme = require("./readme-generator");

// Import classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Output Directory
const DIST_DIR = path.resolve(__dirname, "dist");
// Output file path and name
const outputPath = path.join(DIST_DIR, "teamGenerator.html");

// Import HTML template
const templateHtml = require("./src/template-html");

/* -------------------------------------- */
/*               Team Members             */
/* -------------------------------------- */

function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "what_team_member",
        message:
          "Add an engineer, Add an intern or finish assembling your team?",
        choices: ["Engineer", "Intern", "Assemble Team!"],
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
/* -------------------------------------- */
/*               Job titles               */
/* -------------------------------------- */

/* -------- Get manager data inputs ------ */

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
        name: "imgSrc",
        message: "What is the imgSrc of the team manager?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.imgSrc
      );
      console.table(manager);
      teamMembers.push(manager);
      addTeamMember();
    });
}

/* -------- Get engineer data inputs ------ */
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
        name: "imgSrc",
        message: "What is the imgSrc of the team engineer?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.imgSrc
      );
      console.table(engineer);
      teamMembers.push(engineer);
      addTeamMember();
    });
}
/* -------- Get engineer data inputs ------ */
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
        name: "imgSrc",
        message: "What is the imgSrc of the team intern?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.imgSrc
      );
      console.table(intern);
      teamMembers.push(intern);
      addTeamMember();
    });
}
/* -------------------------------------- */
/*           Creating html file           */
/* -------------------------------------- */

function createFile() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  } else {
    fs.writeFileSync(outputPath, templateHtml(teamMembers), "utf-8");
    console.log("HTML file created in the dist folder");
  }
}

/* -------------------------------------- */
/*         Starting the application       */
/* -------------------------------------- */

function startApp() {
  addManager();
}

startApp();
