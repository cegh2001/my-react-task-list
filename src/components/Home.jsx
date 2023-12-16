// Home.jsx
import React from "react";
import {Flex, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      p="4"
      width="216vh"
      mx="auto"
      height="100vh"
      bg="black"
      color="white"
      direction="column"
      align="center"
      justify="center"
    >
      <Heading as="h1" mb="4">
        Bienvenido a Mi Aplicación
      </Heading>
      <Text fontSize="lg" mb="4">
        ¡Gracias por visitarnos!
      </Text>
    </Flex>
  );
};

export default Home;
