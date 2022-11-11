import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import { useState, useEffect } from "react";

function Songs() {
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/songs")
      .then((d) => d.text())
      .then((d) => setBackendData(JSON.parse(d)));
  }, []);

  useEffect(() => {
    console.info("rows", backendData);
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
      </Content>
    </>
  );
}

export default Songs;
