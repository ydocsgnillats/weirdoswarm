import "./style.scss";
import { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
<<<<<<< HEAD
=======
import Loading from "../../components/Loading";
>>>>>>> a957e64 (changes)

function Home() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
<<<<<<< HEAD
    fetch("/api")
=======
    fetch("/api/sets")
>>>>>>> a957e64 (changes)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    console.info("rows", backendData.setlist);
  }, [backendData]);

=======
>>>>>>> a957e64 (changes)
  return (
    <>
      <Nav />
      <Content>
        <div>
<<<<<<< HEAD
          {typeof backendData.setlist === "undefined" ? (
            <p>Loading...</p>
=======
          {backendData.setlist.length === 0 ? (
            <Loading text />
>>>>>>> a957e64 (changes)
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
