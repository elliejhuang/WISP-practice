// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, ref, set, update, remove, onValue} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoxPIVy26C_iKqht9Vcse7ZBNQdfhMqeQ",
  authDomain: "quizlet-6a2c2.firebaseapp.com",
  databaseURL: "https://quizlet-6a2c2-default-rtdb.firebaseio.com",
  projectId: "quizlet-6a2c2",
  storageBucket: "quizlet-6a2c2.appspot.com",
  messagingSenderId: "146425164918",
  appId: "1:146425164918:web:ecf0dd3926d3da11015b57",
  measurementId: "G-DNVH90S24W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app);


export function getAllNotes (callback = () => {}) {
    const noteRef = ref (db, 'notes/');
    onValue (noteRef, (snapshot) => {
        const notes = snapshot.val();
        callback(notes)
    })
}


export function addNewNote (noteID, noteName, noteText) {
    set (ref (db, 'notes/' + noteID), {
        name: noteName,
        text: noteText,
    });
}

export function deleteNote (id) {
    remove(ref(db, 'notes/' + id))
}

export function updateNote (noteId, newName, newText) {
    update (ref(db, 'notes/' + noteId), {
        name: newName,
        text: newText,
    });
}

