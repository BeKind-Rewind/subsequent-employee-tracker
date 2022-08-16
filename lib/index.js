const db = require('../db/connections');
const express = require('express');
const inquirer = require('inquirer');



const promptUser = () =>{
    inquirer
        .prompt([
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
        const action = answers.selection;
        
        if (action === "View all employees.") {
            viewEmployees();
        };
    
        if (action === "View all roles.") {
            viewRoles();
        };
        
        if (action === "View all departments.") {
            viewDepartments();
        };

        if (action === "View employees by manager.") {
            viewByManager();
        };
      
        if (action === "View employees by department.") {
            viewByDepartment();
        };

        if (action === "Add a new employee.") {
            addEmployee();
        };
        
        if (action === "Add a new role.") {
            addRole();
        };
    
        if (action === "Add a new department.") {
            addDepartment();
        };
      
        if (action === "Update a current employee's role.") {
          updateEmployeeRole();
        };
    
        if (action === "Update a current employee's manager.") {
          updateEmployeeManager();
        };
        
        if (action === "Remove an employee.") {
            removeEmployee();
        };
   
        if (action === "Remove a role.") {
            removeRole();
        };
    
        if (action === "Remove a department.") {
            removeDepartment();
        };
   
        if (action === "Exit.") {
            process.exit();
        };
    })
};



// VIEW QUERIES 
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
    const sql = `SELECT first_name AS First, 
        last_name AS Last, 
        id AS ID 
        FROM employee`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        const employee = rows.map(({first_name, last_name, id}) => ({name: `${first_name} ${last_name}`, value: id}));
        inquirer
            .prompt([
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
            const sql = `SELECT id AS ID, 
                first_name AS First, 
                last_name AS Last 
                FROM employee
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
        const department = rows.map(({name, id}) => ({name: name, value: id}));
        inquirer
            .prompt([
            {
              type: "list",
              name: "employeeDepartment",
              message: "Chose department to view associated employees:",
              choices: department
            }
        ])
        .then(employeeAnswer => {
            const department = employeeAnswer.employeeDepartment;
            const params = [department];
            const sql = `SELECT employee.id AS ID, 
                first_name AS First, 
                last_name AS Last, 
                department.name AS Department
                FROM employee
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN department ON role.department_id = department.id
                WHERE department.id = ?`;
            db.query(sql, params, (err, rows) => {
                if (err) {
                    throw err;
                }
                console.table(rows);
                return promptUser();
            });
        });
    });
};




// ADD QUERIES
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



// UPDATE QUERIES
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



// REMOVE QUERIES
const removeEmployee = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        const employee = rows.map(({first_name, last_name, id}) => ({name: `${first_name} ${last_name}`, value: id}));
        inquirer
            .prompt([
            {
                type: "list",
                name: "removeEmployee",
                message: "Select an employee to remove:",
                choices: employee
            }
        ])
        .then(employeeAnswer => {
            const employee = employeeAnswer.removeEmployee
            const params = employee;
            const sql = `DELETE FROM employee
                        WHERE id = ?`
            db.query(sql, params, (err) => {
                if (err) {
                    throw err;
                }
                console.log("Employee DELETED.");
                return viewEmployees();
            });
        });
    });
};

const removeRole = () => {
    const sql = `SELECT id AS ID, 
                title AS Title 
                FROM role`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        const role = rows.map(({title, id}) => ({name: title, value: id}));
        inquirer
            .prompt([
            {
                type: "list",
                name: "removeRole",
                message: "Select a role to remove:",
                choices: role
            }
        ])
        .then(roleAnswer => {
            const role = roleAnswer.removeRole
            const params = role;
            const sql = `DELETE FROM role
                        WHERE id = ?`
            db.query(sql, params, (err) => {
                if (err) {
                    throw err;
                }
                console.log("Role DELETED.");
                return viewRoles();
            });
        });
    });
};

const removeDepartment = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }
        const department = rows.map(({name, id}) => ({name: name, value: id}));
        inquirer
            .prompt([
            {
                type: "list",
                name: "removeDepartment",
                message: "Select a department to remove:",
                choices: department
            }
        ])
        .then(departmentAnswer => {
            const department = departmentAnswer.removeDepartment
            const params = department;
            const sql = `DELETE FROM department
                        WHERE id = ?`
            db.query(sql, params, (err) => {
                if (err) {
                    throw err;
                }
                console.log("Department DELETED.");
                return viewDepartments();
            });
        });
    });
};


module.exports = promptUser;