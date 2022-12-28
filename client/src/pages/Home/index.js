import "./style.scss";
import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Loading from "../../components/Loading";

function Home() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("/api/sets")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <Content>
        <div>
          {backendData.setlist.length === 0 ? (
            <Loading text />
          ) : (
            <div>
              {backendData.setlist.map((row, i) => (
                <div>
                  <p key={i}>
                    {row.venue.city.name} - {row.venue.name} - {row.info}
                  </p>
                  {row.sets.set &&
                    row.sets.set[0]?.song.map((song) => <li>{song.name}</li>)}
                </div>
              ))}
            </div>
          )}
        </div>
      </Content>
    </>
  );
}

export default Home;
