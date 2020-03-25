import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Item from "./Item";

const EventDetail = props => {
  let eventDetail = props.events.find(
    event => event._id === props.match.params.id
  );

  console.log(eventDetail);

  // sending event to get items... first time this component loads... it will be empty???


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
     { eventDetail && eventDetail.items.map(item => (
      <Item
        key={item._id}
        item={item}
        handleDelete={props.handleItemDelete}
      />
     ))}
      </div>
    </>
  ) : (
    <p>loading...</p>
  );
};
export default EventDetail;
