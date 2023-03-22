## Employee Tracker

## Overview
Employee Tracker is a command-line Content Management System (CMS) that allows users to manage a company's employee data. It is built with Node.js, Inquirer, and MySQL, making it easy for non-developers to view and interact with information stored in a relational database.

## Video Link: https://www.youtube.com/watch?v=pXzXLlROfB0&ab_channel=AmishSharma

## Screenshot
<img width="573" alt="Screenshot 2023-03-21 at 8 51 59 PM" src="https://user-images.githubusercontent.com/114682284/226781441-a8792e71-aaaf-4e05-ac03-f270176c2264.png">


## Key Features
* MySQL Workbench for database management
* MySQL command-line prompt (MySQL Shell) for direct database access
* Schema and seed files for development and production
* CRUD operations for managing employee data
* Ability to join data between tables

## Installation
Before starting, make sure you have MySQL Server, Workbench, and Shell installed on your computer. Follow these installation instructions for your Mac or Windows computers.

## Dependencies
To use Employee Tracker, you will need to install the following dependencies:

* 'mysql2' for connecting to the MySQL database
* 'inquirer' for the command-line interface
* 'console.table' for displaying data in a tabular format

Run 'npm install' to install the required dependencies.

## Usage
To start the application, run node employee-tracker.js. You will be presented with a main menu that allows you to choose from various options to manage your company's employee data:

* Add department
* Add role
* Add employee
* View departments
* View roles
* View employees
* Update employee role
* Exit

Select an option, and follow the prompts to execute the corresponding action. After each action, you will be brought back to the main menu to choose another action or exit the application.

## Learning Objectives
Upon completion of Employee Tracker, you will be able to:

* Configure a Node.js application to connect to a MySQL instance
* Create and drop databases and tables
* Explain and execute CRUD methods
* Use both a GUI and the MySQL command-line prompt to interface with a database
* Create schema and seed files for development and production
* Write join statements to establish relations between data in one or more tables
* Frequently Asked Questions

## What is CRUD?

CRUD stands for Create, Read, Update, and Delete. These are the four basic operations that can be performed on data in a database.

## What is ACID?

ACID stands for Atomicity, Consistency, Isolation, and Durability. These are the four properties that ensure reliable and error-free processing of database transactions.

## How does one join data between tables?

Joining data between tables can be done using SQL JOIN statements, such as INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN. These statements are used to combine data from two or more tables based on a related column between them.

## Contributing
Please feel free to submit issues and pull requests for improving Employee Tracker. Your contributions are greatly appreciated.

## License
This project is licensed under the ISC License.
