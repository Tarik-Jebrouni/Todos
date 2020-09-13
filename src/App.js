import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateTask from './component/CreateTask';
import TodoContext from './context/todocontext'
import Task from './component/Task';

class App extends React.Component{
  state = {
    todos:[
      {text:"learn ReactJS"},
      {text:"learn NodeJS"},
      {text:"learn VueJS"},
      {text:"learn AndularJS"},
    ],
    newtask:""
  }

  CompletTask=(index)=>{
    const todos=[...this.state.todos];
    todos.splice(index,1);
    this.setState({
      todos:todos
    }) 
  }
  onChange=(event)=>{
    const newtask=event.target.value;
    this.setState({
      newtask:newtask
    })
  }
  AddTask=()=>{
    const todos=[...this.state.todos];
    todos.push({
      text:this.state.newtask
    })
    this.setState({
      todos:todos,
      newtask:""
    })
  }
  render(){
    
  return (
    <body class="bg-light">
      <div class="container">
        <div class="row mt-5">
            <div class="card">
                <div class="card-header display-5 bg-white text-info shadow-sm">
                    <h1>Todos</h1>
                  </div>
                  <div className="card-body">
                  <ul class="list-group">
                      {this.state.todos.map((todo,index)=>
                            <TodoContext.Provider value={{
                              'text':todo.text,
                              'CompletTask':()=>{this.CompletTask(index)}
                          }}>
                            <Task key={index}  />
                            </TodoContext.Provider>
                          )}
                          <TodoContext.Provider value={{
                              'value':this.state.newtask,
                              'onChange':this.onChange,
                              'AddTask':this.AddTask
                          }}>
                            <CreateTask  />
                        </TodoContext.Provider>
                    </ul>
                  </div>  
              </div>
          </div>
         </div> 
    </body>
  );
}
}

export default App;
