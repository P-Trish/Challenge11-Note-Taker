// Import all required packages
const notes = require ('express').Router();
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const uuid = require('../utils/uuid');

// GET route 


notes.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));
});


// POST route



























// module.exports = () { }

