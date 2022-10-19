import "./style.scss";

function Picture(props) {
  return props.source ? <img className="image" src={props.source} /> : "";
}

export default Picture;
