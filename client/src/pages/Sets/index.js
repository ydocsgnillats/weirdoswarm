import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Setlist from "../../components/Setlist";
import debounce from "lodash.debounce";
import { useState, useEffect } from "react";

function Sets() {
  const [backendData, setBackendData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`/api/${page}`)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(backendData.concat(data.setlist));
        console.log(backendData);
      });
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    console.info("rows", backendData);
  }, [backendData]);

  window.onscroll = debounce(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      nextPage();
    }
  }, 100);

  useEffect(() => {
    setFilteredData(
      backendData.filter((set) =>
        set?.venue.name.toLowerCase().includes(filter)
      )
    );
  }, [filter]);

  return (
    <>
      <Nav setSearchQuery={(value) => setFilter(value)} />
      <Content source="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Flosbuffo.com%2Fwp-content%2Fuploads%2F2018%2F01%2F2-King-Gizzard-and-The-Lizard-Wizard-CMW-Indie-Underground-Aaron-McMillan1.jpg%3Ffit%3D1038%252C563&f=1&nofb=1&ipt=840c7be1fda820af5bf4231d93b0fc847096b878cba3c113402472e3b40d7a8a&ipo=images">
        <div>
          {typeof backendData === "undefined" ? (
            <p>Loading...</p>
          ) : (
            <div>
              {filter ? (
                filteredData.length > 0 ? (
                  filteredData.map((row, i) => (
                    <Setlist
                      key={i}
                      venue={row?.venue.name}
                      city={`${row?.venue.city.name}, ${row?.venue.city.stateCode}`}
                      date={row?.eventDate}
                      info={row?.info}
                      sets={row?.sets}
                    />
                  ))
                ) : (
                  <p>No results found</p>
                )
              ) : (
                backendData.map((row, i) => (
                  <Setlist
                    key={i}
                    venue={row?.venue.name}
                    city={`${row?.venue.city.name}, ${row?.venue.city.stateCode}`}
                    date={row?.eventDate}
                    info={row?.info}
                    sets={row?.sets}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </Content>
    </>
  );
}

export default Sets;
