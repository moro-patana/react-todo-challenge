import React from "react"
import UseToggler from "./useToggler"
function All() {
    const {todo, todos, handleChange, addTodo, onSubmit, toggleTodo} = UseToggler()
    console.log(todos);
    
    return (
        <div>
            <h1>Hello</h1>
            {todos.map(todo => (
            <fieldset>
                <input type="checkbox" key={todo.id}/>
                    <label
                    // className={todo.completed ? "todo-completed" : undefined}
                    // onClick={() => toggleTodo(todo.id)}
                    >
                    {todo.text}
                    </label>
                    {/* <span className="delete-btn" onClick={() => removeTodo(todo.id)}>
                    x
                    </span> */}
            </fieldset>
            ))}
    </div>
    )
}
export default All;