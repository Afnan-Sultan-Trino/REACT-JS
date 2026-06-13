import React, { Component } from 'react'

export default class hooks extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         message:"Hi"
      }
    }

    handleIncrement=()=>{
        this.setState({
            count: this.state.count+1,
            message:this.state.message+"Trino"
        })
    }
    


  render() {
    
    const {count}=this.state
    const {message}=this.state

    return (
      <div>
        <h1>Count : {count}</h1>
        <p>Welcome {message}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}
