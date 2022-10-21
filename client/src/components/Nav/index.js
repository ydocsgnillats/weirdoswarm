import "./style.scss";
import { Link } from "react-router-dom";
import Search from "../Search";
import Hamburger from "hamburger-react";
import { useState } from "react";

function Nav(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <Link className="title" to="/">
        Weirdo Swarm
      </Link>
      <Link className="links" to="/sets">
        Sets
      </Link>
      <Link className="links" to="/meetups">
        Meetups
      </Link>
      <a
        className="links"
        href="https://jollyswapper.com/gatorgang"
        target="_blank"
      >
        Gift Exchange
      </a>
      {open && (
        <>
          <Link className="links-mobile" to="/sets">
            Sets
          </Link>
          <Link className="links-mobile" to="/meetups">
            Meetups
          </Link>
          <a
            className="links-mobile"
            href="https://jollyswapper.com/gatorgang"
            target="_blank"
          >
            Gift Exchange
          </a>
        </>
      )}
      <Search setSearchQuery={(value) => props.setSearchQuery(value)} />
      <div className="hamburger">
        <Hamburger toggled={open} toggle={setOpen} />
      </div>
    </div>
  );
}

export default Nav;
