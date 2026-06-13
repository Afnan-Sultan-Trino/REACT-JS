import React,{useState} from 'react'
import style from './form.module.css'

export default function FORM() {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')




    const handleChange=(e)=>{
        setName(e.target.value)
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }

    const handleSubmit=(e)=>{
        console.log("FORM is submitted")
        
        let userinfo={  //creating object
            name,       // if the state's varibale name and object's attribute name is same, we can use only state's variable name
            email,
            password
        }

        console.log(userinfo)
        e.preventDefault()
    }


  return (
    <div>
      <h1>Registration FORM : </h1>

      <form action="" onSubmit={handleSubmit}>
        <label>Name : </label>
        <input type='text' name='name'id='name' value={name} onChange={handleChange} required></input>
        <br></br>
        <br></br>

        <label>Email : </label>
        <input type='email' name='email'id='email'value={email} onChange={handleEmailChange}  required></input>
        <br></br>
        <br></br>

        <label>Password : </label>
        <input type='password' name='password'id='password'value={password} onChange={handlePasswordChange}  required></input>
        <br></br>
        <br></br>

        <button type='submit'>Register</button>

      </form>
    </div>
  )
}
