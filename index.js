const inquirer = require("inquirer");
const { viewDepartments, addDepartment, viewRoles, addRole, viewEmployees} = require("./db/dataManip");

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
        const roleQuestios = [
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
            choices: ["Production", "Marketing", "Human Resources"],
          },
        ];
        inquirer.prompt(roleQuestios).then((answer) => {
          console.log(answer);
          // if (answer.newRoleDepartment === "Marketing") {

          // }
          addRole(answer.newRole, answer.newRoleSalary, answer.newRoleDepartment)
        });
        break;
      case "Add an employee":
        // code block
        break;
      case "Update an employee role":
        // code block
        break;
      default:
        process.exit();
    }
  });
}

init();
