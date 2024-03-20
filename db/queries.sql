-- SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
-- FROM Orders
-- INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;

-- SELECT role.title, role.id, department.department_name, role.salary
-- FROM department
-- INNER JOIN role ON department.id = role.department_id;

-- SELECT role.title, role.id, department.department_name, role.salary FROM department INNER JOIN role ON department.id = role.department_id;

-- SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name, role.salary FROM role JOIN employee ON employee.id = employee.manager_id;

-- SELECT e1.employee_id AS employee_id, e1.employee_name AS employee_name,
--        e2.employee_id AS manager_id, e2.employee_name AS manager_name
-- FROM employees e1
-- JOIN employees e2 ON e1.manager_id = e2.employee