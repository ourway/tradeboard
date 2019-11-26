import React from "react";

const events = [
  {
    title: "Founded",
    date: "Feb 2019",
    description: "We first discussed the idea ",
    completed: true
  },
  {
    title: "TestNet Launch",
    date: "July 2019",
    description: "We started trading with based funtionalities",
    completed: true
  },
  {
    title: "Fist Private Beta",
    date: "August 2019",
    description: "We're rolling the first private release",
    completed: false
  },

  {
    title: "Fist Public Beta",
    date: "September 2019",
    description: "We're rolling the first public release",
    completed: false
  },

  {
    title: "Public RC1",
    date: "October 2019",
    description: "This is the start",
    completed: false
  }
];

const topEvents = events.filter((event, i) => i % 2 !== 0);
const bottomEvents = events.filter((event, i) => i % 2 === 0);
const completedEvents = events.filter(event => event.completed).length;

export default props => (
  <div className="Timeline">
    {topEvents.map((event, i) => (
      <div
        key={i}
        style={{
          left: `${(100 / events.length) * (i * 2 + 1)}%`,
          display: "inline-block",
          position: "absolute",
          top: "-120px"
        }}
      >
        <div className="Timeline-box">
          <h4> {event.title} </h4>
          <h5> {event.date} </h5>
          <p> {event.description} </p>
        </div>
        <div className="triangle-down" />
      </div>
    ))}
    <progress
      value={
        (completedEvents === events.length
          ? completedEvents
          : (completedEvents - 1) / events.length) * 100
      }
      max="100"
      className="line"
    />
    {bottomEvents.map((event, i) => (
      <div
        key={i}
        style={{
          left: `${(100 / events.length) * (i * 2)}%`,
          display: "inline-block",
          position: "absolute"
        }}
      >
        <div className="triangle-up" />
        <div className="Timeline-box">
          <h4> {event.title} </h4>
          <h5> {event.date} </h5>
          <p> {event.description} </p>
        </div>
      </div>
    ))}
  </div>
);
