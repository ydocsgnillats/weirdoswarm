import "./style.scss";

function Picture(props) {
  return props.source ? <img className="picture" src={props.source} /> : "";
}

export default Picture;
