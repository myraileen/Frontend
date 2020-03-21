import React, { Component } from "react";
import "../App.css";

const CreateEvent = props => {
  return (
    <div>
      <h2>New Event</h2>
      <form
        className='event-form'
        onSubmit={props.handleEventSubmit}
        onChange={props.handleEventChange}
      >
        <label className='eventName'>Name:</label>
        <input type='text' name='eventName' />

        <label className='eventDate'>Date:</label>
        <input type='text' name='eventDate' />

        <label className='eventLocation'>Location:</label>
        <input type='text' name='eventLocation' />

        <input type='submit' className='addButton' value='Create Event' />
      </form>
    </div>
  );
};

export default CreateEvent;
