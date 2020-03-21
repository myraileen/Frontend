import React, { Component } from "react";
import { Link } from "react-router-dom";
import Event from "./Event";
import "../App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Event />
      </>
    );
  }
}

export default Home;
