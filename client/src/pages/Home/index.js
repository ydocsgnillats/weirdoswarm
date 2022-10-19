import "./style.scss";
import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Content from "../../components/Content";

function Home() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  useEffect(() => {
    console.info("rows", backendData.setlist);
  }, [backendData]);

  return (
    <>
      <Nav />
      <Content>
        <div>
          {typeof backendData.setlist === "undefined" ? (
            <p>Loading...</p>
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
