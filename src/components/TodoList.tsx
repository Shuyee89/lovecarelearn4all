import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";

interface todos {
  id: string;
  body: string;
}

interface todoProps {
  todos: todos[];
  deleteToDo: (id: string) => void;
}

export const TodoList: React.FC<todoProps> = ({ todos, deleteToDo }) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No To dos, yay!
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            aria-label="Trash"
            icon={<FaRegTrashAlt />}
            isRound={true}
            onClick={() => deleteToDo(todo.id)}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};
export default TodoList;
