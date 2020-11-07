import React from "react"
import UseToggler from "./useToggler"
function FormInput() {
    const {todo, todos, isChecked, handleChecked, handleChange, addTodo, onSubmit, toggleTodo} = UseToggler()
 return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <input
          id="todo"
          className="todo-input"
          onChange={handleChange}
          value={todo}
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
      <div>
              {todos.map(todo => (
                <fieldset>
                    <input type="checkbox" key={todo.id} onChange={handleChecked}/>
                    {isChecked
                      ? <s><label>{todo.text}</label></s>
                      :<label
                        // className={todo.completed ? "todo-completed" : undefined}
                        // onClick={() => toggleTodo(todo.id)}
                      >
                        {todo.text}
                      </label>
                    
                    }
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