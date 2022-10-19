// import { useNavigate } from 'react-router-dom';
import "./style.scss";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search">
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
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
