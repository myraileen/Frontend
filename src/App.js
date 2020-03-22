import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Home from "./components/Home";
import Events from "./components/Events";
import EventDetail from "./components/EventDetail";
import CreateEvent from "./components/CreateEvent";
import CreateItem from "./components/CreateItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //events is array of events found in api get events call
      events: [],
      //create event form variables
      eventSeller: "",
      eventName: "",
      eventDate: "",
      eventLocation: "",
      //create item form variables
      itemName: "",
      itemDescription: "",
      itemCost: "",
      itemSold: ""
    };
  }

  // createEventAxios() {
  //   axios({
  //     method: "POST",
  //     url: backendUrl,
  //     data: {
  //       seller: this.state.eventSeller,
  //       name: this.state.eventName,
  // //    date: this.state.eventDate,
  //       location: this.state.eventLocation
  //     }
  //   }).then(newUser => {
  //     console.log(newUser);
  //     this.setState(prevState => ({
  //       users: [...prevState.users, newUser.data]
  //     }));
  //   });
  // }

  // createItemAxios() {
  //     axios({
  //       method: "POST",
  //       url: backendUrl,
  //       data: {
  //         Name: this.state.itemName,
  //         Description: this.state.itemDescription,
  //         Cost: this.state.itemCost,
  // //      Sold: 'false'
  //       }
  //     }).then(newUser => {
  //       console.log(newUser);
  //       this.setState(prevState => ({
  //         users: [...prevState.users, newUser.data]
  //       }));
  //     });
  //   }

  handleEventClick = event => {
    event.preventDefault();
    console.log("clicked event");
  };

  handleEventSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // this.createEventAxios();
  };

  handleEventChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleItemSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // this.createEventAxios();
  };

  handleItemChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className='App'>
        <Link to='/' className='home'>
          e-sale
        </Link>
        {/* Home component available consistently at top of page */}
        {/* <Route exact path='/' render={props => <Home />} /> */}

        {/* create a row component (Event) for each event in dataset */}
        <Switch>
          <Route
            exact
            path='/'
            render={routerProps => (
              <Events
                events={this.state.events}
                handleDelete={this.deleteAxiosEvent}
              />
            )}
          />
          {/* When an event component on home page is clicked, route user to EventDetail */}
          <Route
            exact
            path='/event/:id'
            render={props => (
              <EventDetail handleEventClick={this.handleEventClick} />
            )}
          />

          {/* Route to create a new event */}
          <Route
            path='/new-event-form'
            render={() => (
              <CreateEvent
                handleEventChange={this.handleEventChange}
                handleEventSubmit={this.handleEventSubmit}
              />
            )}
          />

          {/* Route to create a new event item */}
          <Route
            path='/new-item-form'
            render={() => (
              <CreateItem
                handleItemChange={this.handleItemChange}
                handleItemSubmit={this.handleItemSubmit}
              />
            )}
          />
          <Route path='/*' render={() => <Redirect to='/' />} />
        </Switch>
        {/* <Route exact path='/item' render={props => <Item />} /> */}
      </div>
    );
  }
}

export default App;
