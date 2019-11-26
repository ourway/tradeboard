import React from "react";
import curve from "../assets/images/footer_curve.png";

export default props => (
  <div className="Footer">
    <img src={curve} className="purple-curve" alt="" />
    <div className="Footer-body">
      <div className="Footer-text hidden-before-mobile">
        <h3>Our Mission</h3>
        <p>
          We're here to provide a trustless, reliable trading platform in a way
          that isn't a pain to traders.
        </p>
      </div>
      <div className="Footer-links">
        <div className="Footer-section">
          <h3>Resources</h3>
        </div>
        <div className="Footer-section">
          <h3>Foundation</h3>
          <a href="/">About</a>
          <a href="#board">Management Board</a>
          <a href="mailto:rodmena@me.com">Contact</a>
        </div>
        <div className="Footer-section">
          <h3>Get Involved</h3>
        </div>
      </div>
    </div>
  </div>
);
