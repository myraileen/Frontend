import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Item from "./Item";
import axios from 'axios';

let backendUrl = 'http://localhost:8080/event/'

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      eventItems: [],
      backendUrl: backendUrl
     }
  }
  
  // componentDidMount() {
  //   this.getItemsAxios();
  // }

  // getItemsAxios() {
  //   backendUrl = `${backendUrl}${this.props._id}`
  //   console.log(backendUrl)
  //   axios({ method: "GET", url: backendUrl }).then(itemData =>
  //     this.setState({ eventItems: itemData.data })
  //   );
  // }

  // need axios call to get item details here
  allItems = props => {
    let allItems =  this.state.items.map(item => {
      return (
        <Item
          key={item._id}
          item={item}
          handleDelete={props.handleItemDelete}
        />
      )
    })}

  render() { 
    // console.log(this.props)
    return (  
    <div>
      {/* <div>{allItems}</div> */}
    </div> );
  }
}
 
export default Items;