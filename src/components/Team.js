import React, { Component } from "react";

export default class Team extends Component {
  state = {
    contributors: [
      {
        id: "farsheed",
        avatar_url: "https://ourway.keybase.pub/farsheed_pic.jpg",
        login: "Farsheed Ashouri",
        desc: "Co-Founder and Cheif Technical Director"
      },
      {
        id: "elyad",
        avatar_url: "https://ourway.keybase.pub/elyad_pic.jpg",
        login: "Elyad Hakimi",
        desc: "Co-Founder and Senior Financial Advisor"
      },
      {
        id: "elyad",
        avatar_url: "https://ourway.keybase.pub/person.png",
        login: "Amirreza Beglu",
        desc: "Co-Founder and Cheif Investment Advisor"
      }
    ]
  };

  render() {
    return (
      <div className="Team">
        {this.state.contributors.map(contributor => (
          <div key={contributor.id} className="member">
            <img src={contributor.avatar_url} alt={contributor.login} />
            <h3>{contributor.login}</h3>
            <p>{contributor.desc}</p>
          </div>
        ))}
      </div>
    );
  }
}
