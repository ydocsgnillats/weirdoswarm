import "./style.scss";

function Game(props) {
  return (
    <div className="game">
      <h3 className="game-title">{props.name}</h3>
      <h4 className="game-by">By: {props.by}</h4>
      <a
        href={props.link}
        rel="noreferrer noopener"
        target="_blank"
        className="game-link"
      >
        Click To Play
      </a>
    </div>
  );
}

export default Game;
