import { isRouteErrorResponse } from "react-router";

import "./style.scss";

function Setlist(props) {

  let date = `${props.date.slice(3,6)}${props.date.slice(0,3)}${props.date.slice(6,10)}`;

  return (
    <div className="setlist" id="setlist" key={props.id}>
      <h1
        className={`venue ${
          props.venue?.toLowerCase().includes(props.filter) ? "highlight" : ""
        }`}
      >
        {props.venue}
      </h1>
      <div className="city-state">
        <h4
          className={`city ${
            props.city?.toLowerCase().includes(props.filter) ? "highlight" : ""
          }`}
        >
          {`${props.city},`}
        </h4>
        <h4
          className={`state ${
            props.state?.toLowerCase().includes(props.filter) ? "highlight" : ""
          }`}
        >
          {props.state}
        </h4>
      </div>
      <h5 className="date">{date}</h5>
      {props?.info && <p className="info">{props.info}</p>}
      <div className="songs">
        {props.sets?.set.length ? (
          props.sets?.set.map((s, i) => (
            <div key={i}>
              <h2>{s.name || (i > 0 ? "Set" : "")}</h2>
              {s?.song.map((song, i) => (
                <p key={`${song?.name}+${i}`}>{song?.name}</p>
              ))}
            </div>
          ))
        ) : (
          <p>Not Available Yet</p>
        )}
      </div>
    </div>
  );
}

export default Setlist;
