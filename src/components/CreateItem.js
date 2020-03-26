import React from "react";
import "../App.css";

const CreateItem = props => {
      console.log(props)
  return (
    <div>
      <h2>New Item</h2>
      <form
        className='event-form'
        onChange={props.handleChange}
        onSubmit={props.handleItemSubmit}
      >
        <label className='itemName'>Item:</label>
        <input type='text' name='itemName' placeholder="Item" required/>

        <label className='itemDescription'>Description:</label>
        <input type='text' name='itemDescription' placeholder="Description" required/>

        <label className='itemCost'>Cost:</label>
        <input type='number' name='itemCost' placeholder="Cost" required/>

        <label className='itemUrl'>Image URL:</label>
        <input type='text' name='itemUrl' placeholder="Item URL" />
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
