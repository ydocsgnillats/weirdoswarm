import "./style.scss";
<<<<<<< HEAD
=======
import { Image } from "react-image-and-background-image-fade";
import Loading from "../Loading";
>>>>>>> a957e64 (changes)

function Meetup(props) {
  return (
    <div className="meetup">
      <div>
<<<<<<< HEAD
        <img className="image" src={props.source} />
=======
        <Image
          className="image"
          src={props.source}
          alt={`${props.city} meetup image`}
          renderLoader={({ hasLoaded, hasFailed }) => <Loading />}
        />
>>>>>>> a957e64 (changes)
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
