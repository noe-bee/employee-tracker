INSERT INTO department (department_name)
VALUES ("Production"),
       ("Marketing"),
       ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ('Human Resources Director', 40000, 3),
       ('Marketing Manager', 38000, 2),
       ('Marketing Coordinator', 27000, 2),
       ('Production Manager', 36000, 1),
       ('Production Analyst', 26000, 1),
       ('Human Resources Assistant', 30000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Nancy', 'Grimace', 1, NULL),
       ('Alan', 'Baker', 2, 1),
       ('Paul', 'Brenan', 3, 1),
       ('Janice', 'Lemons', 4,3),
       ('Thalia', 'Smith', 5,3),
       ('Matthew', 'Davis', 6,4);


       
       
