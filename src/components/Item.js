import React from "react";
import { Link } from "react-router-dom";

const Item = props => {
  console.log(props);
  console.log(props.item);

  return (
    <div className='item'>
      <Link to={`/update-item/${props.id}`} item={props.item.item}>
        {props.item.item}
      </Link>
      <div>
          <img alt={props.item.item} src={props.item.image} />
        <p>{props.item.iDescription} </p>
        <p>${props.item.cost}</p>
      </div>
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
