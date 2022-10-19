import "./style.scss";
import { Link } from "react-router-dom";
import Search from "../Search";

function Nav() {
  return (
    <div className="nav">
      <Link className="title" to="/">
        Weirdo Swarm
      </Link>
      <Link className="links" to="/sets">
        Sets
      </Link>
      <Search />
    </div>
  );
}

export default Nav;
