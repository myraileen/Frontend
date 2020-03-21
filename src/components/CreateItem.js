import React from "react";
import "../App.css";

const CreateItem = props => {
  return (
    <div>
      <h2>New Item</h2>
      <form
        className='event-form'
        onSubmit={props.handleItemSubmit}
        onChange={props.handleItemChange}
      >
        <label className='itemName'>Item:</label>
        <input type='text' name='eventName' />

        <label className='itemDescription'>Description:</label>
        <input type='text' name='itemDescription' />

        <label className='itemCost'>Cost:</label>
        <input type='text' name='itemCost' />

        <label className='itemSold'>Sold:</label>
        <input type='text' name='itemSold' />

        <input type='submit' className='addButton' value='Create Item' />
      </form>
    </div>
  );
};

export default CreateItem;
