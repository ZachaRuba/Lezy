import React, { Component } from "react"



import Firebase from 'firebase';
import config from './../../controllers/firebase-admin/config.js';


class Counter extends Component {
  constructor(props){
    super(props);
    
    Firebase.initializeApp(config);

    this.state = {
      constructive_count: 0,
      destructive_count: 0
      };

    console.log("Counter Created");
  }
  
  //Reads data after a render...
  componentDidMount(){
    this.readData();
  }
  
  //Writes data after state change (and before render!)...
  componentDidUpdate(prop, state) {
    if(state !== this.state){
      this.writeData(); 
    }
  };

  construct = () => {
    console.log("Construct Clicked!");
    this.setState({
      constructive_count: this.state.constructive_count + 1 
    });
    console.log(this.state.constructive_count);
  }
 
  destruct = () => {
    console.log("Destruct Clicked!");
    this.setState({
      destructive_count: this.state.destructive_count + 1
    });
    console.log(this.state.destructive_count);
  }
  
  writeData = () => {
    Firebase.database().ref('/').set(this.state);
    console.log("Saving...");
  }

  readData = () => {
    let ref = Firebase.database().ref('/');
    ref.on('value', database => {this.setState(database.val())});
    console.log("Reading....");
  }

  render() {
   
   console.log("Now Rendering...");
   
   return (
    <div id="Counter">
     <h1> The Leazy Relationship Counter </h1>
     <p> Constructive: {this.state.constructive_count} </p>
     <p> Destructive: {this.state.destructive_count} </p>
     <button onClick={this.construct}> Constructive Point! </button>
     <button onClick={this.destruct}> Destructive Point! </button>
    </div> 
   )
  }
}

export default Counter;

