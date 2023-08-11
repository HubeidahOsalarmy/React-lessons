import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

      /*binding in the constructor*/
      //this.clickHandler.bind(this)
    }

   // clickHandler() {
       // this.setState({
         //   message: "Goodbye!"
       // })
   // }

   //using arrow  within the class
   clickHandler = () => {
    this.setState({
        message: "Goodbye!"
    })
   }

    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>

     {/*binding in the render function*/}
    {/*binding using bind metthod*/}
        {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}


    {/*binding using arrow Function*/}
        {/*<button onClick={() => this.clickHandler()}>Click</button>*/}

        {/*binding from constructor*/}
        <button onClick={this.clickHandler}>Click</button>


      </div>
    )
  }
}

export default EventBind
