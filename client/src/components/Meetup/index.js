import "./style.scss";
import { Image } from "react-image-and-background-image-fade";
import Loading from "../Loading";

function Meetup(props) {
  return (
    <div className="meetup">
      <div>
        <Image
          className="image"
          src={props.source}
          alt={`${props.city} meetup image`}
          renderLoader={({ hasLoaded, hasFailed }) => <Loading />}
        />
      </div>
      <div className="content-box">
        <h1 className="city">{props.city}</h1>
        <h4 className="date">{props.date}</h4>
        <h4 className="time">{props.time}</h4>
        {props.link ? (
          <a href={props.link} rel="noreferrer noopener" target="_blank">
            <h4 className="location">{props.location}</h4>
          </a>
        ) : (
          <h4 className="location">{props.location}</h4>
        )}
        <div className="info">{props.info}</div>
      </div>
    </div>
  );
}

export default Meetup;
