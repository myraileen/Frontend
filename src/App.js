import React from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Home from "./components/Home";
import Event from "./components/Event";
import CreateEvent from "./components/CreateEvent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDate: "",
      eventLocation: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // this.createUserAxios();
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className='App'>
        <Link to='/' className='home'>e-sale</Link>
        {/* Home component available consistently at top of page */}
        <Route exact path='/' render={props => <Home />} />
        {/* Home page should create a list of "Event" components for each Event*/}
        <Route exact path='/event' render={props => <Event />} />
        {/* */}
        <Route
          path='/new-event-form'
          render={() => (
            <CreateEvent
              handleChange={this.handleEventChange}
              handleSubmit={this.handleEventSubmit}
            />
          )}
        />
        {/* <Route exact path='/item' render={props => <Item />} /> */}
      </div>
    );
  }
}

export default App;
