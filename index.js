const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");

function addTeamMember() {
    inquirer.prompt([{
        type: "input",
        message: "What is the team members name?",
        name: "name"
    },
    {
        type: "list",
        message: "What is the team members role?",
        name: "role",
        choices: [
            "Intern",
            "Engineer",
            "Manager"
        ]
    },
    {
        type: "input",
        message: "What is the team members ID?",
        name: "ID"
    },
    {
        type: "input",
        message: "What is the team members Email?",
        name: "Email"
    }
])
}

addTeamMember();