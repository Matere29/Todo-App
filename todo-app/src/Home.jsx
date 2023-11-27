import React, { useState, useEffect } from "react";
import Create from "./Create";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(( ) => {
    axios.get('https://localhost:3001/get')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err));
  },[])

  const handleEdit = () => {
    axios.put('https://localhost:3001/update'+id)
    .then(result => console.log(result.data))
    .catch(err => console.log(err));
  }
  return (
    <div>
      <h2>Todo List</h2>
      <Create />
      {
      todos.length === 0 
      ?
      <div><h2>No Record</h2></div>
      :
      todos.map((todo) => (
        <div className="task">
          <div className="checkbox" onClick={()=>handleEdit(todo._id)}>
            {todo.done ? 
            <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
            : <BsCircleFill className="icon" />
            }
            <p className= {todo.task ? "line_through" : ""}>{todo.task}</p>
            </div>
            <div>
              <span><BsFillTrashFill className = 'icon'/></span>
              </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
