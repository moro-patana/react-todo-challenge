import React, { useState } from "react"
function UseToggler() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [isChecked, setIsChecked] = useState(false)
    function handleChecked() {
        setIsChecked(!isChecked)
    }

    // smbimt
  
    const handleChange = e => {
    //   setTodo(e.target.value);
    };
    const addTodo = () => {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo,
          completed: false
        }
      ]);
    };
  
    const onSubmit = e => {
      e.preventDefault();
      if (todos === "") return;
    //   addTodo();
    //   setTodo("");
    setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: e.target.todo.value,
          completed: false
        }
      ]);
      e.target.reset()
    };
  
    const removeTodo = todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    };
  
    const toggleTodo = todoId => {
      const updatedTodos = todos.map(todo => {
        return todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      setTodos(updatedTodos);
    };
  
return({todo, todos, isChecked, handleChecked, handleChange, addTodo, onSubmit, toggleTodo})  
}
export default UseToggler;