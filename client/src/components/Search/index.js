import "./style.scss";

const SearchBar = (props) => {
  return (
    <div className="search">
      <input
        onChange={(e) => props.setSearchQuery(e.target.value.toLowerCase())}
        type="text"
        id="header-search"
        placeholder="Search Setlists..."
        name="searchbar"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
