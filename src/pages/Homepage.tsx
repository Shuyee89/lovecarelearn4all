import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Image, Flex, Heading, Box, Center } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  Button,
  useColorMode,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import Payment from "../pages/Payment";
// import TestProfile from "../pages/Profiletest";
import Profile from "../pages/Profile";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

export const Homepage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [NRIC, setNRIC] = useState("");
  const code = queryParams.get("code");
  const { colorMode, toggleColorMode } = useColorMode();
  const [showSubComponent, setShowSubComponent] = useState("menu1");
  const [loadingState, setLoadingState] = useState("not_loaded");

  const initialtodo = [
    {
      id: "1",
      body: "Stand up and Stretch even 30 mins",
    },
  ];
  interface todo {
    id: string;
    body: string;
  }

  interface Profile{
    loadingState: string;
    NRIC: string;
  }
  //   const isEmptyArray = (obj: any): boolean => {
  //     return Array.isArray(obj) && obj.length === 0;
  //   };
  const [todos, setTodos] = useState(() => {
    const newtodo: any = localStorage.getItem("todos");
    return newtodo ? JSON.parse(newtodo) : initialtodo;
  });

  useEffect(() => {
    setLoadingState("loading");
    const getMessage = async () => {
      const url = `/.netlify/functions/getIDToken?code=${code}`;
      const { data } = await axios.get(url);
      setNRIC(data.data);
      setLoadingState("loaded");
    };

    getMessage();
  }, [code]);
  useEffect(() => {
    // Retrieve item from localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteToDo(id: string) {
    const newTodos = todos.filter((todo: any) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function AddToDo(todo: todo) {
    setTodos([...todos, todo]);
  }

  return (
    <Box w="100%">
      <Flex>
        <Image borderRadius="full" boxSize="80px" src="images/Parenthood.png" />
        <Center>
          <Menu>
            <MenuButton
              as={Button}
              marginLeft={5}
              variant="outline"
              onClick={() => {
                setShowSubComponent("menu1");
                console.log(showSubComponent);
              }}
            >
              Menu 1
            </MenuButton>
            <MenuButton
              as={Button}
              marginLeft={5}
              variant="outline"
              onClick={() => {
                setShowSubComponent("menu2");
                console.log(showSubComponent);
              }}
            >
              Payment
            </MenuButton>
            <MenuButton
              as={Button}
              marginLeft={5}
              variant="outline"
              onClick={() => {
                setShowSubComponent("menu3");
              }}
            >
              Menu 3
            </MenuButton>
          </Menu>
        </Center>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound={true}
          size="sm"
          alignSelf="center"
          aria-label="ColorMode"
          onClick={toggleColorMode}
          marginLeft={5}
        ></IconButton>
      </Flex>

      <Heading
        padding="2"
        fontWeight="extrabold"
        size="md"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
      >
        Love . Care . Learn
      </Heading>
      <VStack>
        <Profile loadingState={loadingState} NRIC={NRIC} />
        {/* <TestProfile /> */}
        {showSubComponent === "menu1" ? (
          <>
            <TodoList todos={todos} deleteToDo={deleteToDo} />
            <AddTodo AddToDo={AddToDo} />
          </>
        ) : (
          <></>
        )}
        {showSubComponent === "menu2" ? <Payment /> : <></>}
      </VStack>
    </Box>
  );
};

export default Homepage;
