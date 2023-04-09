// Import all required packages
const notes = require ('express').Router();
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET route 


notes.get('/', (req, res) => {
    console.info(`${req.method} request received for reading notes`);
    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));
});


// POST route

notes.post('/', (req, res) => {
    console.info(`${req.method} request received for creating notes`);
    const {title, text} = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json(newNote);
    }
    else {res.error ('Error during POST');}
 
});

// DELETE route BONUS
notes.delete('/:id', (req, res) => {
 console.info(`${req.method} request received for deleting notes`);
 const {id} = req.params.id;
 if (id) {
    deleteAndUpdate(id, './db/db.json');
}
)
module.exports = notes;

