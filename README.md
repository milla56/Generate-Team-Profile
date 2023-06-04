# Generate-Team-Profile

 ## Table Of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [User-Story](#user-story)
  - [Usage](#usage)
  - [Demo](#demo)
  - [Technologies-Used](#technologies-used)
  - [Credits](#credits)
  - [License](#license)



## Description
"Generate Team Profile" is an application that generates HTML files using input from a command-line interface. The app is taking in information about employees on a software engineering team and generate an HTML webpage that displays summaries for each person. The project aims to provide quick and easy access to employees personal details, so a manager can easily contact the team.


## Installation

- Clone the GitHub repository to your computer.
- Navigate to your terminal and use the following command "node index.js".
 


## User Story 
- AS A manager
- I WANT to generate a webpage that displays my team's basic info
- SO THAT I have quick access to their emails and GitHub profiles



## Usage
The list shows what steps were made to complete the challenge:
 - The application is created in command-line and accepts user input.
 - When the user enters ```npm test``` in the terminal , the user will see that all the four tests are passing.
 ![PASS]()
 - The first class ```Employee``` is the parent class and has the following properties - ```name, id``` and ```email``` and methods - ```getName(),getId(), getEmail()``` and ```getRole()```.
 - "Manager" class extends "Employee" class and have the following properties - ```officeNumber``` and ```getRole()```.
 - "Engineer" class extends the "Employee" class and have this properties - ```github, getGithub()``` and ```getRole()```.
 - The last class is "Intern", which also extends the "Employee" class, with this properties - ```school, getSchool()``` and ```getRole()```.
 - Validation was added to insure the user input is in the proper format.
 - When the user types in ```node index.js``` in the terminal and starts the application,the user is prompted to enter the team's manager details.
 - When the question are answered, the user will have the option to choose the next employee (engineer or intern) or to finish the application by selecting the option - "Finish building the team".
 - When the user chooses to finish building the team, they exit the application and the HTML is generated. The HTML file is located in the ```output``` folder, called ```team.html```.



## Demo
![Demo]()


## Technologies Used
- JavaScript
- Node JS
- ES6 
- Inquirer package - version 6.5.2
- Jest Package -  version 29.5.0


## Credits

N/A


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

milla56/Generate-Team-Profile is licensed under the
MIT License
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.