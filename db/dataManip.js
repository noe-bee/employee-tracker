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

function viewEmployees(){
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

function addRole(newRole, newRoleSalary, newRoleDepartment){
  connection.query(
    "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);",
    newRole, newRoleSalary, newRoleDepartment,
    (err, data) => {
      if (err) {
        return err;
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

module.exports = { viewDepartments, addDepartment, viewRoles, addRole, viewEmployees };
