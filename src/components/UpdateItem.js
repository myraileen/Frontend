import React from "react";
import "../App.css";

const UpdateItem = props => {
  // loop function to find the item matching the ID in params...
  let allEvents = props.allEvents;

  const clickedEvent = allEvents.find(function(event) {
    return event._id === props.match.params.eventId;
  });

  const clickedItem = clickedEvent.items.find(function(item) {
    return item._id === props.match.params.itemId;
  });

  return clickedItem ? (
    <div>
      <h2>Update Item</h2>
      <form
        className='event-form'
        updatedItem={props}
        onChange={props.handleChange}
        onSubmit={props.handleItemUpdate}
      >
        <label className='itemName'>Item:</label>
        <input
          type='text'
          name='itemUpdateName'
          placeholder='Item'
          value={clickedItem.item}
          required
        />

        <label className='itemDescription'>Description:</label>
        <input
          type='text'
          name='itemUpdateDescription'
          placeholder='Description'
          value={clickedItem.iDescription}
          required
        />

        <label className='itemCost'>Cost:</label>
        <input
          type='text'
          name='itemUpdateCost'
          placeholder='Cost'
          value={clickedItem.cost}
          required
        />

        <label className='itemUrl'>Image URL:</label>
        <input type='text' 
        name='itemUpdateUrl' 
        placeholder='Item URL'
        value={clickedItem.image} />
        <div></div>
        <input
          type='submit'
          className='create-new-form-button'
          value='Update Item'
        />
      </form>
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default UpdateItem;
