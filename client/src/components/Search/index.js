import "./style.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = (props) => {
  const location = useLocation();
  const [placeHolderText, setPlaceHolderText] = useState("");

  useEffect(() => {
    console.log(props.placeHolder);
    switch (props.placeHolder) {
      case "/sets":
        setPlaceHolderText("Search Setlists");
        break;
      case "/meetups":
        setPlaceHolderText("Search Meetups");
        break;
      default:
        setPlaceHolderText("Search Setlists");
        break;
    }
  }, [location]);

  return (
    <div className="search">
      <input
        onChange={(e) => props.setSearchQuery(e.target.value.toLowerCase())}
        type="text"
        id="header-search"
        placeholder={placeHolderText}
        name="searchbar"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
