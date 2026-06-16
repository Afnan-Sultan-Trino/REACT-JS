import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const React_Toastify = () => {

    
    const handleNewTodo = async () => {
        
        const toastId = toast.loading("Adding Todo... Please wait");

        try {
          
            await new Promise((resolve) => setTimeout(resolve, 2000));

            
            toast.update(toastId, {
                render: "✅ New Todo is added in your list!",
                type: "success",
                isLoading: false,
                autoClose: 3000
            });
        } catch (error) {
            
            toast.update(toastId, {
                render: "❌ Failed to add Todo!",
                type: "error",
                isLoading: false,
                autoClose: 3000
            });
        }
    };

    const handleDeleteTodo = async () => {
        const toastId = toast.loading("Deleting Todo... Please wait");

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            toast.update(toastId, {
                render: "🗑️ Todo is deleted from your List!",
                type: "success",
                isLoading: false,
                autoClose: 3000
            });
        } catch (error) {
            toast.update(toastId, {
                render: "❌ Failed to delete!",
                type: "error",
                isLoading: false,
                autoClose: 3000
            });
        }
    };

    return (
        <div>
            <h1>Todo App</h1>
            <br />
            <button onClick={handleNewTodo}>Add New Todo</button>
            <button onClick={handleDeleteTodo}>Delete Todo</button>
            <ToastContainer />
        </div>
    );
};

export default React_Toastify;