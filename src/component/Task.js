import React,{useContext} from 'react'
import TodoContext from '../context/todocontext'

function Task(){
    const todocontext=useContext(TodoContext);

    return(
        <li className="list-group-item">
            {todocontext.text} 
            <button className="btn btn-outline-info ml-4" onClick={todocontext.CompletTask}>
                Done
            </button>
        </li>
    )
}

export default Task;