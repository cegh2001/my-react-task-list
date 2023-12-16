import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import useTasks from "./hooks/useTasks";

const App = () => {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();

  return (
    <div className="app">
      <Header addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
};


export default App;
