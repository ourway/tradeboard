import React from "react";
import Button from "./Button";
import logo from "../assets/images/logo.svg";

const openLoginPage = () => {
  window.open("/join?_src=landing", "_blank");
};

export default props => (
  <div className="Navbar">
    <img src={logo} alt="Tradeboard Logo" className="logo" />
    <div className="links hidden-before-mobile">
      <a href="#features">Features</a>
      <a href="#roadmap">Roadmap</a>
      <a href="#board">Board</a>
      <Button primary text="Join Tradeboard" onClick={openLoginPage} />
    </div>
  </div>
);
