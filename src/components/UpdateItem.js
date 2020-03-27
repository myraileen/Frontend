import React from "react";
import "../App.css";

const UpdateItem = props => {
  console.log(props);

  let itemDetail = props
  console.log(itemDetail)

  return itemDetail ? (
    <div>
      <h2>Update Item</h2>
      <form
        className='event-form'
        onChange={props.handleChange}
        onSubmit={props.handleItemUpdate}
      >
        <label className='itemName'>Item:</label>
        <input type='text' name='itemUpdateName' value={itemDetail.name} placeholder='Item' required />

        <label className='itemDescription'>Description:</label>
        <input
          type='text'
          name='itemUpdateDescription'
          placeholder='Description'
          required
        />

        <label className='itemCost'>Cost:</label>
        <input type='text' name='itemUpdateCost' placeholder='Cost' required />

        <label className='itemUrl'>Image URL:</label>
        <input type='text' name='itemUpdateUrl' placeholder='Item URL' />
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
