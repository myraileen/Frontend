import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Items from "./Items"

const EventDetail = props => {
  console.log(props);

  let eventDetail = props.events.find(
    event => event._id === props.match.params.id
  );

  console.log(eventDetail)

  // sending event to get items
  let allItems = props.events.map(event => {
    return (
      <Items key={event._id} event={event} handleDelete={props.handleItemDelete} />
    );
  });

  return eventDetail ? (
    <>
      <div className='event-detail-header'>
        <h2>{eventDetail.eDescription}</h2>
        <div>{eventDetail.seller}</div>
        <div>{eventDetail.date}</div>
        <div>{eventDetail.location}</div>
      </div>
      <Link to={`/new-item/${eventDetail._id}`} className='create-new'>
        Add Item
      </Link>
      <div className='event-detail-items'>
       {allItems}
      </div>
    </>
  ) : (
    <p>loading...</p>
  );
};

export default EventDetail;
