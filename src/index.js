import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <img src="./assets/images/avatar-jessica.jpeg" alt="avatar" />
      <h1>Jessica Randall</h1>
      <h2>London, United Kingdom</h2>
      <p>"Front-end developer and avid reader."</p>
    </>
  );
};

const SocialLinks = () => {
  return (
    <>
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
    </>
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Profile />);
