//Required Modules
const fs = require("fs");
const inquirer = require("inquirer");

//Variables and Arrays
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your full name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What's your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is the title for this project?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Type a description for your project.",
      name: "projectDes",
    },
    {
      type: "input",
      message: "What are the installation instructions for this application?",
      name: "projectInstall",
    },
    {
      type: "input",
      message: "What is the usage information for this application?",
      name: "projectUsage",
    },
    {
      type: "input",
      message: "Who needs to be credited?",
      name: "projectCredits",
    },
    {
      type: "input",
      message: "What are the contribution guidelines for this project?",
      name: "projectContribution",
    },
    {
      type: "input",
      message: "What are the test instructions for this project?",
      name: "projectTest",
    },
    {
      type: "list",
      message: "What license was used for this project?",
      name: "projectLicense",
      choices: ["MIT", "Apache License 2.0", "ISC"],
    },
  ])

  // creating file name
  .then((data) => {
    console.log(data);
    const filename = `README.md`;

    //Readme content
    const md = `
# ${data.projectTitle}

## Badge 
![Github license](https://img.shields.io/static/v1?label=License&message=${data.projectLicense}&color=informational)

## Description
${data.projectDes}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

## Installation
${data.projectInstall}

## Usage
${data.projectUsage}

## Credits
${data.projectCredits}

## License
${data.licenseText}

## Contributing
${data.projectContribution}

## Tests

## Questions
- For any questions related to this app, please contact: ${data.email}. 
- You can access my Github profile here: [https://github.com/${data.username}](https://github.com/${data.username})
----
		`;

    //function for creating md file success or fail
    fs.writeFile(filename, md, (err) =>
      err ? console.log(err) : console.log("Success! you created your README.")
    );
  });
