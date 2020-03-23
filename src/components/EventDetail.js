import React from "react";
import "../App.css";

const EventDetail = props => {
  return (
    <>
    <div className="event-detail-header">
      <h2>Event Detail</h2>
      <div>Event Name</div>
      <div>Event Date</div>
      <div>Event Location</div>
    </div>
    <div className="event-detail-items">
      <p>item 1</p>
      <p>item 2</p>
      <p>item 3</p>
    </div>
    </>
  );
};

export default EventDetail;
