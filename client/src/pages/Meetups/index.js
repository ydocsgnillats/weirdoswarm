import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Meetup from "../../components/Meetup";
import db from "../../utils/firebase";
import { useState, useEffect } from "react";

function Meetups() {
  const [filter, setFilter] = useState("");
  const [meetups, setMeetups] = useState([]);

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
    <>
      <Nav setSearchQuery={(target) => setFilter(target)} />
      <Content source="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Flosbuffo.com%2Fwp-content%2Fuploads%2F2018%2F01%2F2-King-Gizzard-and-The-Lizard-Wizard-CMW-Indie-Underground-Aaron-McMillan1.jpg%3Ffit%3D1038%252C563&f=1&nofb=1&ipt=840c7be1fda820af5bf4231d93b0fc847096b878cba3c113402472e3b40d7a8a&ipo=images">
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
                        data={meet.data.date}
                        time={meet.data.time}
                        link={meet.data.link}
                        source={require("../../assets/atlmeetup.jpeg")}
                        location={meet.data.location}
                        info={meet.data.info}
                      />
                    ))
                : meetups.map((meet, i) => (
                    <Meetup
                      key={i}
                      city={meet.data.city}
                      data={meet.data.date}
                      time={meet.data.time}
                      link={meet.data.link}
                      source={require("../../assets/atlmeetup.jpeg")}
                      location={meet.data.location}
                      info={meet.data.info}
                    />
                  ))}
            </div>
          )}
        </div>
      </Content>
    </>
  );
}

export default Meetups;
