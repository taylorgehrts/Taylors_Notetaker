const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

//put route requires here//


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//add use for routes here


//Server initialization
app.listen(PORT, () => {
    console.log(`API server now listening on port ${PORT}!`);
});