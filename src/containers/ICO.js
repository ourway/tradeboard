import React, { Component } from "react";
import Section from "./Section";
import EmailDrop from "../components/EmailDrop";
import spinner from "../assets/images/coming-soon-dribbble.gif";

export default class ICO extends Component {
  render() {
    return (
      <Section style={{ paddingTop: "20px" }} id="presale">
        <EmailDrop />
        <img src={spinner} width="300" />
      </Section>
    );
  }
}
