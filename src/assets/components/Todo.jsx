import React, { useState } from 'react'
import { Header } from './Header'

export const Todo = () => {
    const [todo,settodo]= useState([]);
    const [inputValue, setInputValue] = useState('');
  return (
    <>
    <Header></Header>
    <div className="todo">
           
           <h2>TO-DO LIST</h2>

           <div className="inp">

            <input type="text"  value={inputValue} onChange={(event) => setInputValue(event.target.value)}  placeholder='Enter the task'/>
            <button onClick={()=>{settodo(t=>[...t,inputValue]);setInputValue("");}}>ADD</button>

           </div>


           <div className="tsaks">

            
                {todo.map((i , index)=>

                       <span>{ (index+1) + "." + i + " "} <input type="checkbox" /> <br /><br /></span>
                
    
                )}
            
           </div>
           <div className="dlt">
            <button onClick={()=>settodo([])}>Delete Tasks</button>
           </div>


    </div>
    
    </>
  )
}
