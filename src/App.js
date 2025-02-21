import { useState } from 'react'
import './App.css'

function App() {

  const defaultTask = {
    id:1,
    value:"shopping",
    completed:false
  }
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([defaultTask])

  const handleOnSubmit = (e) => {
     e.preventDefault();
     const newTask = {
      id:Date.now(),
      value,
      completed:false
     }
     setTasks([...tasks, newTask]);

     setValue("");
     console.log(tasks);
     
     
  }
 
  return (
    <>
     <div className="container">
       <div className="row  mx-auto outer">
        <header className='text-center'><h2>To Do List App</h2></header>
          <div className="col-12 mt-2">
              <form name='todo' className='todoForm' onSubmit={handleOnSubmit}>
             <button type='submit' className='btn btn-primary btnPriamry'>Add To Do</button>&nbsp;<input type='text' placeholder='Enter task here...' value={value || ''} onChange={e=>setValue(e.target.value)} className='form-control' />
             <select  className='form-select'>
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Active">Active</option>
            </select>
            </form>
          </div>
       </div>
     </div>
    </>
  )
}

export default App
