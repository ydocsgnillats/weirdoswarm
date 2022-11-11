import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Game from "../../components/Game";

function Games() {
  let games = [
    {
      name: "King Gizz Heardle Game",
      by: "u/TimelandIsWacky on Reddit",
      link: "https://king-gizz-heardle.glitch.me/",
    },
    {
      name: "Mars for the Rich",
      by: "nuevodisco.systems",
      link: "https://marsfortherich.com",
    },
  ];

  return (
    <>
      <Nav />
      <Content>
        <div className="games">
          {console.info(games)}
          {games.map((game, i) => (
            <Game key={i} name={game.name} by={game.by} link={game.link} />
          ))}
        </div>
      </Content>
    </>
  );
}

export default Games;
