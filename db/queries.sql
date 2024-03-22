-- SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
-- FROM Orders
-- INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

-- SELECT role.title, role.id, department.department_name, role.salary
-- FROM department
-- INNER JOIN role ON department.id = role.department_id;

-- SELECT role.title, role.id, department.department_name, role.salary FROM department INNER JOIN role ON department.id = role.department_id;

-- SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary FROM department RIGHT JOIN role ON department.id = role.department_id RIGHT JOIN employee ON employee.id = employee.manager_id WHERE manager_id = 1;

-- SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary FROM department INNER JOIN role ON department.id = role.department_id INNER JOIN employee ON employee.id = employee.manager_id WHERE manager_id > 0;

-- SELECT employee.id, employee.first_name AS "employee's first name", employee.last_name AS "employee's last name", role.title, role.salary, department.department_name, manager.first_name AS "manager's first name", manager.last_name AS "manager's last name" FROM employee LEFT JOIN employee manager ON employee.manager_id = manager.id LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON department.id = role.department_id;

-- UPDATE employee
-- SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
-- WHERE CustomerID = 1;




