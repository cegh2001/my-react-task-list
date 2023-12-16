import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box 
      className="about-us"
      height="100vh"
      width="216vh"
      bg="black" 
      color="white" 
      p="4" 
      align="center"
      justify="center"
    >
      <Heading as="h1" size="xl" mb="4" textAlign="center">
        Acerca de Nosotros
      </Heading>
      <Flex direction="column" spacing="4">
        {" "}
        <Text fontSize="lg">
          Esta es una aplicación de gestión de tareas, donde puedes crear,
          editar y eliminar tus tareas pendientes. También puedes filtrar las
          tareas por su estado (completadas o no) y ordenarlas por su prioridad
          o fecha de vencimiento.
        </Text>
        <Text fontSize="lg">
          Esta aplicación fue desarrollada usando React, una librería de
          JavaScript para crear interfaces de usuario. También se usó React
          Router, una librería para manejar el enrutamiento entre las diferentes
          páginas de la aplicación. Además, se usó un hook personalizado llamado
          useTasks, que se encarga de almacenar y manipular las tareas usando el
          localStorage del navegador.
        </Text>
        <Text fontSize="lg">
          Esperamos que esta aplicación te sea útil y te ayude a organizar mejor
          tus tareas. Si tienes alguna sugerencia o comentario, puedes
          contactarnos a través de nuestro correo electrónico
          cargonzalez0601@gmail.com.
        </Text>
      </Flex>
    </Box>
  );
};

export default AboutUs;
