// Required modules
const inquire = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const db = require(".");

// Database connection configuration
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "bootcamp",
  database: "employee_info_db"
});

// Connect to the database
connection.connect(function(error) {
  if (error) throw error;
  console.log("Connected as id " + connection.threadId);

  mainMenu();
});

// Main menu for user interaction
function mainMenu() {
  inquire
    .prompt({
      type: "list",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View departments",
        "View roles",
        "View employees",
        "Update employee role",
        "Exit"
      ],
      message: "What would you like to do?",
      name: "action"
    })
    .then(function(result) {
      console.log("Selected: " + result.action);

      switch (result.action) {
        case "Add department":
          createDepartment();
          break;
        case "Add role":
          createRole();
          break;
        case "Add employee":
          createEmployee();
          break;
        case "View departments":
          showDepartments();
          break;
        case "View roles":
          showRoles();
          break;
        case "View employees":
          showEmployees();
          break;
        case "Update employee role":
          modifyEmployee();
          break;
        default:
          exitApp();
      }
    });
}

// Function definitions

function createDepartment() {
  inquire.prompt({
      type: "input",
      message: "Enter the department name:",
      name: "departmentName"
    }).then(function(answer) {
      connection.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName], function(err, res) {
        if (err) throw err;
        console.table(res);
        mainMenu();
      });
    });
}

function createRole() {
  inquire
    .prompt([
      {
        type: "input",
        message: "Enter the role name:",
        name: "roleName"
      },
      {
        type: "input",
        message: "Enter the salary for this role:",
        name: "roleSalary"
      },
      {
        type: "input",
        message: "Enter the department ID:",
        name: "departmentId"
      }
    ])
    .then(function(answer) {
      connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.roleSalary, answer.departmentId], function(err, res) {
        if (err) throw err;
        console.table(res);
        mainMenu();
      });
    });
}

function createEmployee() {
  inquire
    .prompt([
      {
        type: "input",
        message: "Enter the employee's first name:",
        name: "firstName"
      },
      {
        type: "input",
        message: "Enter the employee's last name:",
        name: "lastName"
      },
      {
        type: "input",
        message: "Enter the employee's role ID:",
        name: "roleId"
      },
      {
        type: "input",
        message: "Enter the manager ID:",
        name: "managerId"
      }
    };

    function quit() {
      connection.end();
      process.exit();
    }