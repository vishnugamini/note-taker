const note = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')


yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(argv){
        note.addNote(yargs.argv.title,yargs.argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe:"Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        note.removeNote(yargs.argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "list your notes",
    handler: function(){
        note.listNotes()
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(){
        note.readNote(yargs.argv.title)
    }
})

yargs.parse()

 
