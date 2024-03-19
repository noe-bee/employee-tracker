const inquirer = require("inquirer");
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

//questions
const questions = [
  {
    type: "list",
    name: "text",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}

init();
