import React from "react"

// function Greet() {
 //   return <h1>Hello Idris</h1>
//}

// destructuring of props in the parameter
/*const Greet = ({heroName, name}) => {
  
  return (
    <div>
      <h1>
        Hello {heroName} a.k.a {name}
      </h1>
     
    </div>
    
  )
  
}*/

// destructuring of props in the function body
const Greet = (props) => {
  const {heroName, name} = props
  return (
    <div>
      <h1>
        Hello {heroName} a.k.a {name}
      </h1>
     
    </div>
    
  )
  
}
export default Greet