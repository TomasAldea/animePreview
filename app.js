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


const connectSession = require("./configs/session.config.js")


connectDb()

hbs.registerPartials(`${__dirname}/views/partials/`)

const app = express();

// require database configuration
require('./configs/db.config');

connectSession(app)

// Middleware Setup
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  const { _method } = req.body;
  if (_method) {
    req.method = _method;
  }
  next();
});

app.use(cookieParser());

// Express View engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use((req, res, next) => {
  res.locals.currentUser = req.session.currentUser;
  next();
});

const animeRoutes = require("./routes/animeRoute")
const authRoutes = require("./routes/index"); 


app.use('/', authRoutes );
app.use("/", animeRoutes)


app.listen(process.env.PORT, () => {
    console.log("server running on port 4000");
});
  
module.exports = app;