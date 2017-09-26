console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Process',process.argv);
console.log('Yargs', argv);

if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);

    if(note === undefined){
        console.log('Sorry title already exists. Try another title.');
    } else {
        console.log('New note added.');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }

} else if (command === 'list'){
    notes.getAll();
} else if (command === 'read'){
    notes.getNote(argv.title);
} else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized')
}

