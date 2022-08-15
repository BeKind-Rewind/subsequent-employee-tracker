const db = require('../db/connections');
const express = require('express');
const inquirer = require('inquirer');


const promptUser = () =>{
    inquirer.prompt([
        {
            message: "What would you like to do?",
            name: "selection",
            type: "list",
            choices: [
                "View all employees.", 
                "View all roles.",
                "View all departments.",
                "View employees by manager",
                "View employees by department",
                "Add a new employee.",
                "Add a new role.",
                "Add a new department.",
                "Update a current employee's role.",
                "Update an employee's manager",
                "Remove an employee",
                "Remove a role",
                "Remove a department",
                "Exit."
            ],   
        }
    ])
    .then(answers => {
        const nextPrompt = answers.selection;
        
        if (nextPrompt === "View all employees") {
            viewEmployees();
        };
    
        if (nextPrompt === "View all roles") {
            viewRoles();
        };
        
        if (nextPrompt === "View all departments") {
            viewDepartments();
        };

        if (nextPrompt === "View employees by manager") {
            viewByManager();
        };
      
        if (nextPrompt === "View employees by department") {
            viewByDepartment();
        };

        if (nextPrompt === "Add an employee") {
            addEmployee();
        };
        
        if (nextPrompt === "Add a role") {
            addRole();
        };
    
        if (nextPrompt === "Add a department") {
            addDepartment();
        };
      
        if (nextPrompt === "Update an employee role") {
          updateEmployeeRole();
        };
    
        if (nextPrompt === "Update an employee's manager") {
          updateEmployeeManager();
        };
        
        if (nextPrompt === "Remove an employee") {
            removeEmployee();
        };
   
        if (nextPrompt === "Remove a role") {
            removeRole();
        };
    
        if (nextPrompt === "Remove a department") {
            removeDepartment();
        };
   
        if (nextPrompt === "Exit") {
          process.exit();
        };
    })
};


const viewEmployees = () => {
    return "View all employees!";
};

const viewRoles = () => {
    console.log("View all roles!");
};

const viewDepartments = () => {
    console.log("View all departments!");
};

const viewByManager = () => {
    console.log("View employees by manager!");
};

const viewByDepartment = () => {
    console.log("View employees by department!");
};

const addEmployee = () => {
    console.log("Add a new employee!");
};

const addRole = () => {
    console.log("Add a new role!");
};

const addDepartment = () => {
    console.log("Add a new department!");
};

const updateEmployeeRole = () => {
    console.log("Update an employee's role!");
};

const updateEmployeeManager = () => {
    console.log("Update an employee's manager!");
};

const removeEmployee = () => {
    console.log("Remove an employee!");
};

const removeRole = () => {
    console.log("Remove a role!");
};

const removeDepartment = () => {
    console.log("Remove a department!");
};


module.exports = promptUser;