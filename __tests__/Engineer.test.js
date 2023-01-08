const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "gitHub";
  const e = new Engineer("Salma", 12, "goforsalma@gmail.com", testValue);
  expect(e.gitHub).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("Salma", 12, "goforsalma@gmail.com", "SalmaLoum");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "gitHub";
  const e = new Engineer("Salma", 12, "goforsalma@gmail.com", testValue);
  expect(e.getGitHub()).toBe(testValue);
});
