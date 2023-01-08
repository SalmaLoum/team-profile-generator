// importing Employee constructor
const Employee = require("./Employee");

// manager constructor extends employee constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // calling employee constructor
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
// exporting to Manager
module.exports = Manager;
