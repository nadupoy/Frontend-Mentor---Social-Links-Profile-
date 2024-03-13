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
      <a>
        <button>GitHub</button>
      </a>
      <a>
        <button>Frontend Mentor</button>
      </a>
      <a>
        <button>LinkedIn</button>
      </a>
      <a>
        <button>Twitter</button>
      </a>
      <a>
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
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/nadupoy" target="_blank">Nadupoy</a>.
      </p>
    </>
  );
};

const main = ReactDOM.createRoot(document.getElementById("main"));
main.render(<Profile />);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(<Footer/>);
