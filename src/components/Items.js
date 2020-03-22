import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

const Items = props => {
    let allItems = props.items.map(item => {
      return (
        <item 
      //   key={item._id} 
        key={item.index}
        seller={item.item} 
        description={item.description} 
        date={item.cost} 
        location={item.sold} 
        items={item.items} 
        handleDelete={props.handleDelete} />
      );
    });

  return (
    <div>
      <div>{allItems}</div>
    </div>
  );
};

export default Items;
