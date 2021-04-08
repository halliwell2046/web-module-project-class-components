import React from 'react';

import Search from './components/Search'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      todo: [],
      search: ""
    };
  }

  todoToggle = todoId => {
    const newTask = this.state.todo.map(task => {
      return todoId === task.id ? {task, completed: !task.completed} : task
    });

    this.setState({...this.state, todo: newTask});
  };

  addToDo = taskName => {
  const newToDo = {
    task: taskName,
    id: Date.now(),
    completed: false
  };
  this.setState({
    ...this.state,
    todo: [this.state.todo, newToDo]
  });
};

clearList = () => {
  this.setState({
    ...this.state,
    todo: this.state.todo.filter(task => !task.completed)
  });
};

searchList = event => {
  this.setState({
    ...this.state,
    search: event.target.value
  });
};
 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To Do List!</h2>
        <Search searchList={this.searchList} />
        <TodoForm addToDo={this.addToDo} />
        <input type='text' placeholder='new task' onChange={this.handleInputChange} />
        <TodoList clearList={this.clearList}
        search ={this.state.search}
        todo = {this.state.todo}
        todoToggle = {this.todoToggle} />
      </div>
    );
  }
}

export default App;
