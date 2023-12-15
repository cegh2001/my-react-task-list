import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div className="task-list">
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
