// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import "../App.css";

// class Event extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedEvent: '',
//     };
//   }

//   componentDidMount() {
//   }

//   render() {
//     return (
//        <div>
//           <p>event 1</p>
//           <p>event 2</p>
//           <p>event 3</p>
//         </div>
//     );
//   }
// }

// export default Event;

import React from "react";
import { Route, Link } from "react-router-dom";
import Items from "./Items"

const Event = props => (
  <div>
    <p>
    <Link to={`/event/${props.key}`}>{props.date}: {props.description} {props.location}</Link>
    </p>
    {/* <button id={props.key} onClick={props.handleDelete}>
      Delete
    </button> */}
    <Items items={props.items}/>
  </div>
);

export default Event;