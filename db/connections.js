const mysql = require('mysql2');

// Connect to the db
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // Your MySql username,
        user: 'root',
        // Your MySql password
        password: 'AllThePuppies123!',
        database: 'organization'
    },
    console.log('Connected to the organization database.')
);


module.exports = db;