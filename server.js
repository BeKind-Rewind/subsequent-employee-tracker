const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const db = require('./db/connections');









// Route handler for req not supported, default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});