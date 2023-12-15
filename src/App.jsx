import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas desde localStorage cuando se monta el componente
  useEffect(() => {
    const loadedTasks = localStorage.getItem("tasks");
    console.log("Loaded tasks from localStorage:", loadedTasks);
    if (loadedTasks) {
      setTasks(JSON.parse(loadedTasks));
    }
  }, []); // Deja la dependencia vacía para que solo se ejecute al montar el componente

  // Guardar tareas en localStorage cada vez que cambia el estado tasks
  useEffect(() => {
    if (tasks.length > 0) {
      console.log("Saving tasks to localStorage:", tasks);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    // Generar un ID único para la tarea
    const id = Math.max(...tasks.map((task) => task.id), 0) + 1;
    const newTask = { ...task, id };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== id);
      // Guardar las tareas actualizadas en localStorage
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };


  const updateTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  return (
    <div className="app">
      <Header addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
};

export default App;
