import React, { Component } from "react";
import { Link } from "react-router-dom";
import Event from "./Event";

const Events = props => {
  console.log(props.events);


  let allEvents =  props.events.map(eventRow => {
        // console.log(eventRow)})
    return (
      <Event
        key={eventRow._id}
        seller={eventRow.seller}
        date={eventRow.date}
        description={eventRow.eDescription}
        location={eventRow.location}
        // items={event.items}
        handleDelete={props.handleDelete}
      />
    );
  })

  return (
    <>
      <Link to='/new-event' className='create-new'>
        Add Event
      </Link>
      <div className="events-container">{allEvents}</div>
      
    </>
  );
};

export default Events;

// class Events extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { events: props.data }
//   }

//   componentDidMount() {

//   }

//   render() {
//     console.log(this.props)
//     return ( <>

//      </>  );
//   }
// }

// export default Events;
