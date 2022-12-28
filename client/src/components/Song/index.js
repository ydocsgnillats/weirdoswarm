import "./style.scss";

function Song(props) {
  return (
    <div className={`song ${props.songCount === "0" ? "not-live" : ""}`}>
      <span className="songs-name">{props.songName}</span>
      <span className="songs-count">{props.songCount}</span>
    </div>
  );
}

export default Song;
