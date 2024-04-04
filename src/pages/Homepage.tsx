import React from "react";
import { Header } from "../components/header";
// import TodoList from "../components/TodoList";
// import AddTodo from "../components/AddTodo";

import {
  VStack,
  Card,
  CardBody,
  Text,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Image,
  Button,
  Spacer,
  Box,
} from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Box>
      <Header />
      <VStack>
        <Spacer />
        <Tabs align="center" isFitted>
          <TabList>
            <Tab _selected={{ color: "black" }}>About</Tab>
            <Tab _selected={{ color: "black" }}>Contact</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Container minW="container.md">
                <Card>
                  <CardBody>
                    <Stack spacing="1">
                      <Heading>Welcome!</Heading>
                      <Text as="kbd">Love.Care.Learn </Text>
                      <Text>
                        This is your go-to destination for all things parenting!
                        Parenthood is a journey filled with joy, challenges, and
                        countless precious moments. Explore our extensive
                        collection and tools where you can use for day to day
                        parenting needs. Together, let's celebrate the joys of
                        parenthood and support each other through the inevitable
                        twists and turns along the way. We're thrilled to embark
                        on this journey with you!
                      </Text>
                      <Button
                        borderColor="red.600"
                        border="2px"
                        colorScheme="gray"
                        onClick={() =>
                          (window.location.href =
                            "https://stg-id.singpass.gov.sg/auth?scope=openid&state=30e370f9-e38a-42a5-98d2-3cc8d2a75ed4&response_type=code&redirect_uri=https://lovecarelearn4all.netlify.app/Profile&client_id=tLRDBkf1CNy5Rsi34mEKuOD5EpQAwjIq&nonce=" +
                            crypto.randomUUID())
                        }
                      >
                        Login with
                        <Image
                          src="/images/Singpass-logo.png"
                          width="105px"
                          height="20px"
                          paddingLeft="5px"
                          paddingTop="3px"
                        />
                      </Button>
                    </Stack>
                  </CardBody>
                </Card>
              </Container>
            </TabPanel>
            <TabPanel>
              <Container minW="container.md">
                <Card>
                  <CardBody>
                    <Text>
                      Drop an email to <Text as="b">deena.lsy7@gmail.com</Text>
                      for any enquiries.
                    </Text>
                  </CardBody>
                </Card>
              </Container>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};

export default Homepage;
