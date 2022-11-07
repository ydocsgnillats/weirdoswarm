import "./style.scss";
import { useState } from "react";

function Modal(props) {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [time, setTime] = useState("");
  const [info, setInfo] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const setShow = () => {
    props.setShow();
  };

  const onSubmit = () => {
    //email all info acquired
    props.setShow();
    setEventName("");
    setDate("");
    setEventLocation("");
    setTime("");
    setInfo("");
    setImageLink("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  if (!props.show) return;
  return (
    <div className="modal">
      <button className="close" onClick={() => setShow()}>
        X
      </button>
      {props.option === "meetup" ? (
        <>
          <h3>Host A Meetup</h3>
          <div className="meetup-modal">
            <label>Event Name: </label>
            <input
              className="input"
              value={eventName}
              onChange={(e) => setEventName(e.currentTarget.value)}
            />
            <label>Date: </label>
            <input
              className="input"
              value={date}
              onChange={(e) => setDate(e.currentTarget.value)}
            />
            <label>Time: </label>
            <input
              className="input"
              value={time}
              onChange={(e) => setTime(e.currentTarget.value)}
            />
            <label>Location: </label>
            <input
              className="input"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.currentTarget.value)}
            />
            <label>Info: </label>
            <input
              className="input"
              value={info}
              onChange={(e) => setInfo(e.currentTarget.value)}
            />
            <label>Image Link: </label>
            <input
              className="input"
              value={imageLink}
              onChange={(e) => setImageLink(e.currentTarget.value)}
            />
          </div>
        </>
      ) : (
        <>
          <h3>Contact Us</h3>
          <div className="contact-modal">
            <label>Email: </label>
            <input
              className="input"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <label>Subject: </label>
            <input
              className="input"
              value={subject}
              onChange={(e) => setSubject(e.currentTarget.value)}
            />
            <label>Message: </label>
            <input
              className="input"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
          </div>
        </>
      )}
      <button className="submit" onClick={() => onSubmit()}>
        Submit
      </button>
    </div>
  );
}

export default Modal;
