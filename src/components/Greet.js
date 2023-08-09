import React from "react"

// function Greet() {
 //   return <h1>Hello Idris</h1>
//}

const Greet = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        Hello {props.heroName} a.k.a {props.name}
      </h1>
     {props.children}
    </div>
    
  )
  
}
export default Greet