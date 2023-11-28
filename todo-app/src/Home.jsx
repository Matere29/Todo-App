import React, { useState, useEffect } from "react";
import Create from "./Create";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);
  console.log(todos , 'setTodos');

  useEffect(( ) => {
    axios.get('https://mongodb+srv://Rorisang:EXYJzPXe0LCSDOXC@cluster0.h9b3loo.mongodb.net/?retryWrites=true&w=majority/todos')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err , 'ftyffff'));
  },[])

  const handleEdit = () => {
    axios.put('mongodb+srv://Rorisang:EXYJzPXe0LCSDOXC@cluster0.h9b3loo.mongodb.net/?retryWrites=true&w=majority/update'+id)
    .then(result => {
      setTodos(result.data)
    })
    .catch(err => console.log(err));
  }
  const handleDelete = () => {
    axios.delete('mongodb+srv://Rorisang:EXYJzPXe0LCSDOXC@cluster0.h9b3loo.mongodb.net/?retryWrites=true&w=majority/delete'+id)
    .then(result => {
      location.reload()
    })
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
              <span><BsFillTrashFill className = 'icon' onClick={() => handleDelete(todo._id)}/></span>
              </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
