import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Game from "../../components/Game";
<<<<<<< HEAD

function Games() {
=======
import { useState } from "react";

function Games() {
  const [filter, setFilter] = useState("");

>>>>>>> a957e64 (changes)
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
<<<<<<< HEAD
      <Nav />
      <Content>
        <div className="games">
          {console.info(games)}
          {games.map((game, i) => (
            <Game key={i} name={game.name} by={game.by} link={game.link} />
          ))}
=======
      <Nav setSearchQuery={(target) => setFilter(target)} />
      <Content>
        <div className="games">
          {filter
            ? games
                .filter((game) => game.name.toLowerCase().includes(filter))
                .map((game, i) => (
                  <Game
                    key={i}
                    name={game.name}
                    by={game.by}
                    link={game.link}
                  />
                ))
            : games.map((game, i) => (
                <Game key={i} name={game.name} by={game.by} link={game.link} />
              ))}
>>>>>>> a957e64 (changes)
        </div>
      </Content>
    </>
  );
}

export default Games;
