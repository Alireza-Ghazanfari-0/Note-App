function NoteStatus({ notes }) {
  if (notes.length == 0) return;
  const commpletedNotes = notes.filter((i) => i.completed == true);
  return (
    <div className="row mb-4">
      <span className="col-4">
        All <span className="badge text-bg-secondary">{notes.length}</span>
      </span>
      <span className="col-4">
        Completed
        <span className="badge text-bg-secondary">
          {commpletedNotes.length}
        </span>
      </span>
      <span className="col-4">
        Open
        <span className="badge text-bg-secondary">
          {notes.length - commpletedNotes.length}
        </span>
      </span>
    </div>
  );
}

export default NoteStatus;
