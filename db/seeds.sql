INSERT INTO department (id, name)
    VALUES
    (1, 'Administration'),
    (2, 'Engineering'),
    (3, 'Sales'),
    (4, 'Legal'),
    (5, 'Finance');

INSERT INTO role (id, title, salary, department_id)
    VALUES
    (1, 'Account Manager', '120000', '1'),
    (2, 'Accountant', '90000', '5'),
    (3, 'Legal Team Lead', '240000', '4'),
    (4, 'Lawyer', '190000', '4'),
    (5, 'Customer Service', '70000', '3'),
    (6, 'Sales Lead', '160000', '1'),
    (7, 'Salesperson', '80000', '3'),
    (8, 'Lead Engineer', '150000', '2'),
    (9, 'Software Engineer', '100000', '2');
   
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES
    (1, 'Michael', 'Puckett', 4, 1),
    (2, 'Alyssa', 'McMullen', 2, 1),
    (3, 'Lisa', 'Phillip', 2, 2),
    (4, 'Olga', 'Rutnik', 3, 2),
    (5, 'Sam', 'Smith', 1, 3),
    (6, 'Jacob', 'Donnelly', 5, 3),
    (7, 'Ryan', 'Alexi', 4, 1),
    (8, 'Chris', 'Tiggs', 9, 1),
    (9, 'Spencer', 'Olsen', 7, 2),
    (10, 'Tim', 'Sampson', 5, 2),
    (11, 'Cloud', 'Fife', 4, 3),
    (12, 'Stesha', 'Chavers', 2, 3),
    (13, 'Stefan', 'Oliver', 6, 1),
    (14, 'Jon', 'Portteus', 7, 1),
    (15, 'Mitchell', 'Malik', 5, 2),
    (16, 'Joi', 'Schultz', 8, 2),
    (17, 'Micah', 'Fugatello', 4, 3),
    (18, 'Julie', 'Salva', 5, 3),
    (19, 'Rain', 'Moon', 1, 1),
    (20, 'Sparrow', 'Venti', 1, 1);