import React, { Component } from "react"

class Counter extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      constructive_count: 0,
      destructive_count: 0
      }
  }

  render() {
   return (
    <div id="counter">
     <h1> We are here! </h1> 
    </div> 
   )
  }
}

export default Counter;

