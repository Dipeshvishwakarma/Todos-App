import React from 'react';
import TodoItem from './TodoItem';


const Todos = ({todos,onDelete}) => {
    let myStyle = {
        minHeight:"70vh",
        margin:"10px auto"
    }
  return (
      <div className='container my-3' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {todos.length===0 ?"No Todos to display": 
      todos.map((todo)=>{
          return (
          <>   
          <TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
          <hr/>
          </> );
      })}
      
      </div>
    )
  
};

export default Todos;