import { useState } from 'react';

function AddNote({ addNote }) {
  //define states for title & description
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!noteTitle || !noteDescription) return;
    //data
    const newData = {
      noteTitle,
      noteDescription,
      id: Date.now(),
      completed: false,
      creationTime: new Date().toISOString(),
    };
    //link data to father component by below function props
    addNote(newData);
    console.log(newData);
    setNoteTitle('');
    setNoteDescription('');
  };
  return (
    <div className="col-4 ">
      <h2 className="mb-4">Add New Note</h2>
      <form action="" name="addNoteForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={noteTitle}
          placeholder="Note Title"
          className="form-control form-control-lg mb-4 text-center "
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <input
          type="text"
          value={noteDescription}
          placeholder="Note Description"
          className="form-control form-control-lg mb-4 text-center"
          onChange={(e) => setNoteDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-danger">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
