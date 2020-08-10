use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineer'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 110000, 1),
    ('Sales Rep', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 125000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Smitty', 'CarMicheal', 1, NULL),
    ('Richard', 'Prior', 2, 1),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Billy', 'Mayes', 4, 3),
    ('Kunal', 'Singh', 5, NULL),
    ('Malia', 'Brown', 6, 5),
    ('Scooby', 'Doo', 7, NULL),
    ('Tom', 'Allen', 8, 7);
