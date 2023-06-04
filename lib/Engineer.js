// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,GitHubUser){
        // this.name = name;
        // this.id = id;
        // this.email = email;

        //access parent (Employee) properties
        super(name,id,email); 
        this.GitHubUser = GitHubUser;
    }
    getGithub(){
        return this.GitHubUser;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;