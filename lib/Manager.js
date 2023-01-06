// importing Employee constructor
const Employee = require("./Employee");

// manager constructor extends employee constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // calling employee constructor
    super(name, id, email);
    this.title = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}
// exporting to Manager
module.exports = Manager;
