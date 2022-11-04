import "./style.scss";

function Setlist(props) {
  return (
    <div className="setlist" key={props.id}>
      <h1 className="venue">{props.venue}</h1>
      <h4 className="city">{props.city}</h4>
      {props.info && <p className="info">{props.info}</p>}
      <div className="songs">
        {props.sets.set.length ? (
          props.sets.set.map((s, i) => (
            <div key={i}>
              <h2>{s.name || (i > 0 ? "Set" : "")}</h2>
              {s.song.map((song, i) => (
                <p key={`${song.name}+${i}`}>{song.name}</p>
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
