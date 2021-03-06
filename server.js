// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Port
const PORT = process.env.PORT || 3000;

// Middleware
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));

// Routes
app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));

// Mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Server listening
app.listen(PORT, () => {
  console.log("Server listening on http://localhost:" + PORT)
});