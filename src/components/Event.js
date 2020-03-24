import React from "react";
import { Link } from "react-router-dom";
import Items from "./Items";


// {/* need to move items to event details still */}
const Event = props => {
  
    console.log(props)
  return (
    <div>
        <Link to={`/event/${props.event._id}`} className="event-row">
        {props.event.date}: {props.event.description} {props.event.location}
        </Link>
      <button id={props.event._id} onClick={props.handleDelete}>
      Delete
    </button>
      {/* <Items items={props.items} /> */}
    </div>
  );
};

export default Event;
