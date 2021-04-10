import React from 'react'

class Todo extends React.Component {
    render () {
        return (
            <div className={`todo ${this.props.task.completed ? "completed" : ""}`}
            onClick={() => {this.props.todoToggle(this.props.task.id)}}>
                <p>{this.props.task.newTask}</p>

            </div>
        )
    }
}

export default Todo;