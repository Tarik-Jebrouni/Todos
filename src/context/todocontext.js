import React from "react";

const TodoContext=React.createContext({
    'text':'todo.text',
    'value':'this.state.newtask',
    'onChange':'this.onChange',
    'AddTask':'this.AddTask',
    'CompletTask':'()=>{this.CompletTask(index)}'
})


export default TodoContext;
