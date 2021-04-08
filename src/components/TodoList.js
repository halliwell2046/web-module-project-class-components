import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    render () {
        return (
            <div>
                <div>
                    {this.props.todo.filter(value => {
                        if(this.props.search === ""){
                            return value
                        } else if (value.task.toLowerCase().includes(this.props.search.toLowerCase())){
                            return value
                    };
                 }) .map(task => (
                     <Todo key={task.id} task={task} todoToggle={this.props.todoToggle} />
                 ))}
                </div>
                <button onClick={() => this.props.clearList()}>Clear</button>
            </div>
        )
    }
}

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
