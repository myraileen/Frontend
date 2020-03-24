import React, { Component } from "react";
import { Link } from "react-router-dom";
import Event from "./Event";

// const Events = props => {
//   console.log(props)
//   // let allEvents = this.props.data && this.props.events.map(eventRow => {
//   //   return (
//   //     <Event
//   //       key={eventRow._id}
//   //       // seller={event.seller}
//   //       // date={event.date}
//   //       // description={event.eDescription}
//   //       // location={event.location}
//   //       // // items={event.items}
//   //       // handleDelete={props.handleDelete}
//   //     />
//   //   );
//   // });

//   return (
//     <>
//     </>
//   );
// };

// export default Events;

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { events: props.data }
  }

  componentDidMount() {
  
  }


  render() { 
    console.log(this.props)
    return ( <>
    
      <Link to='/new-event' className="create-new">Add Event</Link>
      {/* // <div className="events-container">{allEvents}</div> */}
    </>  );
  }
}
 
export default Events;
