import React, { useEffect, useState } from 'react';
import './TodoApp.css';


const TodoApp = () => {

  const defaultTask = {
    id:1,
    task:"Shopping",
    isCompleted:false
  }

  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([defaultTask]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Submit Task
  const handleSubmit = (e) => {
    e.preventDefault();

    if(text!=="") {
        const newTask = {
          id:Date.now(),
          task:text,
          isCompleted:false
      }
      setTasks([...tasks, newTask]);
      setText("");

    }

  }

  // Completed task
  const handleCompleted = (id)=> {
    const taskCompleted = tasks.map((res)=> {
      if(res.id===id) {
       return {...res, isCompleted: !res.isCompleted};
      } else {
        return res
      }
    });
    setTasks(taskCompleted)
  }

  // Delete task
  const handleDelete = (id) => {
    const filterTask = tasks.filter(res=> res.id!==id);
    setTasks(filterTask);
  }

  // Filter task
  const handleStatus = (event) => {
    if(event.target.value==="") {
      setFilteredProducts(tasks);
    } else {
           const bool = event.target.value==='true'? true :false
           const prods = tasks.filter((p) => p.isCompleted === bool);
           setFilteredProducts(prods);
    }
 
  }

  useEffect(()=> {
     setFilteredProducts(tasks)
  },[tasks])
   
   
  return (
    <div>
  
      <div className="container">
       <div className="row mx-auto bg-light w-50 m-4 p-4 border">
          <div className="col-12">
             <div className="input-group">
              <form className='input-group' onSubmit={handleSubmit}>
                 <button className='btn btn-primary mx-2'>Add To Do</button>
                 <input type='text' className='form-control w-50' value={text || ""} onChange={e=>setText(e.target.value)}
                  placeholder='Enter task here...' />
                 <select className='form-select mx-2' onChange={handleStatus}>
                   <option value={""}>All</option>
                   <option value={true}>Completed</option>
                    <option value={false}>Active</option>
                 </select>
              </form>
             </div>
             <div className='list mt-4'>
                <ul className='list-group'>
                {filteredProducts && filteredProducts.length===0 ? 
                <h4 className='text-center'>No data found</h4>:filteredProducts && filteredProducts.map((res,index)=> <li 
                    className={res.isCompleted ?"list-group-item strikeThrough":"list-group-item"}>
                      <span onClick={()=>handleCompleted(res.id)}>{res.task}</span><button onClick={()=>handleDelete(res.id)} className='delete btn btn-sm btn-danger'>Delete</button> 
                    </li>)}
                </ul>
             </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default TodoApp
