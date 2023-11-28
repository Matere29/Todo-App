import React, {useState} from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState()
  

  console.log(task,'created')

  const handleAdd = () => {
    const endpoint = 'https://mongodb+srv://Rorisang:EXYJzPXe0LCSDOXC@cluster0.h9b3loo.mongodb.net/?retryWrites=true&w=majority/add-task'; // Replace with your actual endpoint
    const data = { task: task };
  
    axios.post(endpoint, data)
      .then(result => {
        location.reload();
      })
      .catch(err => console.log(err, '123456'));
  };
  
  return (
    <div className='create_form'>
        <input type="text"  placeholder="Enter Task" onChange={(e)=> setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create