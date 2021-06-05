import React from 'react'

const Todo = ({ task, id, completed, index, toggleCompleted }) => {
    const invokeToggleCompleted = () => toggleCompleted(id);
    let evenOdd = index % 2 === 0 ? "even" : "odd";
    let classNames = `todo-item ${evenOdd}`;
    return(
        <div>
            <p>{task}</p>
        </div>
    )
}
 

export default Todo;