import "./style.scss";
import Footer from "../../components/Footer";

function Content(props) {
  return (
    <>
      <div className="content">
        <div className="leftside"></div>
        <div className="middle">{props.children}</div>
        <div className="rightside"></div>
        <Footer footRef={props.footRef} />
      </div>
    </>
  );
}

export default Content;
