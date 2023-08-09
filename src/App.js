import React, { Component } from "react";

import "./App.css";
import Greet from "./components/Greet"
// import Hello from "./components/Hello"
import Welcome from "./components/welcome"
import Message from "./components/Message"

class App extends Component {
  render() {
    return (
     <div className="App">
       <Message />
       {/*<Greet name="Murewa" heroName="Ubaydullah">
         <p>This is children props</p>
       </Greet>
       <Greet name="Mayowa" heroName="Abdullah">
         <button>Bismillah</button>
       </Greet>
       < Greet name="Muyiwa" heroName="Abdulmajid"/>
       <Welcome name="Murewa" heroName="Ubaydullah"/>
       <Welcome name="Mayowa" heroName="Abdullah"/>
       <Welcome name="Muyiwa" heroName="Abdulmajid"/>*/}
     </div>
    );
  }
}


export default App;
