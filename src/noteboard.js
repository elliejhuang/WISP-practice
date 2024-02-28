import React, { useState, useEffect } from 'react';
import Note from './note';
import './App.css';
import {addNewNote, deleteNote, updateNote, getAllNotes} from './services/datastore';


const NoteBoard = (props) => { //defines a noteboard class? or noteboard object?



    const [notes, setNotes] = useState([]); //i think this says that when setNotes is called it calls useState with the value the user puts
    const [noteID, setNoteID] = useState(0); //this says when setnoteID is called it useState(0) on noteID???  
    const [newNoteName, setNewNoteName] = useState("") //when setNewNoteName is called it calls useState with the value the user puts
    const [newNoteText, setNewNoteText] = useState("")//same as above^




    const newNoteNameFunction = (event) => {    //defines a constant newNoteNameFunction which happens when an event happens?
        setNewNoteName(event.target.value); //and what it does is it calls the setNewNoteName func to the value of the event
    }
    const newNoteTextFunction = (event) => { //same as other
        setNewNoteText(event.target.value);
    }


    useEffect (() => {
      getAllNotes ((notes_list) => {
        setNotes(notes_list)
      })
    });

    const saveNoteInfo = () => { //no event but def a function still
      // setNotes([...notes, {id: noteID, name: newNoteName, text:newNoteText}]) //appends to notes a note with id of noteID, name of newnotename and text of new note text
      // setNoteID((i)=> i+1) //increments note ID

      addNewNote (noteID, newNoteName, newNoteText);
      setNoteID((i)=> i+1) //increments note ID

    }

    const delNote = (id) => {
      // setNotes(notes.filter((i) => i.id !== id));
      deleteNote(id);
    }


    const editNote = (id, newName, newText) => {
        // const newNotes = notes.map((note,i)=> {
        //   if (i == id){
        //     return {id:id, nam:newName, text: newText};
        //   }
        //   else{
        //     return note;
        //   }
        // });
        // setNotes(newNotes);
        updateNote (id, newName, newText)


    }

    let allNotes = '';
    if (notes != null) {
      allNotes = Object.entries(notes).map(([id,note]) => {
        return (
          <Note
            name={note.name} //i think this defines what is a note?
            text={note.text}
            id={id}
            key={id}
            delete = {delNote}
            edit = {editNote}
            />
        );
      }
      )
    }

   return (
    //this is text stuff like format of the page in general and creates the text boxes
    //and the button
     <div class="text"> 
       <p class = "title"> My Notes </p> 
       <p>add a new note!</p>
       <p>enter title:</p>
        <input type="text" value={newNoteName} onChange={newNoteNameFunction} /> 

        <p>enter text:</p>
        <input type="text" value={newNoteText} onChange={newNoteTextFunction} />
       <button onClick={saveNoteInfo}>Save!</button>
       <div class="noteboard">
       {allNotes}
       </div>

     </div>
   );
}
export default NoteBoard;