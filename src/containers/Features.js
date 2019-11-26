import React from "react";

import anonymous from "../assets/images/anonymous.svg";
import purpleCurve from "../assets/images/curve.png";
import lightning from "../assets/images/electricity.svg";
import script from "../assets/images/script.svg";
import SectionHeader from "../components/SectionHeader";

import Section from "./Section";

export default props => (
  <React.Fragment>
    <img
      alt="purpleCurve"
      src={purpleCurve}
      style={{ width: "100%", display: "block", marginBottom: "-1px" }}
    />
    <Section dark="true" id="features">
      <SectionHeader white>Features</SectionHeader>
      <div className="textBlock light centered">
        <img src={lightning} alt="Lightning" />
        <h3>Fast & Reliable</h3>
        <p>
          Built with the extremely fault tolerant technology behind the telecom
          industry, Tradeboard extends exchange fault tolerance while
          parallelizing data transfer and calculations for increased
          performance.
        </p>
      </div>
      <div className="textBlock light centered">
        <img src={anonymous} alt="Anonymous" />
        <h3>Zero knowledge start</h3>
        <p>
          You don't need to know anything about how market works, You just need
          to have some money to start. The rest is our daily passion.
        </p>
      </div>
      <div className="textBlock light centered">
        <img src={script} alt="Scriptable" />
        <h3>Scriptable</h3>
        <p>
          Tradeboard takes a unique stance on trading -- Tradeboard scripting is
          language agnostic, using simple REStful APIs, you can connect it to
          your own smart signal.
        </p>
      </div>
    </Section>
  </React.Fragment>
);
