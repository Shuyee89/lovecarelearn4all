import React from "react";
// import { FaSun, FaMoon } from "react-icons/fa";
import { Image, Flex, Heading, Box, Center } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Box bgGradient="linear(to-l, #7928CA, #FF0080)" w="100%">
      <Center>
        <Flex alignItems="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="images/Parenthood.png"
          />
          <Heading padding="10" fontWeight="extrabold" size="2xl">
            Love . Care . Learn
          </Heading>
        </Flex>
      </Center>
    </Box>
  );
};

export default Header;
