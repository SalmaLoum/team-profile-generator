// importing Employee constructor
const Employee = require("./Employee");

// intern constructor extends employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    // calling employee constructor
    super(name, id, email);
    this.school = school;
  }

  // returning school from input
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}
// exporting to Intern
module.exports = Intern;
