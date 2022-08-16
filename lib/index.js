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
                "View employees by manager.",
                "View employees by department.",
                "Add a new employee.",
                "Add a new role.",
                "Add a new department.",
                "Update a current employee's role.",
                "Update a current employee's manager.",
                "Remove an employee.",
                "Remove a role.",
                "Remove a department.",
                "Exit."
            ],   
        }
    ])
    .then(answers => {
        const nextPrompt = answers.selection;
        
        if (nextPrompt === "View all employees.") {
            viewEmployees();
        };
    
        if (nextPrompt === "View all roles.") {
            viewRoles();
        };
        
        if (nextPrompt === "View all departments.") {
            viewDepartments();
        };

        if (nextPrompt === "View employees by manager.") {
            viewByManager();
        };
      
        if (nextPrompt === "View employees by department.") {
            viewByDepartment();
        };

        if (nextPrompt === "Add a new employee.") {
            addEmployee();
        };
        
        if (nextPrompt === "Add a new role.") {
            addRole();
        };
    
        if (nextPrompt === "Add a new department.") {
            addDepartment();
        };
      
        if (nextPrompt === "Update a current employee's role.") {
          updateEmployeeRole();
        };
    
        if (nextPrompt === "Update a current employee's manager.") {
          updateEmployeeManager();
        };
        
        if (nextPrompt === "Remove an employee.") {
            removeEmployee();
        };
   
        if (nextPrompt === "Remove a role.") {
            removeRole();
        };
    
        if (nextPrompt === "Remove a department.") {
            removeDepartment();
        };
   
        if (nextPrompt === "Exit.") {
          process.exit();
        };
    })
};


const viewEmployees = () => {
    const sql = `SELECT employee.id, 
        employee.first_name AS First, 
        employee.last_name as Last,
        role.title AS Title,
        role.salary AS Salary,
        department.name AS Department,
        CONCAT (manager.first_name, " ", manager.last_name) AS Manager 
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const viewRoles = () => {
    const sql = `SELECT role.id AS ID, 
        role.title AS Title, 
        role.salary AS Salary, 
        department.name AS Department
        FROM role
        LEFT JOIN department ON role.department_id = department.id`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const viewDepartments = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const viewByManager = () => {
    const sql = `SELECT first_name, last_name, id FROM employee`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        const employee = rows.map(({first_name, last_name, id}) => ({name: `${first_name} ${last_name}`, value: id}));
        inquirer.prompt([
            {
              type: "list",
              name: "managerEmployees",
              message: "Choose a manager to view associated employees:",
              choices: employee
            }
        ])
        .then(employeeAnswer => {
            const manager = employeeAnswer.managerEmployees;
            const params = [manager];
            const sql = `SELECT id, first_name, last_name FROM employee
                WHERE manager_id = ?`
            db.query(sql, params, (err, rows) => {
                if (err) {
                    throw err;
                }
                if (rows.length === 0) {
                    console.log("This employee does not manage anyone.");
                    return promptUser();
                } 
                console.table(rows);
                return promptUser();
            });
        });
    });
};

const viewByDepartment = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const addEmployee = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const addRole = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const addDepartment = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const updateEmployeeRole = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const updateEmployeeManager = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const removeEmployee = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const removeRole = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};

const removeDepartment = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        console.table(rows);
        return promptUser();
    });
};


module.exports = promptUser;