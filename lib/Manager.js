// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        // this.name = name;
        // this.id = id;
        // this.email = email;

        //access parent (Employee) properties
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;

    };


    getRole(){
        return "Manager"
    }
}

module.exports = Manager;