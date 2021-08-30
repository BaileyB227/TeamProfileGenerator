const Intern = require("../lib/Intern");

test("Sets school", () => {
  const testValue = "SMU";
  const e = new Intern("Bailey", 1, "bailey@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Bailey", 1, "bailey@email.com", "SMU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "SMU";
  const e = new Intern("Bailey", 1, "bailey@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});