import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Meetup from "../../components/Meetup";
<<<<<<< HEAD
import db from "../../utils/firebase";
=======
import Loading from "../../components/Loading";
>>>>>>> a957e64 (changes)
import { useState, useEffect } from "react";

function Meetups() {
  const [filter, setFilter] = useState("");
  const [meetups, setMeetups] = useState([]);
  const [images, setImages] = useState([
    require("../../assets/atlmeetup.jpeg"),
    require("../../assets/ashevillemeetup.jpeg"),
    require("../../assets/denvermeetup.jpeg"),
  ]);

<<<<<<< HEAD
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
=======
  useEffect(() => {
    fetch("/api/meetups")
      .then((d) => d.text())
      .then((d) => setMeetups(JSON.parse(d)));
  }, []);
>>>>>>> a957e64 (changes)

  return (
    <div className="meetups">
      <Nav setSearchQuery={(target) => setFilter(target)} />
      <Content>
        <div>
<<<<<<< HEAD
          {meetups.length < 1 ? (
            <p>Loading...</p>
=======
          {meetups.length === 0 ? (
            <Loading text />
>>>>>>> a957e64 (changes)
          ) : (
            <div>
              {filter
                ? meetups
<<<<<<< HEAD
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
=======
                    .filter((meet) => meet.city.toLowerCase().includes(filter))
                    .map((meet, i) => (
                      <Meetup
                        key={i}
                        city={meet.city}
                        date={meet.date}
                        time={meet.time}
                        link={meet.link}
                        source={images[meet.source]}
                        location={meet.location}
                        info={meet.info}
>>>>>>> a957e64 (changes)
                      />
                    ))
                : meetups.map((meet, i) => (
                    <Meetup
                      key={i}
<<<<<<< HEAD
                      city={meet.data.city}
                      date={meet.data.date}
                      time={meet.data.time}
                      link={meet.data.link}
                      source={images[meet.data.source]}
                      location={meet.data.location}
                      info={meet.data.info}
=======
                      city={meet.city}
                      date={meet.date}
                      time={meet.time}
                      link={meet.link}
                      source={images[meet.source]}
                      location={meet.location}
                      info={meet.info}
>>>>>>> a957e64 (changes)
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
