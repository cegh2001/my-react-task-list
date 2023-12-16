import React, { useState } from "react";

const Header = ({ addTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescr, setNewTaskDescr] = useState("");

  const handleTitleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const handleDescrChange = (e) => {
    setNewTaskDescr(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    if (newTaskTitle.trim() !== "") {
      addTask({ title: newTaskTitle, descr: newTaskDescr, completed: false });
      setNewTaskTitle("");
      setNewTaskDescr("");
    }
  };

  return (
    <div className="header">
      <h1>TaskC</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Nuevo título"
          value={newTaskTitle}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Nueva descripción"
          value={newTaskDescr}
          onChange={handleDescrChange}
        />
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default Header;
