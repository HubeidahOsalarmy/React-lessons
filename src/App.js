import React, { Component } from "react";

import "./App.css";
import Greet from "./components/Greet"
// import Hello from "./components/Hello"


class App extends Component {
  render() {
    return (
     <div className="App">
       < Greet name="Murewa" heroName="Taiyelolu"/>
       < Greet name="Mayowa" heroName="Omokehinde"/>
       < Greet name="Muyiwa" heroName="Idowu"/>
     </div>
    );
  }
}


export default App;
