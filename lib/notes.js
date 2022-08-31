const fs = require('fs');
const path = require('path');

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if(query.title) {
       filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    if(query.id) {
        filteredResults =filteredResults.filter(note => note.id === query.id);
    }
    return filteredResults;
}

function createNewNote(note, notesArray) {
    const newNote = {
        id: note.id,
        title: note.title,
        message: note.message
    }
    notesArray.push(newNote);
    fs.writeFileSync(path.join(__dirname, '../db/notes.json'),
    JSON.stringify({notesArray}, null,2));
    return note;
}