const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: '',
    database: 'employee',
});


connection.connect((err) => {
    if (err) throw err;
    console.log(`connected!`);
    
  });