import React from 'react';

export const  TodosItem = ({todo, onDelete}) => {
  return (
    <>
  <div>
    <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    <button className="btn btn-sm btn-danger" onClick={ ()=>{ onDelete(todo)}} >Delete</button>
  </div>
  <hr/>
  </>
  );
};
// export const  TodosItem = (props) => {
//   return (
//   <div>
//     <h4>{props.todo.title}</h4>
//     <p>{props.todo.desc}</p>
//     <button className="btn btn-sm btn-danger" onClick={props.onDelete} >Danger</button>
//   </div>
//   );
// };
