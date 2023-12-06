import React from "react";

const Task = ({ task, updateTaskStatus }) => {
  const handleCheckboxChange = () => {
    // Llama a la función de actualización de estado del padre
    updateTaskStatus(task.id, !task.completed);
  };

  return (
    <li>
      <span>{task.title}</span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
    </li>
  );
};

export default Task;
