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
import ParentComponent from "./components/ParentComponent"
import UserGreeting from "./components/UserGreeting"
import List from "./components/List"
import Person from "./components/Person"
import Stylesheet from "./components/Stylesheet"
import Inline from "./components/Inline"
import "./appStyles.css"
import styles from "./appStyles.module.css" 



class App extends Component {
  render() {
    return (
     <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>

     <Inline /> 
      {/*<Stylesheet primary={true} />*/}
     {/* <Person />
      <List />
      <UserGreeting />
      <ParentComponent />
        <Counter />
        <Message /> 
       <Greet name="Murewa" heroName="Ubaydullah"/>
       < FunctionClick />
       < ClassClick />
       < EventBind />


         <p>This is children props</p>
       
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
