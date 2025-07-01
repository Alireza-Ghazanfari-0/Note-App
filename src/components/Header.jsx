function Header({ notes, sortBy, sortItem }) {
  return (
    <div className="row mb-5">
      <div className="col-6 fw-bold fs-5">My Notes ({notes.length})</div>
      <Sort notes={notes} sortBy={sortBy} sortItem={sortItem} />
      <hr />
    </div>
  );
}

export default Header;

function Sort({ sortBy, sortItem }) {
  return (
    <div className="col-6 mb-4">
      <select
        name="Sort"
        id=""
        className="form-select w-50 form-select-sm"
        value={sortBy}
        onChange={sortItem}
      >
        <option value="earliest">Sort based on earliest</option>
        <option value="latest"> Sort based on latest</option>
        <option value="completed"> Sort based on completed</option>
      </select>
    </div>
  );
}
