import React, { useContext } from 'react'
import TodoContext from '../context/todocontext'
function CreateTask(props){
    const todocontext=useContext(TodoContext);
    return(
        <li className="list-group-item"> 
            <div className="input-group-append">
                <input className="form-control" value={todocontext.newtask} onChange={todocontext.onChange} />     
                <button className="btn btn-outline-primary  ml-4" onClick={todocontext.AddTask}>Add Task</button>
            </div>
        </li>
    )
}

export default CreateTask;