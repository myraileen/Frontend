import React from "react";
import { Route, Link, Switch, Redirect, withRouter } from "react-router-dom";
import axios from "axios";

import "./App.css";
// import Home from "./components/Home";
import Events from "./components/Events";
import EventDetail from "./components/EventDetail";
import CreateEvent from "./components/CreateEvent";
import CreateItem from "./components/CreateItem";

const backendUrl = "http://localhost:8080/event";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //events is array of events found in api get events call
      // events: [],
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

  componentDidMount() {
    this.getEventsAxios();
  }

  getEventsAxios() {
    axios({ method: "GET", url: backendUrl })
    .then(eventData =>
      this.setState({ events: eventData })
    );
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

  // handleEventClick = event => {
  //   event.preventDefault();
  //   console.log("clicked event");
  // };

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
    console.log(`app.js ${this.state.events}`)
    return (
      <div className='App'>
        <Link to='/' className='home'>
          <p className="title">e-sale</p> <span role="img" className="logo" aria-label="logo">🛒</span>
        </Link>
        {/* Home component available consistently at top of page */}
        {/* <Route exact path='/' render={props => <Home />} /> */}

        {/* create an Event (row component) for each event in dataset */}
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

          {/* Route to view EventDetail component */}
          <Route
            path='/event/:id'
            render={routerProps => (
              <EventDetail {...routerProps} events={this.state.events}
                newItem={this.state.newItem}
                handleChange={this.handleItemChange}
                handleNewTodoSubmit={this.handleItemSubmit}
                itemSold={this.itemSold}
              />
            )}
          />

          {/* Route to create a new event (from Home) */}
          <Route
            path='/new-event-form'
            render={() => (
              <CreateEvent
                handleEventChange={this.handleEventChange}
                handleEventSubmit={this.handleEventSubmit}
              />
            )}
          />

          {/* Route to create a new event item (on EventDetails component)*/}
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
      </div>
    );
  }
}

export default App;
