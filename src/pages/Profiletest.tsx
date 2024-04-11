import React from "react";
import { Heading, Center, VStack } from "@chakra-ui/react";



export const Profile: React.FC = () => {
  return (
    <div>
      <VStack>
        <Center>
          <Heading as="h5" size="sm" marginTop={5}>
            Hello, Testing Page
          </Heading>
        </Center>
      </VStack>
    </div>
  );
};

export default Profile;
