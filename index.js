const inquirer = require('inquirer');
const axios = require("axios");
const fs = require('fs');
const path = require('path');
async function main () {
    console.log('starting');
    const userResponse = await inquirer
  .prompt([
    /* Pass your questions in here */
    { 
        type: 'input',
        message: "What is your project title",
        name: "title"
    },
    {
        type: 'input',
        message: "What is the description of the project",
        name: "description"
    },
    {
        type: 'input',
        message: "What is the usage information of the project",
        name: "usage"
    },
    {
        type: 'input',
        message: "What is your username",
        name: "username"
    }
  ]);
  
}