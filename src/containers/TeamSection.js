import React from "react";
import Section from "./Section";
import Team from "../components/Team";
import SectionHeader from "../components/SectionHeader";

export default props => (
  <Section
    style={{ paddingTop: "40px" }}
    className="TeamSection Section dark"
    id="board"
  >
    <SectionHeader white>Board Members</SectionHeader>
    <Team />
  </Section>
);
