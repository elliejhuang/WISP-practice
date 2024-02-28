import React, { useState } from 'react';
import './App.css';
import NoteBoard from './noteboard';

const Note = (props) =>{ //defines a constant? called Note which returns two lines of text which are inthe class "note" and are the parameters name and text
   
  //state variable boolean "editing"

  const [editing, setEditing] = useState(false)

  const [newNoteName, setNewNoteName] = useState('');
  const [newNoteText, setNewNoteText] = useState('');

  //button to toggle edit state

const newNoteNameFunction = (event) => {
  setNewNoteName(event.target.value);
}

const newNoteTextFunction = (event) => {
  setNewNoteText(event.target.value);
}


const saveNote = (event) => {
  props.edit(props.id, newNoteName, newNoteText)
  setEditing(false)
}

const deleteNote = (event) => {
  console.log("its working")
  props.delete(props.id)
}

  if (editing === false) {
    return (
      <div className='note'>  
        <p>{props.name}</p> 
        <p>{props.text}</p>
        <button onClick={deleteNote}> delete </button>
        <button onClick = {() => setEditing(true)}> edit</button>
      </div>
    )
  }

  else {
    return(
        <div className='note'>
        <p> enter title:</p>
          <input type="text" value={newNoteName} onChange={newNoteNameFunction} />

          <p> enter text:</p>
           <input type="text" value={newNoteText} onChange={newNoteTextFunction} />
          {/* <button onClick = {() => props.edit(props.id, newNoteName, newNoteText)}> save</button> */}
          <button onClick = {saveNote}> save </button>
        </div>
    )
  }


  

}
export default Note; //exports the const Note so it can be used in other classes?