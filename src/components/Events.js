import React from "react";
import { Link } from "react-router-dom";
import Event from "./Event";

const Events = props => {
  let allEvents = props.events.map(event => {
    return (
      <Event 
    //   key={event._id} 
      event={event} 
      handleDelete={props.handleDelete} />
    );
  });

  return (
    <div>
      <Link to='/new-event-form'>Create New Event</Link>
      <div>{allEvents}</div>
    </div>
  );
};

export default Events;
