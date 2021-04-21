
// connection to mysql & inquirer & sequalize 
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



// inquirer prompts for command line questioning 

// adding department to inquirer 


start();
function start(){

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
                console.table(results)
                start();
            })


        } else if (choices.name === "Add Employee") {
            addEmployee();

        } else if (choices.name === "View All Employees By Department"){


            addDepartment()
        }
        
            
    })
        // console.table([connection.query])

    .catch(error => {
        if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } 
    });

}

function addDepartment(){
    inquirer
    .prompt([
        /* Pass your questions in here */
        {
        type: "input",
        name: "employeeFirstName",
        message: "What is the empployees first name? ",  
        }, 
        {
        type: "input",
        name: "employeeLastName",
        message: "What is the employees last name?",  
        }, 
        {
        type: "list",
        name: "role",
        message: "What is the Employees Role?",  
        choices: ["Sales Lead", "Sales Person", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead"]
        },    
    ])

    .then(answer => {

        switch (answer.role) {
            case 'Sales Lead':
                // addSalesLead();
                break;
            case 'Sales Person':
                // addSales();
                break;
            case 'Lead Engineer':
                // addILeadEngineer();
                break;
            case 'Software Engineer':
                // addSoftwareEngineer();
                break;
            case 'Account Manager':
                // addAccountManager();
                break;
            case 'Accountant':
                // addAccountant();
                break;
            case 'Legal Team Lead':
                // addLegal;
                break;
            case `I'm finished building my team`:
                // finishedTeam(employees);
                break;
            default:
                break;
        }


    });
}


function addSalesLead() {
    connection.query( 'INSERT INTO employee_trackerdb.employee SET ?',
    {
        first_name: answer.firstname,
        last_name: answer.lastname,
    
    },
}













    // Use user feedback for... whatever!
    //     connection.query( 'INSERT INTO employee_trackerdb.employee SET ?', 
    //     {
    //         first_name: answer.name, 
    //     },
    //     (err) => {
    //         if (err) throw err;
    //         console.table('New Employee was created successfully!');
    //         start();     
    //     });
    // });



// adding employee to inquirer 

function addEmployee(){
 
    inquirer
    .prompt([
        /* Pass your questions in here */
        {
        type: "input",
        name: "firstname",
        message: "What is the empployees first name? ",  
        }, 
        {
        type: "input",
        name: "lastname",
        message: "What is the employees last name?",  
        }, 
        {
        type: "list",
        name: "department",
        message: "What is the Employees Role?",  
        choices: ["Sales Lead", "Sales Person", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead"]
        }    
    ])

    .then(answer => {
    // Use user feedback for... whatever!
        connection.query( 'INSERT INTO employee_trackerdb.employee SET ?',
        {
            first_name: answer.firstname,
            last_name: answer.lastname,
        
        },
        
        (err) => {
            if (err) throw err;
            console.table('New Employee was created successfully!');
            start();     
        })
    });
}