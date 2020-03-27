import React from "react";
import { Link } from "react-router-dom";

const Item = props => {
  console.log(props);

  let currentSoldValue = !props.item.sold ? "true" : "false"
  let updateItem = props.item
  console.log(updateItem)

  return (
    <div className={`item-${props.item.sold}`}>

      <Link 
        to={`/update-item/${props.id}`} 
        updateItem={props}
        className='item-name' 
        item={props}>
        {props.item.item}
      </Link>
      <img alt={props.item.item} src={props.item.image} />

      <div className='cost'>
        <span>${props.item.cost}</span>

        <button
          id={`${props.item._id}`}
          className={`sold-button`}
          soldValue={currentSoldValue}
          onClick={props.itemSold}
        >
          $
        </button>

      </div>

      <div className='description'>{props.item.iDescription}</div>
      <button
        id={`${props.eventDoc}/${props.item._id}`}
        className='delete-button'
        onClick={props.handleItemDelete}
      >
        -
      </button>
    </div>
  );
};
export default Item;
