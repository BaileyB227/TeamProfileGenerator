const Engineer = require("../lib/Engineer");

test("Sets GitHub", () => {
    const testValue = "GitHubName";
    const e = new Engineer("Bailey", 1, "bailey@email.com", testValue);
    expect(e.github).toBe(testValue);
});
  
test("Uses getRole() to get the role, should be Engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Bailey", 1, "bailey@email.com", "GitHubName");
    expect(e.getRole()).toBe(testValue);
});
  
test("Uses getGitHub() to get the github name", () => {
    const testValue = "GitHubName";
    const e = new Engineer("Bailey", 1, "bailey@email.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
});