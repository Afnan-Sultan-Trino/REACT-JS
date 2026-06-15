import React,{useState,useEffect} from 'react'

const UseEffect = () => {

    const[count,setCount]=useState(0);


    useEffect(()=>{   //only 1 time, after that, no call due to no dependencies
        console.log("useEffect")
    },[])


     useEffect(()=>{   // calls with first render and depend on count
        console.log("useEffect")
    },[count])


     useEffect(()=>{   //calls everytime after rendering due to dependencies
        console.log("useEffect")
    })

    const handleOnClick=()=>{
        setCount((count)=>count+1);
    }

  return (
    <div>
        {console.log("Rendering")}
      <h1>Count : {count} </h1>
      <button onClick={handleOnClick}> + </button>
    </div>
  )
}

export default UseEffect
