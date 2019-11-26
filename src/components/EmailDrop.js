import React, { Component } from "react";
import Button from "./Button";

export default class EmailDrop extends Component {
  render() {
    return (
      <div className="EmailDrop">
        <h2>Tradeboard Pre-release news</h2>
        <p>
          We're excited that you're excited! Unfortunately, we aren't ready to
          accept traders right now. Please join the mailing list to get updates.
        </p>
        <form
          action="/newsletters/subscribe/news"
          method="post"
          style={{ display: "flex" }}
          target="_blank"
          noValidate
        >
          <input
            type="text"
            name="EMAIL"
            placeholder="you@example.com"
            onChange={this.updateEmail}
          />
          <Button primary text="Sign Me Up" submit />
        </form>
        <p>We won't spam you (ever)</p>
      </div>
    );
  }
}
