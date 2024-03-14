import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const Header = () => {
  return (
    <>
      <img src="./assets/images/avatar-jessica.jpeg" alt="avatar" />
      <p className="name">Jessica Randall</p>
      <p className="location">London, United Kingdom</p>
      <p className="bio">"Front-end developer and avid reader."</p>
    </>
  );
};

const SocialLinks = () => {
  return (
    <nav>
      <a href="https://github.com/" target="_blank">
        <button>GitHub</button>
      </a>
      <a href="https://www.frontendmentor.io/" target="_blank">
        <button>Frontend Mentor</button>
      </a>
      <a href="https://ke.linkedin.com/" target="_blank">
        <button>LinkedIn</button>
      </a>
      <a href="https://twitter.com/?lang=en" target="_blank">
        <button>Twitter</button>
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <button>Instagram</button>
      </a>
    </nav>
  );
};

const Profile = () => {
  return (
    <>
      <Header />

      <SocialLinks />
    </>
  );
};

const Footer = () => {
  return (
    <>
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/nadupoy" target="_blank">
          Nadupoy
        </a>
        .
      </p>

      <p>
        <a href="https://icons8.com/icon/1406/hand-cursor" target="_blank">Hand Cursor</a> icon by <a href="https://icons8.com/" target="_blank">
          Icons8</a>.
      </p>
    </>
  );
};

const main = ReactDOM.createRoot(document.getElementById("main"));
main.render(<Profile />);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(<Footer />);
