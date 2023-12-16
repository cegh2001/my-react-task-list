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
    <Flex // Reemplaza el div por un Flex
      className="header"
      bg="black" // Añade un color de fondo
      color="white" // Añade un color de texto
      p="4" // Añade un relleno
      align="center" // Alinea los elementos verticalmente
      justify="space-around " // Distribuye los elementos horizontalmente
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
          mr="2" // Añade un margen a la derecha
        />
        <Input // Reemplaza el input por un Input
          type="text"
          placeholder="Nueva descripción"
          value={newTaskDescr}
          onChange={handleDescrChange}
          mr="2" // Añade un margen a la derecha
        />
        <Button 
          type="submit"
          colorScheme="white" // Añade un esquema de color
          variant="outline" // Añade una variante de estilo
        >
          Agregar Tarea
        </Button>
      </form>
    </Flex>
  );
};

export default Header;
