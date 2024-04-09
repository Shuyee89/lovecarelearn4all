import React from "react";
import { Image, Flex, Heading, Box, Center } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  Button,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export const Subheader: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box w="100%">
      <Flex>
        <Image borderRadius="full" boxSize="80px" src="images/Parenthood.png" />
        <Center>
          <Menu>
            <MenuButton as={Button} marginLeft={5} variant="outline">
              Menu 1
            </MenuButton>
            <MenuButton as={Button} marginLeft={5} variant="outline">
              Menu 2
            </MenuButton>
            <MenuButton as={Button} marginLeft={5} variant="outline">
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
    </Box>
  );
};

export default Subheader;
