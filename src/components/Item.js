import React from "react";
import { Link } from "react-router-dom";

const Item = props => {
  // console.log(props);
  // console.log(props.item.sold);

  // let currentSoldValue = !props.item.sold ? "true" : "false"
  // // console.log(currentSoldValue)

  return (
    <div className={`item-${props.item.sold}`}>
      {/* <div className={`item-${props.item.sold}`}></div> */}
      {/* className={currentSoldValue} */}

      <Link to={`/update-item/${props.id}`} className='item-name' item={props}>
        {props.item.item}
      </Link>
      <img alt={props.item.item} src={props.item.image} />

      <div className='cost'>
        <span>${props.item.cost}</span>

        <button
          id={`${props.item._id}`}
          className={`sold-button`}
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
