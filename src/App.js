import React from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const initialToDos =  [
  {task: "Pick up Kids",
  id: 1,
  completed: false,
},
{task: "Fix Floor",
id: 2,
completed: false,},
{task: "Pack for trip",
id: 3,
completed: false,},
]

const initialTodoInput = "";

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      todos: initialToDos,
      todoInput: initialTodoInput,
    };
  }

updateToDo = (input) =>
this.setState({
  todoInput: input,
});

addTodo = () => {
  this.setState({
    todos: [
      ...this.state.todos,
      {
        task: this.state.todoInput,
        id: Date.now(),
        completed: false,
      },
    ],
  });
  this.setState({ todoInput: initialTodoInput });
};

toggleCompleted = (id) => {
  const newTodos = this.state.todos.map((todo) =>
    id === todo.id ? { ...todo, completed: !todo.completed } : todo
  );
  return this.setState({
    todos: newTodos,
  });
};

clearCompleted = () => {
  const incompleteTodos = this.state.todos.filter((todo) => !todo.completed);
  this.setState({todos: incompleteTodos});
};
 
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To Do List!</h2>
        {/* <Search searchList={this.searchList} /> */}
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
