import React from "react";
import { Flex, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <Flex 
      className="task-list"
      bg="black" // Añade un color de fondo
      color="white" // Añade un color de letra
      height= "100vh" // Establece la altura del elemento
      p="4" // Añade un relleno
      direction="column" // Establece la dirección de los elementos
      align="center" // Alinea los elementos horizontalmente
    >
      <Heading as="h2" size="lg" mb="4">
        {" "}
        Lista de
        Tareas
      </Heading>
      <UnorderedList // Reemplaza el ul por un UnorderedList
        w="80%" // Establece el ancho del elemento
        spacing="2" // Añade un espaciado entre los elementos
      >
        {tasks.map((task) => (
          <ListItem // Reemplaza el li por un ListItem
            key={task.id}
            p="2" // Añade un relleno
            border="1px solid gray" // Añade un borde
            borderRadius="md" // Añade un radio de borde
          >
            <Task task={task} deleteTask={deleteTask} updateTask={updateTask} />
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default TaskList;
