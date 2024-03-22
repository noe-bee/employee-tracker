const connection = require("./connection");

function viewDepartments() {
  connection.query("SELECT * FROM department;", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.table(data);
    }
  });
}

function viewRoles() {
  connection.query(
    "SELECT role.title, role.id, department.department_name, role.salary FROM department INNER JOIN role ON department.id = role.department_id;",
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.table(data);
      }
    }
  );
}

function viewEmployees() {
  connection.query("SELECT employee.id, employee.first_name AS EmployeeFN, employee.last_name AS EmployeeLN, role.title, role.salary, department.department_name, manager.first_name AS ManagerFN, manager.last_name AS ManagerLN FROM employee LEFT JOIN employee manager ON employee.manager_id = manager.id LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON department.id = role.department_id;", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.table(data);
    }
  });
}

function addDepartment(newDepartment) {
  connection.query(
    "INSERT INTO department (department_name) VALUES (?);",
    newDepartment,
    (err, data) => {
      if (err) {
        return err;
      } else {
        console.log(`The department ${newDepartment} was successfully added`);
      }
      connection.query("SELECT * FROM department;", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.table(data);
        }
      });
    }
  );
}

function addRole(newRole, newRoleSalary, newRoleDepartment) {
  connection.query(
    "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);",
    [newRole, parseInt(newRoleSalary), parseInt(newRoleDepartment)],
    (err, data) => {
      if (err) {
        console.log("Error with adding role:", err);
      } else {
        console.log(`The role ${newRole} was successfully added`);
      }
      connection.query("SELECT * FROM role;", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.table(data);
        }
      });
    }
  );
}

function addEmployee(
  newEmployeeFN,
  newEmployeeLN,
  newEmployeeRole,
  newEmployeeManager
) {
  connection.query(
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);",
    [newEmployeeFN, newEmployeeLN, newEmployeeRole, newEmployeeManager],
    (err, data) => {
      if (err) {
        return err;
      } else {
        console.log(`The employee ${newEmployeeFN} was successfully added`);
      }
      connection.query("SELECT * FROM employee;", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.table(data);
        }
      });
    }
  );
}

function updateEmployee(updatedEmployee, updatedEmployeeRole) {
  connection.query(
    "UPDATE employee SET role_id = ? WHERE id = ?;",
    [updatedEmployee, updatedEmployeeRole],
    (err, data) => {
      if (err) {
        return err;
      } else {
        console.log(`Succesfully updated ${updatedEmployee}'s role`);
      }
      connection.query("SELECT * FROM employee;", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.table(data);
        }
      });
    }
  );
}

function retrieveDPT() {
  connection.query("SELECT * FROM department", (err, data) => {
    if (err) {
      return err;
    } else {
      console.log(data);
    }
  });
}

module.exports = {
  viewDepartments,
  addDepartment,
  viewRoles,
  addRole,
  viewEmployees,
  addEmployee,
  updateEmployee,
  retrieveDPT,
};
