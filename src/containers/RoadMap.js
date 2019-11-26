import React from "react";

// import roadmap from "../assets/images/roadmap.svg";
//import roadmapMobile from "../assets/images/roadmap_mobile.svg";
import SectionHeader from "../components/SectionHeader";
import Timeline from "../components/Timeline";

import Section from "./Section";

export default props => (
  <Section
    id="roadmap"
    style={{
      paddingLeft: "100px",
      paddingRight: "100px",
      paddingTop: "40px",
      paddingBottom: "60px"
    }}
  >
    <SectionHeader>Project Roadmap</SectionHeader>
    <Timeline />
  </Section>
);
