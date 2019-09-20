var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const mongoConfig = require('./config/mongo')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const teamsRouter = require('./routes/teams');
const projectsRouter = require('./routes/projects');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teams', teamsRouter);
app.use('/projects', projectsRouter);

module.exports = app;
