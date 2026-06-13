import React,{useState} from 'react'
import style from './form.module.css'

export default function FORM() {

    /*
    const[name,setName]=useState('')     //defining state
    const[email,setEmail]=useState('')     //defining state
    const[password,setPassword]=useState('')   //defining state

    */

    //using useState object

    const[user,setUser]=useState({
        name:'',
        email:'',
        password:''
    })

    //destructor calling , otherwise we have to call it as user.name, user.email. But now, only name,email

    const{name,email,password}= user; 



   /* creating 3 individual event handler

    const handlNameChange=(e)=>{
        setUser({name:e.target.value,email,password})
    }

    const handleEmailChange=(e)=>{
        setUser({name,email:e.target.value,password})
    }

    const handlePasswordChange=(e)=>{
        setUser({name,email,password:e.target.value})
    } 
        */

    
    //creating only 1 event handler
    const handleChange=(e)=>{
        
            setUser({...user,[e.target.name]:e.target.value})
        }




    const handleSubmit=(e)=>{
        console.log("FORM is submitted")
        
        /*
        let userinfo={  //creating object
            name,       // if the state's varibale name and object's attribute name is same, we can use only state's variable name
            email,
            password
        }
            */


        console.log(user)
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
        <input type='email' name='email'id='email'value={email} onChange={handleChange}  required></input>
        <br></br>
        <br></br>

        <label>Password : </label>
        <input type='password' name='password'id='password'value={password} onChange={handleChange}  required></input>
        <br></br>
        <br></br>

        <button type='submit'>Register</button>

      </form>
    </div>
  )
}
