import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import useTasks from "./hooks/useTasks";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";

const App = () => {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();

  return (
    <ChakraProvider>
    <Router>
      <div className="app">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tasks"
            element={
              <>
                <Header addTask={addTask} />
                <TaskList
                  tasks={tasks}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                />
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
    </ChakraProvider>
  );
};

export default App;