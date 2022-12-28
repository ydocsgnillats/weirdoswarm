import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
<<<<<<< HEAD
=======
import Song from "../../components/Song";
import Loading from "../../components/Loading";
>>>>>>> a957e64 (changes)
import { useState, useEffect } from "react";

function Songs() {
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    fetch("/songs")
=======
    fetch("/api/songs")
>>>>>>> a957e64 (changes)
      .then((d) => d.text())
      .then((d) => setBackendData(JSON.parse(d)));
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    console.info("rows", backendData);
  }, []);

  useEffect(() => {
=======
>>>>>>> a957e64 (changes)
    setFilteredData(
      backendData.filter((d) => d.songName.toLowerCase().includes(filter))
    );
  }, [filter]);

  return (
    <>
      <Nav setSearchQuery={(value) => setFilter(value)} />
      <Content>
<<<<<<< HEAD
        <div className="song">
          <span className="songs-title">Songs</span>
          <span className="songs-counts">Times Played Live</span>
        </div>
        <div className="songs">
          {filter ? (
            filteredData.length > 0 ? (
              filteredData.map((row, i) => (
                <div key={i} className="song">
                  <span className="songs-name">{row.songName}</span>
                  <span className="songs-count">{row.songCount}</span>
                </div>
              ))
            ) : (
              <div className="song">No Songs Found</div>
            )
          ) : (
            backendData.map((row, i) => (
              <div key={i} className="song">
                <span className="songs-name">{row.songName}</span>
                <span className="songs-count">{row.songCount}</span>
              </div>
            ))
          )}
        </div>
=======
        {backendData.length === 0 ? (
          <Loading text />
        ) : (
          <>
            <div className="song">
              <span className="songs-title">Songs</span>
              <span className="songs-counts">Times Played Live</span>
            </div>
            <div className="songs-list">
              {filter ? (
                filteredData.length > 0 ? (
                  filteredData.map((row, i) => (
                    <Song
                      key={i}
                      songName={row.songName}
                      songCount={row.songCount}
                    />
                  ))
                ) : (
                  <div className="song">No Songs Found</div>
                )
              ) : (
                backendData.map((row, i) => (
                  <Song
                    key={i}
                    songName={row.songName}
                    songCount={row.songCount}
                  />
                ))
              )}
            </div>
          </>
        )}
>>>>>>> a957e64 (changes)
      </Content>
    </>
  );
}

export default Songs;
