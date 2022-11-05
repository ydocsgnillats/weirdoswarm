import "./style.scss";
import Search from "../Search";
import Hamburger from "hamburger-react";
import Picture from "../Picture";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Nav(props) {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navigate = useNavigate();

  const handleScroll = (page) => {
    navigate(page);
    document.querySelector("nav").scrollIntoView({ behavior: "smooth" });
    setSticky(true);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        setSticky(false);
      }
      if (window.pageYOffset > 700) {
        setSticky(true);
      }
    };
  });

  useEffect(() => {
    setSticky(true);
  }, [navigate]);

  useEffect(() => {
    setSticky(false);
  }, []);

  return (
    <>
      <Picture source={require("../../assets/weirdoswarm.png")} />
      <nav className={`nav ${sticky ? "sticky" : ""}`}>
        <button
          onClick={() => handleScroll("/sets")}
          className="links"
          to="/sets"
        >
          Sets
        </button>
        <button onClick={() => handleScroll("/meetups")} className="links">
          Meetups
        </button>
        <a
          className="links"
          href="https://jollyswapper.com/gatorgang"
          target="_blank"
        >
          Gift Exchange
        </a>
        <Search setSearchQuery={(value) => props.setSearchQuery(value)} />
        <div className="hamburger">
          <Hamburger toggled={open} toggle={setOpen} />
        </div>
      </nav>
      {open && (
        <div className={`mobile-links ${sticky ? "sticky" : ""}`}>
          <button
            onClick={() => handleScroll("/sets")}
            className="links-mobile"
            to="/sets"
          >
            Sets
          </button>
          <button
            onClick={() => handleScroll("/meetups")}
            className="links-mobile"
            to="/meetups"
          >
            Meetups
          </button>
          <a
            className="links-mobile"
            href="https://jollyswapper.com/gatorgang"
            target="_blank"
          >
            Gift Exchange
          </a>
        </div>
      )}
    </>
  );
}

export default Nav;
