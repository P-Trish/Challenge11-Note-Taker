// required
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express ();
const PORT = 3001;

app.use(express.static('public'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
