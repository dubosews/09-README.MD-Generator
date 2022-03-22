function init () {

const inquirer = require('inquirer');
const fs = require('fs'); 
const generate = require('./utils/generateMarkdown.js');
const path = require('path');
//this is my script. WESLEY DUBOSE.
inquirer
  //Inquirer prompt used to ask questions and collect answers.
  .prompt([
    { 
      type: "input",
      message: "What would you like to title your document?",
      name: "title",  
         },
    { 
      type: "input",
      message: "Please describe the project:",
      name: "description",  
         },
    {
       type: "input",
       message: "How do you Install your application?",
       name: "installation",
    },
    {
        type: "input",
        message: "How do you Use your application?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the contribution guidelines for this project?",
        name: "contributing",
    },
   {
        type: "input",
        message: "How do users perform tests for this project?",
        name: "tests"
    },
    {
      type: "checkbox",
      message: "What License did you use for this repository?",
      choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
      name: "license",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
      type: "input",
      message: "Provide instructions for reaching out with questions:",
      name: "reachOut"
    }
  ])
  //after questions have been answered, 
  .then((response) => {
    return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
  });
}

init();
