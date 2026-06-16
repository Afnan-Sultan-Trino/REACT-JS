import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const React_Toastify = () => {

    const handleNewTodo=()=>{
    toast("New Todo is added in your list")
}

 const handleDeleteTodo=()=>{
  toast("Todo is deleted from your List")
 }

  return (
    <div>
      <div>
           <h1>Todo App</h1> <br></br>
           <button onClick={handleNewTodo}>Add New Todo</button>
           <button onClick={handleDeleteTodo}>DeleteTodo</button>
           <ToastContainer/>
          </div>
    </div>
  )
}

export default React_Toastify