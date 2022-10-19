import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Setlist from "../../components/Setlist";
import { useState, useEffect } from "react";

function Sets() {
  const [backendData, setBackendData] = useState({});
  const [filter, setFilter] = useState("");

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

  // useEffect(() => {
  //   console.log(filter);
  // }, [filter]);

  return (
    <>
      <Nav setSearchQuery={(target) => setFilter(target)} />
      <Content source="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Flosbuffo.com%2Fwp-content%2Fuploads%2F2018%2F01%2F2-King-Gizzard-and-The-Lizard-Wizard-CMW-Indie-Underground-Aaron-McMillan1.jpg%3Ffit%3D1038%252C563&f=1&nofb=1&ipt=840c7be1fda820af5bf4231d93b0fc847096b878cba3c113402472e3b40d7a8a&ipo=images">
        <div>
          {typeof backendData.setlist === "undefined" ? (
            <p>Loading...</p>
          ) : (
            <div>
              {backendData.setlist.map((row, i) => (
                /* if (filter !== '') {
                  if (row.venue.name.include(filter){
                    <Setlist
                    key={i}
                    venue={row.venue.name}
                    city={`${row.venue.city.name}, ${row.venue.city.stateCode}`}
                    info={row.info}
                    songs={
                      row.sets.set[0]?.song || [
                        { name: "No Songs Available Yet." },
                      ]
                    }
                  />
                  }
                }
                else { */
                <Setlist
                  key={i}
                  venue={row.venue.name}
                  city={`${row.venue.city.name}, ${row.venue.city.stateCode}`}
                  info={row.info}
                  songs={
                    row.sets.set[0]?.song || [
                      { name: "No Songs Available Yet." },
                    ]
                  }
                />
                /* } */
              ))}
            </div>
          )}
        </div>
      </Content>
    </>
  );
}

export default Sets;
