import React from "react";
import "../App.css";

const CreateEvent = props => {
  return (
    <div>
      <h2>New Event</h2>
      <form
        className='event-form'
        onChange={props.handleChange}
        onSubmit={props.handleSubmit}
      >
        <label className='eventSeller'>Seller:</label>
        <input type='text' name='eventName' />

        <label className='eventName'>Event Name:</label>
        <input type='text' name='eventName' />

        <label className='eventDate'>Date:</label>
        <input type='text' name='eventDate' />

        <label className='eventLocation'>Location:</label>
        <input type='text' name='eventLocation' />
        <div></div>
        <input
          type='submit'
          className='create-new-form-button'
          value='Create Event'
        />
      </form>
    </div>
  );
};

export default CreateEvent;
