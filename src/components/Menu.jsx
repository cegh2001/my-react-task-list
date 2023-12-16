import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

const Menu = () => {
  return (
    <Flex
      width="216vh"
      as="nav"
      bg="black"
      color="white"
      align="center"
      justify="center"
      p="4"
    >
      <Flex as="ul">
        {" "}
        <Box as="li" mx="4">
          {" "}
          <NavLink to="/" exact activeClassName="active">
            <Text as="a" href="/" _hover={{ textDecoration: "underline" }}>
              Home
            </Text>
          </NavLink>
        </Box>
        <Box as="li" mx="4">
          <NavLink to="/tasks" activeClassName="active">
            <Text as="a" href="/tasks" _hover={{ textDecoration: "underline" }}>
              Tasks
            </Text>
          </NavLink>
        </Box>
        <Box as="li" mx="4">
          <NavLink to="/about-us" activeClassName="active">
            <Text
              as="a"
              href="/about-us"
              _hover={{ textDecoration: "underline" }}
            >
              About Us
            </Text>
          </NavLink>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Menu;
