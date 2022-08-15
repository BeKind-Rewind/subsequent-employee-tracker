const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connections');
// ADD IMPORT METHOD TO START INQUIRER ONCE IT's SET UP(example:const startInquirer = require("./lib/departments");) *called in last statement below


// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end();
});
  
// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        //   INSERT METHOD TO INITIATE THE IQUIRER PROMPTS (IMPORT PATH LISTED AT TOP)
    });
});