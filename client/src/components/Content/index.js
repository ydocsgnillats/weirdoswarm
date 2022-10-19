import "./style.scss";
import Picture from "../Picture";

function Content(props) {
  return (
    <>
      <div className="content">
        <Picture source={props.source} />
        <div className="middle">{props.children}</div>
      </div>
    </>
  );
}

export default Content;
