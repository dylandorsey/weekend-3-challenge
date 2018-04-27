const express = require('express');
const mongoose = require('mongoose');
const app = express();
// if on heroku, use the provided port || use 5000
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

// set route for serving /toDos
const toDos = require('./routes/toDos.router');

// app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json()); 

// Serve static files
app.use(express.static('server/public'));

// Serve /toDos
app.use('/toDos', toDos);

// Spin up the server
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
