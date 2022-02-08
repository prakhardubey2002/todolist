import React from 'react';
import {TodosItem} from "./tes.js"

export const Todos = (props) => {
  let mystyle={
    minHeight:"80vh",
    margin:"40px auto",
  }
  return (
   
     <div className="container" style={mystyle}>
        <h3 className=" my-3">Todos List</h3>
        {props.todos.length===0?"No todos to display":
        props.todos.map((todo)=>{ 
                     
         return(
         <TodosItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
         )
        }) 
       }
  </div>
  )
}

