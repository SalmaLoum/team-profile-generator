// importing Employee constructor
const Employee = require("./Employee");

// engineer constructor extends employee constructor
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    // calling employee constructor
    super(name, id, email);
    this.gitHub = gitHub;
    this.title = "Engineer";
  }

  // returning github from input
  getGitHub() {
    return this.gitHub;
  }
}

//exporting to Engineer
module.exports = Engineer;
