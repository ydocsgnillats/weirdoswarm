import "./style.scss";
import { useState } from "react";
import Modal from "../Modal";

function Footer(props) {
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <div
      ref={props.footRef}
      className={`footer ${props.stickyFooter ? "sticky-footer" : ""}`}
    >
      <p className="link">
        Setlist info from{" "}
        <a href="https://www.setlist.fm" target="_blank">
          Setlist.fm
        </a>
      </p>
      <p className="link">
        Powered by{" "}
        <a href="https://tetrachrome.org" target="_blank">
          Tetrachrome
        </a>
      </p>
      <p className="footer-text">*Not Affiliated with the band*</p>
      <p className="link">
        <button onClick={() => setOpenContactModal(true)} className="contact">
          Contact Us
        </button>
      </p>
      <Modal
        show={openContactModal}
        option="contact"
        setShow={() => setOpenContactModal(false)}
      />
    </div>
  );
}

export default Footer;
