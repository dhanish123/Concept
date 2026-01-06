import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(""); 
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!input.trim()) return;

    if (editId !== null) {  //Update existing todo
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setEditId(null);
    } else { // add new todo
      setTodos([...todos, { id: Date.now(), text: input }]);
    }
    setInput(""); // clear input
  };

  const handleEdit = (todo) => {
    setInput(todo.text); // load todo text into input
    setEditId(todo.id);  // set editing mode
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // remove todo by id
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo CRUD</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={handleAddOrUpdate}>
        {editId !== null ? "Update" : "Add"}
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
