import React, { useState } from "react";
import { Image, Flex, Heading, Box, Center } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  Button,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import Payment from "../pages/Payment";

export const Subheader: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [showSubComponent, setShowSubComponent] = useState(false);

  return (
    <Box w="100%">
      <Flex>
        <Image borderRadius="full" boxSize="80px" src="images/Parenthood.png" />
        <Center>
          <Menu>
            <MenuButton as={Button} marginLeft={5} variant="outline">
              Menu 1
            </MenuButton>
            <MenuButton
              as={Button}
              marginLeft={5}
              variant="outline"
              onClick={() => {
                setShowSubComponent(true);
              }}
            >
              Payment
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
      {showSubComponent && <Payment />}
    </Box>
  );
};

export default Subheader;
