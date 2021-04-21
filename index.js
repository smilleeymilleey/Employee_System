const mysql = require('mysql');
const inquirer = require('inquirer');
const util = require ('util');

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

const query = util.promisify(connection.query).bind(connection)

start();

function start(){
    inquirer.prompt([
        {
            type: "list",
            name: "name",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Departments", "View All Roles","Add Employee", "Add Role", "Add Department", "Update Employee Role"]
        }
    ]).then(choices => {
        if (choices.name === "View All Employees") {
            connection.query('SELECT * From employee_trackerdb.employee', function (error, results, fields) {
                console.table(results)
                start();
            })
        } else if (choices.name === "Add Employee") {
            addEmployee();   
        } else if (choices.name === "View All Roles") {
            connection.query('SELECT * From employee_trackerdb.roles', function
            (error, results, fields) {
                console.table(results)
                start(); 
            })
        } else if (choices.name === "Add Role"){
            addRole() 
        } else if (choices.name === "View All Departments") {
            connection.query('SELECT * From employee_trackerdb.department', function
            (error, results, fields) {
                console.table(results)
                start();
            })
        } else if (choices.name === "Add Department"){
            addDepartment()
        }        
    }).catch(error => {
        console.error(error);
    });
}

async function getRoles() {
    let roles = await query('SELECT * From employee_trackerdb.roles') 
    roles = roles.map(role => role.title)

    return roles; 
}

async function addEmployee(){
    let roles = await getRoles();
    
    inquirer.prompt([
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
            choices: roles
         }    
    ]).then(answer => {
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
async function addEmployee(){
    let roles = await getRoles();

    inquirer.prompt([
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
            choices: roles
         }    
    ])
    .then(answer => {
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




function addRole(){
    
    inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "salary",
            message: "What is the empployees salary? ",  
        }, 
        {
            type: "input",
            name: "title",
            message: "What is the employees title",  
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
        connection.query('INSERT INTO employee_trackerdb.roles SET ?',
        {
            salary: answer.salary,
            title: answer.title,
            department_id: 1

        },
        
        (err) => {
            if (err) throw err;
            console.table('New Role was Created!');
            start();     
        })
    });
    

}
   
    function addDepartment(){
        inquirer
        .prompt([
            /* Pass your questions in here */
            {
            type: "input",
            name: "departmentName",
            message: "What is the new department name?",  
            } 
           
        ])
        
        .then(answer => {
            // Use user feedback for... whatever!
            connection.query( 'INSERT INTO employee_trackerdb.department SET ?',
            {
                dept_name: answer.departmentName,
                  
            },
            
            (err) => {
                if (err) throw err;
                console.table('New Department was created successfully!');
                    
            })
        });
    }