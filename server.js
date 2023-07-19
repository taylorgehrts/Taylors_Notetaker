//setup and imports
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./public/assets/routes/apiRoutes');
const htmlRoutes = require('./public/assets/routes/htmlRoutes');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//which routes to use
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Server initialization
app.listen(PORT, () => {
    console.log(`API server now listening on port ${PORT}!`);
});