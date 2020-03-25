import React from "react";
import { Link } from "react-router-dom";
import Event from "./Event";

const Events = props => {
  let allEvents =  props.events.map(event => {
    return (
      <Event
        key={event._id}
        event={event}
        handleDelete={props.handleDelete}
      />
    )
  })

  return (
    <>
      <Link to='/new-event' className='create-new'>
        Add Event
      </Link>
      <div className="events-container">{allEvents}</div>
      
    </>
  );
};

export default Events;
