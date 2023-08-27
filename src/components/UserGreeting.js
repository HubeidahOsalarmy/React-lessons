import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
//METHODS OF CONDITIONAL RENDERING OF UI
    //short circuit operator
    return this.state.isLoggedIn && <div>Welcome Omomurewa</div>


    //Ternery conditional operator
   // return this.state.isLoggedIn ? (
   //   <div>Welcome Omomurewa</div>
   // ) : (
   //   <div>Welcome Omomuyiwa</div>
   // );

    //element variable method
    //let message
    // if (this.state.isLoggedIn) {
    //       message = <div>Welcome Omomurewa</div>
    //} else {
    //   message = <div>Welcome Omomuyiwa</div>
    // }

    //return <div>{message}</div>;

    //if/else method
    //if(this.state.isLoggedIn){
    //   return(
    //     <div>
    //       Welcome Omomurewa
    // </div>
    //)
    //  } else{
    //    return (
    //      <div>
    //        Welcome Omomuyiwa
    //  </div>
    // )
    // }

    //  return (
    //   <div>
    //    <div>welcome Omomurewa</div>
    //    <div>welcome Omomuyiwa</div>
    //   </div>
    //  )
  }
}

export default UserGreeting;
