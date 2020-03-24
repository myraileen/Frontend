import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const EventDetail = props => {

  let eventDetail =  props.events.find(event => event._id ===
    props.match.params.id) 

    return  eventDetail ?  (
    <>
    <div className="event-detail-header">
      <h2>Event Detail</h2>
      <div>{eventDetail.eDescription}</div>
      <div>{eventDetail.date}</div>
      <div>{eventDetail.location}</div>
    </div>
    <Link to='/new-item' className='create-new'>
        Add Item
      </Link>
    <div className="event-detail-items">
      <p>{eventDetail.items}</p>
      <p>item 2</p>
      <p>item 3</p>
    </div>
    </>
  ) : <p>loading...</p>
};

export default EventDetail;
