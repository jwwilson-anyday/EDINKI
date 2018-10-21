const express = require('express');
var logger = require('morgan');

const vendersRoutes = require('./routes/venders');
const coursesRoutes = require('./routes/courses');

const app = express();
const PORT = process.env.PORT || 5000;

// require .env and db.js
require('dotenv').config();
const db = require('./config/db');

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// routes
app.use('/api/venders', vendersRoutes);
app.use('/api/courses', coursesRoutes);

app.listen(PORT, () => console.log(`Server is running on port: ${port}`));

module.exports = app;
