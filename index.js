// connection to mysql & inquirer
const mysql = require('mysql');
var inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: '',
    database: 'employee_trackerdb',
});


connection.connect((err) => {
    if (err) throw err;
    console.log(`connected!`);
    
  });



//  connection queries 

// get entire employee table 
// SELECT * From employee_trackerdb.employee

// get first name from employee table 
// SELECT first_name From employee_trackerdb.employee

// get last name from employee table
// SELECT last_name From employee_trackerdb.employee

// get manager id 
// SELECT manager_id From employee_trackerdb.employee

// get entire role table 
// SELECT * From employee_trackerdb.roles

// get entire department table
// SELECT * From employee_trackerdb.department

// adding dummy data for the database 




// inquirer prompts for command line questioning 

inquirer
  .prompt([
    /* Pass your questions in here */
   {
    type: "list",
    name: "name",
    message: "What would you like to do?",
    choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager"]
   }
    
  ])
  .then(choices => {
    // Use user feedback for... whatever!!
    console.log(choices)

    if (choices.name === "View All Employees") {
        connection.query('SELECT * From employee_trackerdb.employee', function (error, results, fields) {
            console.log(results)
        })
    }
    console.table([connection.query])
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });