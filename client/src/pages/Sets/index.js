import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Setlist from "../../components/Setlist";
import debounce from "lodash.debounce";
import { useState, useEffect, useRef } from "react";

function Sets() {
  const [backendData, setBackendData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const hiddenRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  const scrollHandler = debounce(() => {
    if (
      window.pageYOffset + window.innerHeight >=
      hiddenRef.current.offsetTop
    ) {
      console.log(`Hidden element is now visible`);
      nextPage();
    }
  }, 100);

  useEffect(() => {
    fetch(`/api/${page}`)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(backendData.concat(data.setlist));
      });
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    console.info("rows", backendData);
  }, [backendData]);

  // window.onscroll = debounce(() => {
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     nextPage();
  //   }
  // }, 100);

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
      <Content footRef={hiddenRef}>
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
                  <Setlist venue="No results found." />
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
