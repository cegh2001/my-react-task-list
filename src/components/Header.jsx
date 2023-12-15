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

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== "") {
      addTask({ title: newTaskTitle, descr: newTaskDescr, completed: false });
      setNewTaskTitle("");
      setNewTaskDescr("");
    }
  };

  return (
    <div className="header">
      <h1>TaskC</h1>
      <div>
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
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
    </div>
  );
};

export default Header;
