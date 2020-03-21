import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
       <div>
          <Link to='/new-event-form'>Create New Event</Link>
          <p>event 1</p>
          <p>event 2</p>
          <p>event 3</p>
        </div>
    );
  }
}

export default Event;
