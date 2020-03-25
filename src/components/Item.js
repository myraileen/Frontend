import React from "react";
import { Link } from "react-router-dom";

const Item = props => {
  console.log(props.item.item)

  return (
    <div>
      <p>
        <Link to={`/event/${props.key}`}>
          {props.item.item}: {props.description} {props.cost}
        </Link>
      </p>
      {/* <button id={props.key} onClick={props.handleDelete}>
      Delete
    </button> */}
    </div>
  );
};
export default Item;
