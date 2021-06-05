import React from "react"

const TodoForm = ({ input, updatedInput, addTodo, clearCompleted}) => {
    const invokeUpdatedInput = (e) => updatedInput(e.target.value);
    
    const invokeAddTodo = (e) => {
        e.preventDefault();
        addTodo();
    };

    const invokeClearCompleted = (e) => {
        clearCompleted();
    };

    return (
        <form>
            <input
            name="todoInput"
            type="string"
            value={input}
            onChange={invokeUpdatedInput}
            placeholder="Task"
            />
            <div>
                <button type="submit">Add Task</button>
                <button type="button" onClick={invokeClearCompleted}>Clear</button>
            </div>
        </form>
    )
}

export default TodoForm;