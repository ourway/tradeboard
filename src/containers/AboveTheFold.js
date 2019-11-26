import React from "react";

import headerImage from "../assets/images/image27884.png";
import Button from "../components/Button";

import Section from "./Section";

const openLoginPage = () => {
  window.open("/join?_src=landing", "_blank");
};

export default props => (
  <Section className="main-area">
    <img
      src={headerImage}
      className="sectionImage right hidden-past-mobile"
      alt=""
    />
    <div className="textBlock main-area-text">
      <h1>The Future of Trading is Here</h1>
      <p>
        Tradeboard is helping hundreds of traders in Iran to profit and enjoy
        benefits of smarter choices. The golden trick of trading is to target
        wiser and aim with a plan. Join the evolution now:
      </p>
      <Button primary text="Join Tradeboard" onClick={openLoginPage} />
    </div>
    <img
      src={headerImage}
      className="sectionImage right hidden-before-mobile"
      alt=""
    />
  </Section>
);
