import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import { useState, useEffect } from "react";

function Songs() {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  //   useEffect(() => {
  //     console.info("rows", data);
  //   }, [data]);

  //   useEffect(() => {
  //     setFilteredData(
  //       backendData.filter((set) =>
  //         set?.venue.name.toLowerCase().includes(filter)
  //       )
  //     );
  //   }, [filter]);

  return (
    <>
      <Nav setSearchQuery={(value) => setFilter(value)} />
      <Content>
        <div>
          {/* {typeof data === "undefined" ? (
            <p>Loading...</p>
          ) : ( */}
          {/* <div>
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
            </div> */}
          {/* )} */}
        </div>
      </Content>
    </>
  );
}

export default Songs;
