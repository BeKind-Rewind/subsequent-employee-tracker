const mysql = require('mysql2');
require('dotenv').config()
// Connect to the db
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // Your MySql username,
        user: process.env.DB_USER,
        // Your MySql password
        password: process.env.DB_PW,
        database: 'organization'
    },
    console.log('Connected to the organization database.')
);


module.exports = db;