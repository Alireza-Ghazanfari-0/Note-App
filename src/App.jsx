import './App.css';
import Header from './components/Header.jsx';
import AddNote from './components/AddNote.jsx';
import NoteStatus from './components/NoteStatus.jsx';
import Notes from './components/Notes.jsx';
import { useState } from 'react';

function App() {
  //below state is for data
  const [note, setNote] = useState([]);
  //add Note--link to AddNote component
  const handleAddNote = function (newData) {
    setNote((i) => [...i, newData]);
  };
  //delete Note-- link to Notes component
  const handleDeleteNote = function (id) {
    const deletedNote = note.filter((item) => id !== item.id);
    setNote(deletedNote);
  };
  //check Mark Note
  const handleCompleteNote = function (e) {
    const newNote = note.map((i) =>
      i.id == +e.target.value ? { ...i, completed: !i.completed } : i
    );
    setNote(newNote);
  };
  //sort
  const [sortBy, setSortBy] = useState('latest');
  let sortedNotes = note;
  if (sortBy === 'earliest')
    //[...note] baraye short copy ya clone kardan
    sortedNotes = [...note].sort(
      (a, b) => new Date(a.creationTime) - new Date(b.creationTime)
    );
  if (sortBy === 'latest')
    sortedNotes = [...note].sort(
      (a, b) => new Date(b.creationTime) - new Date(a.creationTime)
    );
  if (sortBy === 'completed')
    sortedNotes = [...note].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  //
  return (
    <div className="container">
      <Header
        notes={note}
        sortBy={sortBy}
        sortItem={(i) => setSortBy(i.target.value)}
      />
      <div className="row">
        <AddNote addNote={handleAddNote} />
        <div className="col-8">
          <NoteStatus notes={note} />
          <Notes
            notes={sortedNotes}
            deleteNote={handleDeleteNote}
            checkNote={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
