import React from "react";
import { Link } from "react-router-dom";
import Event from "./Event";

const Events = props => {
  let allEvents = props.events.map(event => {
    return (
      <Event 
    //   key={event._id} 
      key={event.index}
      seller={event.seller} 
      date={event.date} 
      description={event.description} 
      location={event.location} 
      items={event.items} 
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
