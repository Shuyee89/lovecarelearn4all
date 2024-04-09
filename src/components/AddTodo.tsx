import React, { useState } from "react";
import { HStack, Button, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";

interface todo {
  id: string;
  body: string;
}
interface AddTodosProps {
  AddToDo: (todo: todo) => void;
}

export const AddTodo: React.FC<AddTodosProps> = ({ AddToDo }) => {
  const toast = useToast();
  function handleSubmit(e: any) {
    e.preventDefault();
    if (!content) {
      toast({
        title: "No content",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body: content,
    };
    AddToDo(todo);
    setcontent("");
  }

  const [content, setcontent] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Input to do"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        ></Input>
        <Button colorScheme="pink" px="8" type="submit">
          Add to Do
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
