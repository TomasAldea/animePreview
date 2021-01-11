require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const connectDb = require("./configs/db.config")
const logger = require('morgan');
const path = require('path');
const movieRoutes = require("./routes/index")
const connectSession = require("./configs/session.config.js")

connectDb()

const app = express();

// require database configuration
require('./configs/db.config');

connectSession(app)

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

const animeRoutes = require("./routes/animeRoute")
const authRoutes = require("./routes/index"); 


app.use('/', authRoutes );
app.use("/",animeRoutes)


app.listen(4000, () => {
    console.log("server running on port 4000");
});
  
module.exports = app;