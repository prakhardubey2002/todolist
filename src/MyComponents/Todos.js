import React from 'react';
import {TodosItem} from "../MyComponents/TodosItem"

export const Todos = (props) => {
  return (
     <div className="container">
        <h3 className="text-center my-3">Todos List</h3>
        {props.todos.map((todo)=>{
              return <TodosItem todo={todo} onDelete={props.onDelete} />
        })}
        
  </div>
  );
};

