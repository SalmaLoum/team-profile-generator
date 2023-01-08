// importing Employee constructor
const Employee = require("./Employee");

// engineer constructor extends employee constructor
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    // calling employee constructor
    super(name, id, email);
    this.gitHub = gitHub;
  }

  // returning github from input
  getGitHub() {
    return this.gitHub;
  }

  getRole() {
    return "Engineer";
  }
}

//exporting to Engineer
module.exports = Engineer;
