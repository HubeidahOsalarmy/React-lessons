import React, { Component } from "react"

//function event handling
function FunctionClick() {

    function clickHandler() {
        console.log("Button clicked")
    }
    return (
      <div>
        <button onClick={clickHandler}>Click</button>
      </div>
    )
  
}

export default FunctionClick
