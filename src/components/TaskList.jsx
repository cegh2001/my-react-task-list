import React, { useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const updateTaskStatus = (taskId, completed) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, completed } : task
    );

    setTaskList(updatedTasks);
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {taskList.map((task) => (
          <Task key={task.id} task={task} updateTaskStatus={updateTaskStatus} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
