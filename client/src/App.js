import "./App.css";
import { useState, useEffect } from "react";

function App() {
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
    <div>
      <h1>Weirdo Swarm Test</h1>
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
  );
}

export default App;
