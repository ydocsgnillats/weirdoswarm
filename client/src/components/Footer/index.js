import "./style.scss";

function Footer(props) {
  return (
    <div ref={props.footRef} className="footer">
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
    </div>
  );
}

export default Footer;
