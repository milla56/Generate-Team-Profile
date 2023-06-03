const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

//Array for team members
const teammates = [];


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//MANAGER

const managerQ = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },

        {
            type: "input",
            name: "employeeID",
            message: "Please, type your Employee's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please, type in your email address."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please, type in your office number."
        }

 ]).then(value =>{
    const manager = new Manager(value.name, value.employeeID, value.email, value.officeNumber);
    teammates.push(manager);
    employeeChoice();
 })
}

// CHOOSE EMPLOYEE
const employeeChoice = () =>{
return inquirer.prompt([
{
    type: "list",
    name: "employeeRole",
    message:  "Please, choose your next employee.",
    choices: [
        "Engineer",
        "Intern",
        "Finish building the team"
    ]
}
// then ? maybe 




])
}

//ENGINEER QUESTIONS
const engineerQ = () =>{
    return inquirer.prompt([
{
    type: "input",
    name: "name",
    message: "Please, type the Engineer's name?"
},
{
    type: "input",
    name: "engineerID",
    message: "Please, type your Engineer's ID."
},
{
    type: "input",
    name: "email",
    message: "Please, type in your email address."

},
{
    type: "input",
    name: "githubUser",
    message: "Please, type in your GitHub user name."
}


]).then(value =>{
    const engineer = new Engineer(value.name, value.engineerID, value.email, value.githubUser);
    teammates.push(engineer);
    employeeChoice();
 });
};

//INTERN QUESTION
const internQ = () =>{
    return inquirer.prompt([
{
    type: "input",
    name: "name",
    message: "Please, type the Intern's name."
},
{
    type: "input",
    name: "internID",
    message: "Please, type your Intern's ID."
},
{
    type: "input",
    name: "email",
    message: "Please, type in your email address."

},
{
    type: "input",
    name: "school",
    message: "Please, type in your school."
}


]).then(value =>{
    const intern = new Intern(value.name, value.internID, value.email, value.school);
    teammates.push(intern);
    employeeChoice();
 });
};


//INIT FUNCTION

