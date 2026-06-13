import React,{useState} from 'react'

export default function useStateExample() {

    const[count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount((count)=>count+1) //always recommended to use previous state such as (count)=>
        setCount((count)=>count+1)
        setCount((count)=>count+1)
    }


  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
