import "./style.scss";
import { useEffect } from "react";
import Picture from "../Picture";
import Footer from "../../components/Footer";

function Content(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content">
        <Picture source={props.source} />
        <div className="middle">{props.children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Content;
