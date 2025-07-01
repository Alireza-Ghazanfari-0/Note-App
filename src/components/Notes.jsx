import { XMarkIcon, BoltIcon } from '@heroicons/react/24/solid';
function Notes({ notes, deleteNote, checkNote }) {
  if (notes.length == 0)
    return (
      <div className="fw-bold fs-5" style={{ color: 'brown' }}>
        Hey dude! There is no Data here
        <BoltIcon style={{ width: '1.6rem' }} />
      </div>
    );

  return notes.map((noteItem) => (
    <div key={noteItem.id}>
      <div className="added-Note-class rounded-4 mx-5 mb-3">
        <div className="row pt-2">
          <span className="col-9 text-start ps-4">
            <div
              className={`fw-bold ${noteItem.completed === true && 'complete'}`}
            >
              {noteItem.noteTitle}
            </div>
            <div className="opacity-75">{noteItem.noteDescription}</div>
          </span>
          <span className="col-3">
            <button
              className="btn btn-sm"
              onClick={() => deleteNote(noteItem.id)}
            >
              <XMarkIcon style={{ width: '1.3rem' }} />
            </button>

            <input
              type="checkbox"
              name=""
              id={noteItem.id}
              className=" form-check-input mt-2"
              value={noteItem.id}
              checked={noteItem.completed}
              onChange={checkNote}
            />
          </span>
        </div>
        <hr className="mx-3" />
        <div className="text-start ps-4 opacity-25">
          {new Date(noteItem.creationTime).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',

            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
          })}
        </div>
      </div>
    </div>
  ));
}

export default Notes;

// function NotesText(noteItem, deleteNote, checkNote) {
//   return (

//   );
// }
