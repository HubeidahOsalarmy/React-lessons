import React, { Component } from "react"


//class component
/*class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.heroName} a.k.a {this.props.name}</h1>
    }
}*/

//destructing of class using render method
class Welcome extends Component {
    render() {
        const {heroName, name} = this.props
        //const {stata1, state2} = this.state
        return <h1>Welcome {heroName} a.k.a {name}</h1>
    }
}
export default Welcome 