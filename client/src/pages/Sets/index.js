import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Setlist from "../../components/Setlist";
import Loading from "../../components/Loading";
import debounce from "lodash.debounce";
import { useState, useEffect, useRef } from "react";

function Sets() {
  const [backendData, setBackendData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [stickyFooter, setStickyFooter] = useState(false);
  const [endlessScroll, setEndlessScroll] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const hiddenRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  const scrollHandler = debounce(() => {
    if (
      window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop &&
      endlessScroll
    ) {
      nextPage();
    }
  }, 500);

  const searchAll = () => {
    setLoading(true);
    fetch("/api/search")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        setLoading(false);
        setLoaded(true)
      });
  };

  useEffect(() => {
    fetch(`/api/sets/${page}`)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(backendData.concat(data.setlist));
      });
    if (page > 1) setStickyFooter(true);
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (filter.length === 0) {
      setEndlessScroll(true);
      setLoaded(false);
    }
    if (filter.length > 0) {
      setEndlessScroll(false);
    }
    if (filter.length === 2) {
      setFilteredData(
        backendData.filter((set) =>
          set?.venue?.city?.stateCode?.toLowerCase().includes(filter)
        )
      );
    } else
      setFilteredData(
        backendData.filter(
          (set) =>
            set?.venue?.name.toLowerCase().includes(filter) ||
            set?.venue?.city?.name.toLowerCase().includes(filter)
          // || set?.sets.set.map((s) => {
          //   s.song.filter((songs) => songs.name.toLowerCase().includes(filter));
          // })
        )
      );
  }, [filter, backendData]);

  return (
    <>
      <Nav setSearchQuery={(value) => setFilter(value)} />
      <Content footRef={hiddenRef} stickyFooter={stickyFooter}>
        <div>
          {backendData.length === 0 ? (
            <Loading text />
          ) : (
            <div className="sets">
              {filter ? (
                filteredData.length > 0 ? (
                  filteredData.map((row, i) => (
                    <Setlist
                      key={i}
                      venue={row?.venue.name}
                      city={row?.venue.city.name}
                      state={row?.venue.city.stateCode}
                      date={row?.eventDate}
                      info={row?.info}
                      sets={row?.sets}
                      filter={filter}
                    />
                  ))
                ) : (
                  <div className="no-results">No Results Found</div>
                )
              ) : (
                backendData.map((row, i) => (
                  <Setlist
                    key={i}
                    venue={row?.venue.name}
                    city={row?.venue.city.name}
                    state={row?.venue.city.stateCode}
                    date={row?.eventDate}
                    info={row?.info}
                    sets={row?.sets}
                  />
                ))
              )}
            </div>
          )}
            {!endlessScroll && <div className="more-container">
              {" "}
              <button
                onClick={() => {
                  searchAll();
                }}
                hidden={endlessScroll || loaded}
                className="more-link"
                disabled={loading}
              >
                {`${loading ? "Loading..." : "Load More"}`}
              </button>
            </div>
            }
        </div>
      </Content>
    </>
  );
}

export default Sets;
