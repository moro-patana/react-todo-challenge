import React from "react"
import UseToggler from "./useToggler"
import All from "./All";

function FormInput() {
    const {todo, todos, isChecked, handleChecked, handleChange, addTodo, onSubmit, toggleTodo} = UseToggler()
    console.log(todos);
    
 return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <input
          id="todo"
          className="todo-input"
          name="todo"
        //   onChange={handleChange}
        //   value={todo}
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
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

    </div>
  );
}
export default FormInput;