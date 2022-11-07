import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Meetup from "../../components/Meetup";
import db from "../../utils/firebase";
import { useState, useEffect } from "react";

function Meetups() {
  const [filter, setFilter] = useState("");
  const [meetups, setMeetups] = useState([]);
  const [images, setImages] = useState([
    require("../../assets/atlmeetup.jpeg"),
    require("../../assets/ashevillemeetup.jpeg"),
    require("../../assets/denvermeetup.jpeg"),
  ]);

  //   useEffect(() => {
  //     fetch("/api")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setBackendData(data);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     console.info("rows", backendData.setlist);
  //   }, [backendData]);

  // useEffect(() => {
  //   console.log(filter);
  // }, [filter]);

  useEffect(() => {
    db.collection("Meetups").onSnapshot((snapshot) => {
      setMeetups(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [meetups]);

  return (
    <div className="meetups">
      <Nav setSearchQuery={(target) => setFilter(target)} />
      <Content>
        <div>
          {meetups.length < 1 ? (
            <p>Loading...</p>
          ) : (
            <div>
              {filter
                ? meetups
                    .filter((meet) =>
                      meet.data.city.toLowerCase().includes(filter)
                    )
                    .map((meet, i) => (
                      <Meetup
                        key={i}
                        city={meet.data.city}
                        date={meet.data.date}
                        time={meet.data.time}
                        link={meet.data.link}
                        source={images[meet.data.source]}
                        location={meet.data.location}
                        info={meet.data.info}
                      />
                    ))
                : meetups.map((meet, i) => (
                    <Meetup
                      key={i}
                      city={meet.data.city}
                      date={meet.data.date}
                      time={meet.data.time}
                      link={meet.data.link}
                      source={images[meet.data.source]}
                      location={meet.data.location}
                      info={meet.data.info}
                    />
                  ))}
            </div>
          )}
        </div>
      </Content>
    </div>
  );
}

export default Meetups;
