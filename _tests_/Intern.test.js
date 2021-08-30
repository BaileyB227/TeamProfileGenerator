const Intern = require("../lib/Intern");

test("Sets school", () => {
  const testValue = "SMU";
  const e = new Intern("Bailey", 1, "bailey@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Uses getRole() to get the role, should be Intern", () => {
  const testValue = "Intern";
  const e = new Intern("Bailey", 1, "bailey@email.com", "SMU");
  expect(e.getRole()).toBe(testValue);
});

test("Uses getSchool() to get the school", () => {
  const testValue = "SMU";
  const e = new Intern("Bailey", 1, "bailey@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});