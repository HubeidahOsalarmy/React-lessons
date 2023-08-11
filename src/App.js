import React, { Component } from "react";

import "./App.css";
import Greet from "./components/Greet"
import Hello from "./components/Hello"
import Welcome from "./components/welcome"
import Message from "./components/Message"
import Counter from "./components/Counter"
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"


class App extends Component {
  render() {
    return (
     <div className="App">
        <Counter />
        { /* <Message /> */}
       <Greet name="Murewa" heroName="Ubaydullah"/>
       < FunctionClick />
       < ClassClick />
       < EventBind />


        {/* <p>This is children props</p>
       
       <Greet name="Mayowa" heroName="Abdullah">
         <button>Bismillah</button>
       </Greet>
    < Greet name="Muyiwa" heroName="Abdulmajid"/>*/}
       <Welcome name="Murewa" heroName="Ubaydullah"/>
       {/*<Welcome name="Mayowa" heroName="Abdullah"/>
       <Welcome name="Muyiwa" heroName="Abdulmajid"/>*/}
     </div>
    );
  }
}


export default App;
