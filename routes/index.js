// import all required modules

const express = require('express');

const app = express();

const notesRouter = require('./routes/notes');

app.use('/notes', notesRouter);

module.exports = app;
