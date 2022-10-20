import "./style.scss";
import { Link } from "react-router-dom";
import Search from "../Search";

function Nav(props) {
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
      <Search setSearchQuery={(value) => props.setSearchQuery(value)} />
    </div>
  );
}

export default Nav;
