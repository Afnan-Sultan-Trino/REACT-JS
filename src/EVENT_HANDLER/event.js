import React, { Component } from 'react'
import '../style.css'

export default class event extends Component {


constructor(props) {
  super(props)

  this.state = {
    changeValue :''
  }
}



    handleChange=(e)=>{

        this.setState({
            changeValue : e.target.value
        },()=>{
            console.log(e.target.value)
        })

    
    }



  render() {
    return (
      <div>
        <h1>Event Handler</h1>
        <button onClick={this.handleClick}>Click Me</button> <br></br> <br></br>
        <input type='text' onChange={this.handleChange}></input>
        <p>{this.state.changeValue}</p>
      </div>
    )
  }
}
