import React from "react";
import { Link } from "react-router-dom";
import Items from "./Items";

// {/* need to move items to event details still */}
const Event = props => {

  let date =  new Date(props.event.date)
  var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
    ];
    let d = date.getDate();
    let m = monthNames[date.getMonth()];

  date = `${date.getFullYear()}-${m}-${date.getDate()} `

  return (
    <div>

      <input
        onSubmit={props.handleSubmit}
        type='submit'
        className='delete-button'
        value='-'
      />

      <Link to={`/event/${props.event._id}`} className='event-row'>
        {/* {date}:  */}
        {props.event.eDescription} 
        {/* {props.event.location} */}
      </Link>
      {/* <button id={props.event._id} onClick={props.handleDelete}>
      Delete
    </button> */}
      {/* <Items items={props.items} /> */}
    </div>
  );
};

export default Event;
