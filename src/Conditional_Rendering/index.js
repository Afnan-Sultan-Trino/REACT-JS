import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import '../style.css'

export default class index extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: false
    }
  }


  

  

  render() {

  const{isLoggedIn}=this.state;


   /*  condition using if-else statement

    if(isLoggedIn){
      return <HomePage/>
    }
    else{
      return <LoginPage/>
    }
      */


  /*
  let element;   // using variable "element" we store the component
  if(isLoggedIn){
      element= <HomePage/>
    }
    else{
      element= <LoginPage/>
    }

    return(
      <div>
        {element}
      </div>
    )
      */


  
  let element

  element= isLoggedIn ? <HomePage/> : <LoginPage/>  //using ternary operator

  return(
      <div>
        {element}
      </div>
    )
      


    /*
    return(   //using short circuit method
      <div>
        {isLoggedIn && <HomePage/>}  
      </div>
    )
      */

  


  }
    
    
}
