import React from "react";
import { Link } from "react-router-dom";
import Items from "./Items";


// {/* need to move items to event details still */}
const Event = props => {
  
    console.log(props)
  return (
    <div>
        <Link to={`/event/${props.key}`} className="event-row">
        {props.date}: {props.description} {props.location}
        </Link>
      {/* <button id={props.key} onClick={props.handleDelete}>
      Delete
    </button> */}
      {/* <Items items={props.items} /> */}
    </div>
  );
};

export default Event;
