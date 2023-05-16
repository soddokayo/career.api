const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_URL,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DBNAME,
});

connection.connect(error => {
    if(error) console.log("Error occurred", error);
    console.log("Successfully connected to database(mysql).");
})

// connection.query('SELECT * from education;', (error, rows, fields) => {
//     if (error) throw error;
//     console.log('education info is: ', rows)
// })

module.exports = connection;