// connection to mysql

const mysql = require('mysql');

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
SELECT * From employee_trackerdb.employee

// get first name from employee table 
SELECT first_name From employee_trackerdb.employee

// get last name from employee table
SELECT last_name From employee_trackerdb.employee

// get manager id 
SELECT manager_id From employee_trackerdb.employee

// get entire role table 
SELECT * From employee_trackerdb.roles

// get entire department table
SELECT * From employee_trackerdb.department








// inquirer prompts for command line questioning 

