INSERT INTO department (id, name)
    VALUES
    (1, 'Administration'),
    (2, 'Operations'),
    (3, 'Engineering'),
    (4, 'Sales'),
    (5, 'Legal'),
    (6, 'Finance');

INSERT INTO role (id, title, salary, department_id)
    VALUES
    (1, 'Account Manager', '$180,000', ''),
    (2, 'Accountant', '$180,000', ''),
    (3, 'Legal Team Lead', '130,00' ''),
    (4, 'Lawyer', '$90,000', ''),
    (5, 'Customer Service', '$70,000', ''),
    (6, 'Sales Lead', '$70,000', ''),
    (7, 'Salesperson', '$50,000', ''),
    (8, 'Lead Engineer', '$50,000', ''),
    (9, 'Software Engineer', '$180,000', '');
   
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES
    (1, 'Michael', 'Puckett', '', ''),
    (2, 'Alyssa', 'McMullen', '', ''),