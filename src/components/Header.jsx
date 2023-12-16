import React, { useState } from "react";
import { Flex, Heading, Input, Button } from "@chakra-ui/react";

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
    <Flex 
      className="header"
      bg="black" 
      color="white" 
      p="4" 
      align="center" 
      justify="space-around " 
    >
      <Heading as="h1" size="lg" >
        TaskC
      </Heading>
      <form onSubmit={handleAddTask}>
        <Input 
          type="text"
          placeholder="Nuevo título"
          value={newTaskTitle}
          onChange={handleTitleChange}
          mr="2" 
        />
        <Input 
          type="text"
          placeholder="Nueva descripción"
          value={newTaskDescr}
          onChange={handleDescrChange}
          mr="2" 
        />
        <Button 
          type="submit"
          colorScheme="white" 
          variant="outline" 
        >
          Agregar Tarea
        </Button>
      </form>
    </Flex>
  );
};

export default Header;
