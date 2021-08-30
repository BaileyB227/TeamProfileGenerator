const Manager = require("../lib/Manager");

test("Sets office number", () => {
    const testValue = 100;
    const e = new Manager("Bailey", 1, "bailey@email.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});
  
test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Bailey", 1, "bailey@email.com", 100);
    expect(e.getRole()).toBe(testValue);
});
  
test("Uses getOfficeNumber() to get the office number", () => {
    const testValue = 100;
    const e = new Manager("Bailey", 1, "bailey@email.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});