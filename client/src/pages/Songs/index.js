import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Song from "../../components/Song";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";

function Songs() {
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api/songs")
      .then((d) => d.text())
      .then((d) => setBackendData(JSON.parse(d)));
  }, []);

  useEffect(() => {
    setFilteredData(
      backendData.filter((d) => d.songName.toLowerCase().includes(filter))
    );
  }, [filter]);

  return (
    <>
      <Nav setSearchQuery={(value) => setFilter(value)} />
      <Content>
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
      </Content>
    </>
  );
}

export default Songs;
