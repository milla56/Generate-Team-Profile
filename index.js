const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Generate website
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
            message: "What is the team manager's name?",
            validate: nameInput => {
                if(nameInput){
                    return true;
                }else{
                    console.log("Please enter the Manager's name!")
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "employeeID",
            message: "Please, type your Employee's ID.",
            validate: managerID => {
                if(managerID){
                    return true;
                }else{
                    console.log("Please enter the Manager's ID")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please, type in your email address.",
            validate: email => {
                if(email){
                    return true;
                }else{
                    console.log("Please enter Manager's email")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please, type in your office number.",
            validate: officeNum => {
                if(officeNum){
                    return true;
                }else{
                    console.log("Please enter the Manager's office number!")
                    return false;
                }
            }
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
]).then(userInput => {
    switch (userInput.employeeRole) {
        //switch statement
        case "Add An Engineer":
            engineerQ();
            break;
        case "add an intern":
            internQ();
            break;

        default:
            buildHtml();
    }
});
}

//ENGINEER QUESTIONS
const engineerQ = () =>{
    return inquirer.prompt([
{
    type: "input",
    name: "name",
    message: "Please, type the Engineer's name?",
    validate: engineerName => {
        if(engineerName){
        return true;
    } else {
        console.log("Please enter the Enginner's name.")
        return false;
    }
}

},
{
    type: "input",
    name: "engineerID",
    message: "Please, type your Engineer's ID.",
    validate: enginID => {
        if(enginID){
            return true;
        }else {
            console.log("Please enter the Engineer's ID")
        }
    }
},
{
    type: "input",
    name: "email",
    message: "Please, type in your email address.",
    validate: email =>{
        if(email){
            return true;
        }else{
            console.log("Please enter Engineer's email")
            return false;
        }
    }

},
{
    type: "input",
    name: "githubUser",
    message: "Please, type in your GitHub user name.",
    validate: github =>{
        if(github){
            return true;
        }else{
         console.log("Please enter Engineer's GitHub account.")
         return false;
        }
    }
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
    message: "Please, type the Intern's name.",
    validate: name =>{
        if(name){
            return true;
        }else{
            console.log("Please enter the Intern's name")
            return false;
        }
    }
},
{
    type: "input",
    name: "internID",
    message: "Please, type your Intern's ID.",
    validate: idIntern => {
        if(idIntern){
            return true;
        }else {
            console.log("Please enter the Intern's ID !")
            return false;
        }
    }
},
{
    type: "input",
    name: "email",
    message: "Please, type in your email address.",
    validate: email =>{
        if(email){
            return true;
        }else{
            console.log("Please enter the Intern's email.")
            return false;
        }
    }

},
{
    type: "input",
    name: "school",
    message: "Please, type in your school.",
    validate: internSchool => {
        if(internSchool){
            return true;
        }else{
            console.log("Please enter the Intern's school.")
            return false;
        }
    }
}
]).then(value =>{
    const intern = new Intern(value.name, value.internID, value.email, value.school);
    teammates.push(intern);
    employeeChoice();
 });
};


// function for building the html file
const buildHtml = () => {
    console.log("Your Team is Created!")

    fs.writeFileSync(outputPath, render(teammates), "UTF-8")

}


//INIT FUNCTION
managerQ();
