import React,{useEffect,useState} from 'react'


const loadingMessage=<p>Todos are Loading</p>

const DataFetch = () => {


    const[todos,setTodos]=useState(null)
    const[isLoading,setIsLoading]=useState(true)
    const[error,setError]=useState(null)

  
    useEffect(()=>{  //for fetching data
      
        fetch("https://jsonplaceholder.typicode.com/todos") //in built JS function for fetching
        .then((res)=>{
            if(!res.ok){
                throw Error("Fetching is not successful")
            }
            return res.json()
        })
        .then((data)=>{
            setTodos(data);
            setIsLoading(false); //when data comes, then no loading means false
            setError(null);
            
        })
        .catch((error)=>{
            setError(error.message)
            setIsLoading(false);
        })

    },[]); //for empty dependency , not repeating call


    const todoElement = todos && todos.map((todo)=>{
           return  <p key={todo.id}>{todo.title}</p>
        })
    
        
  

  return (
    <div>
      <h1>Data Fetch using useEffect</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage}
      {todoElement}
    </div>
  )
}

export default DataFetch
