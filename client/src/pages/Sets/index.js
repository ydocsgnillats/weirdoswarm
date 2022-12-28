import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Setlist from "../../components/Setlist";
<<<<<<< HEAD
=======
import Loading from "../../components/Loading";
>>>>>>> a957e64 (changes)
import debounce from "lodash.debounce";
import { useState, useEffect, useRef } from "react";

function Sets() {
  const [backendData, setBackendData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
<<<<<<< HEAD
=======
  const [stickyFooter, setStickyFooter] = useState(false);
  const [endlessScroll, setEndlessScroll] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
>>>>>>> a957e64 (changes)

  const hiddenRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  const scrollHandler = debounce(() => {
    if (
<<<<<<< HEAD
      window.pageYOffset + window.innerHeight >=
      hiddenRef.current.offsetTop
    ) {
      console.log(`Hidden element is now visible`);
=======
      window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop &&
      endlessScroll
    ) {
>>>>>>> a957e64 (changes)
      nextPage();
    }
  }, 500);

<<<<<<< HEAD
  useEffect(() => {
    fetch(`/api/${page}`)
=======
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
>>>>>>> a957e64 (changes)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(backendData.concat(data.setlist));
      });
<<<<<<< HEAD
=======
    if (page > 1) setStickyFooter(true);
>>>>>>> a957e64 (changes)
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
<<<<<<< HEAD
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
=======
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
>>>>>>> a957e64 (changes)

  return (
    <>
      <Nav setSearchQuery={(value) => setFilter(value)} />
<<<<<<< HEAD
      <Content footRef={hiddenRef}>
        <div>
          {typeof backendData === "undefined" ? (
            <p>Loading...</p>
          ) : (
            <div>
=======
      <Content footRef={hiddenRef} stickyFooter={stickyFooter}>
        <div>
          {backendData.length === 0 ? (
            <Loading text />
          ) : (
            <div className="sets">
>>>>>>> a957e64 (changes)
              {filter ? (
                filteredData.length > 0 ? (
                  filteredData.map((row, i) => (
                    <Setlist
                      key={i}
                      venue={row?.venue.name}
<<<<<<< HEAD
                      city={`${row?.venue.city.name}, ${row?.venue.city.stateCode}`}
                      date={row?.eventDate}
                      info={row?.info}
                      sets={row?.sets}
                    />
                  ))
                ) : (
                  <Setlist venue="No results found." />
=======
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
>>>>>>> a957e64 (changes)
                )
              ) : (
                backendData.map((row, i) => (
                  <Setlist
                    key={i}
                    venue={row?.venue.name}
<<<<<<< HEAD
                    city={`${row?.venue.city.name}, ${row?.venue.city.stateCode}`}
=======
                    city={row?.venue.city.name}
                    state={row?.venue.city.stateCode}
>>>>>>> a957e64 (changes)
                    date={row?.eventDate}
                    info={row?.info}
                    sets={row?.sets}
                  />
                ))
              )}
            </div>
          )}
<<<<<<< HEAD
=======
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
>>>>>>> a957e64 (changes)
        </div>
      </Content>
    </>
  );
}

export default Sets;
