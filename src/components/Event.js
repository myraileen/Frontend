import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: '',
    };
  }

  componentDidMount() {
  }

  render() {
    return (
       <div>
          <p>event 1</p>
          <p>event 2</p>
          <p>event 3</p>
        </div>
    );
  }
}

export default Event;


// import React from "react";
// import { Link } from "react-router-dom";

// const Event = props => (
//   <div>
//     <p>
//       <Link to={`/event/${props.event._id}`}>{props.event.name}</Link>
//     </p>
//     <button id={props.event._id} onClick={props.handleDelete}>
//       Delete {props.event.name}
//     </button>
//   </div>
// );

// export default Event;