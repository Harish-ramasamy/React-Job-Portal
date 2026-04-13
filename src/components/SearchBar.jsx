function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search jobs..."
      onChange={(e) => setSearch(e.target.value)}
      className="form-control mb-3"
    />
  );
}

export default SearchBar;