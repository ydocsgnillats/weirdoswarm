import "./style.scss";
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
}

export default Picture;
