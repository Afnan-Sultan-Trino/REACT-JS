
import React, { Component } from 'react'
import './style.css'

export default class STATE extends Component {
 
    constructor(props) {  // for creating state, we need constructor
      super(props)
    
      this.state = {
         count :0,
         message:"HELLO"
         
      }
    }


    handleIncrement=()=>{
        this.setState({
            count : this.state.count+1
        })
        
    }


     handleDecrement=()=>{
        this.setState({
            count : this.state.count-1
        })
        
    }
    
  

  render() {
    
    const{count}=this.state;    //destructor for avoiding multiple times calling "this.state"

    return (
      <div>
        <h1>Count : {count}<br></br> 
        {this.state.message}</h1>

        <button style={{backgroundColor:"orange", marginRight:"10px"}} onClick={this.handleIncrement}>+</button> 
        <button style={{backgroundColor:"red"}} onClick={this.handleDecrement} disabled={count===0?true:false}>-</button>
      </div>
    )
  }
}
