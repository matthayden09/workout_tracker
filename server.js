// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

// Port
const PORT = process.env.PORT || 3000;

// Middleware
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(logger('dev'));

// Routes

// Mongoose connection

// Server listening
app.listen(PORT, () => {
    console.log("Server listening on http://localhost:" + PORT)
});