import React, { useEffect, useState } from "react";
import { Subheader } from "../components/subheader";
import { Heading, Center, VStack } from "@chakra-ui/react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

export const Profile: React.FC = () => {
  const initialtodo = [
    {
      id: "1",
      body: "Stand up and Stretch even 30 mins",
    },
  ];

  //   const initialtodo2 = [
  //     {
  //       id: "1",
  //       body: "Stand u2p and Stretch even 30 mins",
  //     },
  //   ];

  interface todo {
    id: string;
    body: string;
  }
  //   const isEmptyArray = (obj: any): boolean => {
  //     return Array.isArray(obj) && obj.length === 0;
  //   };
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
      <Subheader />
      <VStack>
        <Center>
          <Heading as="h5" size="sm" marginTop={5}>
            Hello, Testing Page
          </Heading>
        </Center>
        <TodoList todos={todos} deleteToDo={deleteToDo} />
        <AddTodo AddToDo={AddToDo} />
      </VStack>
    </div>
  );
};

export default Profile;
