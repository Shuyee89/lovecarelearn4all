import React from "react";

import { Heading, Center, VStack, Spinner } from "@chakra-ui/react";

interface ProfileProps {
  loadingState: string;
  NRIC: string;
}

export const Profile: React.FC<ProfileProps> = ({ loadingState }, { NRIC }) => {
  console.log(NRIC);
  return (
    <div>
      <VStack>
        <Center>
          {loadingState !== "loaded" && (
            <Heading as="h5" size="sm" marginTop={5}>
              <Spinner color="red.500" />
            </Heading>
          )}
          {loadingState === "loaded" && (
            <Heading as="h5" size="sm" marginTop={5}>
              Hello, {NRIC}
            </Heading>
          )}
        </Center>
      </VStack>
    </div>
  );
};

export default Profile;
