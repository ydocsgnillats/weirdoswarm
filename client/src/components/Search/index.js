import "./style.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = (props) => {
  const location = useLocation();
  const [placeHolderText, setPlaceHolderText] = useState("");

  useEffect(() => {
<<<<<<< HEAD
    console.log(props.placeHolder);
=======
>>>>>>> a957e64 (changes)
    switch (props.placeHolder) {
      case "/sets":
        setPlaceHolderText("Search Setlists");
        break;
      case "/meetups":
        setPlaceHolderText("Search Meetups");
        break;
      case "/songs":
        setPlaceHolderText("Search Songs");
        break;
<<<<<<< HEAD
=======
      case "/games":
        setPlaceHolderText("Search Games");
        break;
>>>>>>> a957e64 (changes)
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
