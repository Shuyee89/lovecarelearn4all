import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Subheader } from "../components/subheader";
import { Heading, Center, VStack, Spinner } from "@chakra-ui/react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

export const Profile: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [NRIC, setNRIC] = useState(null);
  const code = queryParams.get("code");
  const [loadingState, setLoadingState] = useState("not_loaded");

  const initialtodo = [
    {
      id: "1",
      body: "Stand up and Stretch every 30 mins",
    },
  ];

  interface todo {
    id: string;
    body: string;
  }

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

  const [todos, setTodos] = useState(() => {
    const newtodo: any = localStorage.getItem("todos");
    return newtodo ? JSON.parse(newtodo) : initialtodo;
  });

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
    <div>
      {loadingState === "loaded" && (
        <div>
          <Subheader />
          <VStack>
            <Center>
              <Heading as="h5" size="sm" marginTop={5}>
                Hello, <Spinner color="red.500" />
                {NRIC}
              </Heading>
            </Center>
            <TodoList todos={todos} deleteToDo={deleteToDo} />
            <AddTodo AddToDo={AddToDo} />
          </VStack>
        </div>
      )}
    </div>
  );
};

export default Profile;
