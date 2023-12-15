import React from "react";

const Task = ({ task, updateTask, deleteTask }) => {
  const handleCheckboxChange = () => {
    // Llama a la función de actualización de estado del padre para cambiar la propiedad "completed"
    updateTask(task.id, { ...task, completed: !task.completed });
  };

  const handleDeleteTask = () => {
    // Llama a la función de eliminación de estado del padre
    deleteTask(task.id);
  };

  const handleUpdateDescription = () => {
    // Llama a la función de actualización de estado del padre para cambiar la propiedad "descr"
    const newDescription = prompt("Ingrese la nueva descripción:");
    if (newDescription !== null && newDescription !== undefined) {
      updateTask(task.id, { ...task, descr: newDescription });
    }
  };

  return (
    <li style={{ display: "flex", flexDirection: "column" }}>
      <span>Tarea: {task.title}</span>
      <span>Descripción: {task.descr}</span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <button onClick={handleDeleteTask}>Eliminar</button>
      <button onClick={handleUpdateDescription}>Actualizar Descripción</button>
    </li>
  );
};

export default Task;

