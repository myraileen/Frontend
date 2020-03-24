import React from "react";
import "../App.css";

const CreateItem = props => {
  return (
    <div>
      <h2>New Item</h2>
      <form
        className='event-form'
        onChange={props.handleChange}
        onSubmit={props.handleSubmit}
      >
        <label className='itemName'>Item:</label>
        <input type='text' name='eventName' />

        <label className='itemDescription'>Description:</label>
        <input type='text' name='itemDescription' />

        <label className='itemCost'>Cost:</label>
        <input type='text' name='itemCost' />

        <label className='itemSold'>Sold:</label>
        <input type='text' name='itemSold' />
        <div></div>
        <input
          type='submit'
          className='create-new-form-button'
          value='Create Item'
        />
      </form>
    </div>
  );
};

export default CreateItem;
