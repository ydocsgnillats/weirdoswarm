import "./style.scss";
import Nav from "../../components/Nav";
import Content from "../../components/Content";
import Meetup from "../../components/Meetup";
import Loading from "../../components/Loading";
import { useState, useEffect } from "react";

function Meetups() {
  const [filter, setFilter] = useState("");
  const [meetups, setMeetups] = useState([]);
  const [images, setImages] = useState([
    require("../../assets/atlmeetup.jpeg"),
    require("../../assets/ashevillemeetup.jpeg"),
    require("../../assets/denvermeetup.jpeg"),
  ]);

  useEffect(() => {
    fetch("/api/meetups")
      .then((d) => d.text())
      .then((d) => setMeetups(JSON.parse(d)));
  }, []);

  return (
    <div className="meetups">
      <Nav setSearchQuery={(target) => setFilter(target)} />
      <Content>
        <div>
          {meetups.length === 0 ? (
            <Loading text />
          ) : (
            <div>
              {filter
                ? meetups
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
                      />
                    ))
                : meetups.map((meet, i) => (
                    <Meetup
                      key={i}
                      city={meet.city}
                      date={meet.date}
                      time={meet.time}
                      link={meet.link}
                      source={images[meet.source]}
                      location={meet.location}
                      info={meet.info}
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
