const db = require('../db/connections');
const express = require('express');
const inquirer = require('inquirer');


const promptUser = () =>{
    inquirer.prompt([
        {
            message: "What would you like to do?",
            name: "Selection",
            type: "list",
            choices: ["View all employees.", "Add a new employee.", "Update a current employee's role.", "View all roles.", "Add a new role.", "View all departments.", "Add a new department.", "Exit."],   
        }
    ])
    .then((answer) => {
        console.log(answer);
    });
};


module.exports = promptUser;