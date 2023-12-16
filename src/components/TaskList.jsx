import React from "react";
import { Flex, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <Flex 
      className="task-list"
      bg="black" 
      color="white" 
      height= "100vh" 
      p="4" 
      direction="column" 
      align="center" 
    >
      <Heading as="h2" size="lg" mb="4">
        {" "}
        Lista de
        Tareas
      </Heading>
      <UnorderedList 
        w="80%" 
        spacing="2" 
      >
        {tasks.map((task) => (
          <ListItem 
            key={task.id}
            p="2" 
            border="1px solid gray" 
            borderRadius="md" 
          >
            <Task task={task} deleteTask={deleteTask} updateTask={updateTask} />
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default TaskList;
