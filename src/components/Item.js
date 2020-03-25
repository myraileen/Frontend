import React from "react";
import { Link } from "react-router-dom";

const Item = props => {
  console.log(props);

  return (
    <div className='item'>
      <Link to={`/event/${props.key}`}>
        {props.item.item}: {props.description} {props.cost}
      </Link>
      {/* <button id={props.key} onClick={}>
      Delete
    </button> */}
      <div className='controls'>
        <button
          id={`${props.eventDoc}/${props.item._id}`}
          className='sold-button'
          // id={props.event._id}
          onClick={props.itemSold}
        >
          $
        </button>

        <button
          id={`${props.eventDoc}/${props.item._id}`}
          className='delete-button'
          onClick={props.handleItemDelete}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default Item;
