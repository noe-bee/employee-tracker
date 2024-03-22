const inquirer = require("inquirer");
const {
  viewDepartments,
  addDepartment,
  viewRoles,
  addRole,
  viewEmployees,
  addEmployee,
  updateEmployee,
  retrieveDPT,
  retrieveEMPRole,
  retrieveEmployee,
} = require("./db/dataManip");

//questions
const questions = [
  {
    type: "list",
    name: "initialChoice",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Quit",
    ],
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    switch (answers.initialChoice) {
      case "View all departments":
        viewDepartments();
        break;
      case "View all roles":
        viewRoles();
        break;
      case "View all employees":
        viewEmployees();
        break;
      case "Add a department":
        inquirer
          .prompt([
            {
              type: "input",
              name: "newDepartment",
              message: "What new department would you like to add?",
            },
          ])
          .then((answer) => {
            addDepartment(answer.newDepartment);
          });
        break;
      case "Add a role":
        retrieveDPT().then(([data]) => {
          const dptChoices = data.map((dpt) => ({
            name: dpt.department_name,
            value: dpt.id,
          }));
          inquirer
            .prompt([
              {
                type: "input",
                name: "newRole",
                message: "What new role would you like to add?",
              },
              {
                type: "input",
                name: "newRoleSalary",
                message: "What is the salary for this new role?",
              },
              {
                type: "list",
                name: "newRoleDepartment",
                message: "What is the department of this new role?",
                choices: dptChoices,
              },
            ])
            .then((answer) => {
              console.log(answer);
              addRole(
                answer.newRole,
                parseInt(answer.newRoleSalary),
                parseInt(answer.newRoleDepartment)
              );
            });
        });
        break;
      case "Add an employee":
        retrieveEmployee().then(([data]) => {
          const managerChoices = data.map((manager) => ({
            name: manager.first_name,
            value: manager.id,
          }));
          retrieveEMPRole().then(([data]) => {
            const roleChoices = data.map((role) => ({
              name: role.title,
              value: role.id,
            }));
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "newEmployeeFN",
                  message: "What is the new employee's first name?",
                },
                {
                  type: "input",
                  name: "newEmployeeLN",
                  message: "What is the new employee's last name?",
                },
                {
                  type: "list",
                  name: "newEmployeeRole",
                  message: "What is the new employee's role?",
                  choices: roleChoices,
                },
                {
                  type: "list",
                  name: "newEmployeeManager",
                  message: "Who is the new employee's manager?",
                  choices: managerChoices,
                },
              ])
              .then((answer) => {
                console.log(answer);
                addEmployee(
                  answer.newEmployeeFN,
                  answer.newEmployeeLN,
                  answer.newEmployeeRole,
                  answer.newEmployeeManager
                );
              });
          });
        });
        break;
      case "Update an employee role":
        retrieveEmployee().then(([data]) => {
          const employeeChoices = data.map((emp) => ({
            name: emp.first_name,
            value: emp.id,
          }));
          retrieveEMPRole().then(([data]) => {
            const roleChoices = data.map((role) => ({
              name: role.title,
              value: role.id,
            }));
            inquirer
              .prompt([
                {
                  type: "list",
                  name: "updatedEmployeeRole",
                  message: "What is this employee's new role?",
                  choices: roleChoices,
                },
                {
                  type: "list",
                  name: "updatedEmployee",
                  message: "Which employee would you like to update?",
                  choices: employeeChoices,
                },
              ])
              .then((answer) => {
                console.log(answer);
                updateEmployee(
                  answer.updatedEmployeeRole,
                  answer.updatedEmployee
                );
              });
          });
        });
        break;
      default:
        process.exit();
    }
  });
}

init();
