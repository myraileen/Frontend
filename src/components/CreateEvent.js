import React from "react";
import "../App.css";

const CreateEvent = props => {
  return (
    <div>
      <h2>New Store</h2>

      <form
        className='event-form'
        onChange={props.handleChange}
        onSubmit={props.handleSubmit}
      >
        <label className='eventSeller'>Store Owner:</label>
        <input type='text' name='eventSeller' placeholder="Store Owner" required/>

        <label className='eventName'>Store Name:</label>
        <input type='text' name='eventName' placeholder="Event Name" required/>

        {/* <label className='eventDate'>Date:</label>
        <input type='text' name='eventDate' /> */}

        <label className='eventLocation'>Location:</label>
        <input type='text' name='eventLocation' placeholder="Location" required/>
        <div></div>
        <input
          type='submit'
          className='create-new-form-button'
          value='Create Store'
        />
      </form>
    </div>
  );
};

export default CreateEvent;
