import "./style.scss";

function Setlist(props) {
  return (
    <div className="setlist">
      <h1 className="venue">{props.venue}</h1>
      <h4 className="city">{props.city}</h4>
      <p className="info">{props.info}</p>
      <div className="songs">
        {props.songs && props.songs.map((song) => <p>{song.name}</p>)}
      </div>
    </div>
  );
}

export default Setlist;
