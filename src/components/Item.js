import React from "react";
import { Route, Link } from "react-router-dom";

const Item = props => (
  <div>
    <p>
    <Link to={`/event/${props.key}`}>{props.item}: {props.description} {props.cost}</Link>
    </p>
    {/* <button id={props.key} onClick={props.handleDelete}>
      Delete
    </button> */}
  </div>
);

export default Item;