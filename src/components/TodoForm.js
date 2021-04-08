import React from "react"

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    changeEventHandler = event => {
        this.setState({
            ...this.state,
            task: event.target.value
        })
    }

    submitEventHandler = event => {
        event.preventDefault();
        this.setState({
            task: ''
        })

        this.props.addToDo(this.state.task)
    }

    render() {
        return(
            <form onSubmit = {this.submitEventHandler} >
            <input type="text"  placeholder="Add New Task" name="task" value={this.state.task} onChange={this.changeEventHandler} />
            <button>Submit</button>
            </form>
        )
    }
}

export default TodoForm;