import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "../App.css";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
          <h2>Event Detail</h2>
          <div>Event Name</div>
          <div>Event Date</div>
          <div>Event Location</div>
      </div>
    );
  }
}

export default EventDetail;
