import "./style.scss";
import Footer from "../../components/Footer";

function Content(props) {
  return (
    <>
      <div className="content">
        <div className="leftside"></div>
        <div className="middle">{props.children}</div>
        <div className="rightside"></div>
<<<<<<< HEAD
        <Footer footRef={props.footRef} />
=======
        <Footer footRef={props.footRef} stickyFooter={props.stickyFooter} />
>>>>>>> a957e64 (changes)
      </div>
    </>
  );
}

export default Content;
