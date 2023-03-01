const fs = require('fs')
const chalk = require('chalk')


const addNote = function(title,body){
    const notes = loadNotes()
    
    for(let i = 0; i < notes.length; i++){
        if (title === notes[i].title){
            console.log(chalk.red.inverse("title already exists!"))
            return
        }
    }

    notes.push({
        title: title,
        body: body
    })
    console.log(chalk.green.inverse('new note added'))
    saveNotes(notes)
}


const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}



const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        

    }catch(e){
        return []
    }
    
}

const removeNote = function(title){
    const notes = loadNotes()
    if (notes.length === 0){
        console.log(chalk.red.inverse("note doesn't exist"))
        return
    }
    for(let i = 0; i < notes.length; i ++){
        if(notes[i].title === title){
            notes.splice(i,1)
            console.log(chalk.green.inverse("note successfully deleted!"))
            saveNotes(notes)
            return
        }
    }
    console.log(chalk.red.inverse("note doesn't exist!"))
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes!"))
    for(let i = 0; i < notes.length; i ++){
        console.log(i+1 + '.' + ') ' + " " +notes[i].title)
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    for(let i = 0; i < notes.length; i++){
        if(notes[i].title === title){
            console.log(chalk.inverse("Note content : "))
            console.log(notes[i].body)
            return
        }  
    }
    console.log(chalk.red.inverse("Note does not exist!"))
            
}



module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}