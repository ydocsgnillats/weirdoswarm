import "./style.scss";
<<<<<<< HEAD

function Picture(props) {
  return props.source ? <img className="picture" src={props.source} /> : "";
=======
import { Image } from "react-image-and-background-image-fade";
import Loading from "../Loading";

function Picture(props) {
  return (
    <Image
      className="picture"
      src={props.source}
      alt="weirdo swarm background"
      renderLoader={({ hasLoaded, hasFailed }) => <Loading />}
    />
  );
>>>>>>> a957e64 (changes)
}

export default Picture;
