import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  VStack,
  Alert,
  Center,
  AlertIcon,
  Button,
  Box,
} from "@chakra-ui/react";
import { Header } from "../components/header";

const Return = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to the desired page
    navigate("/Homepage");
  };

  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");
    fetch(`/.netlify/functions/getStripeSession?session_id=${sessionId}`)
      // fetch(`/.netlify/functions/getStripeSession?session_id=" + ${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.email);
      });
  }, []);

  return (
    <VStack>
      <Header />
      {status === "paid" && (
        <Box>
          <Alert status="success">
            <AlertIcon />
            We appreciate your business! A confirmation email will be sent to{" "}
            {customerEmail}. If you have any questions, please email{" "}
            deena.lsy7@gmail.com
          </Alert>
          <Center>
            <Button
              colorScheme="teal"
              variant="outline"
              marginTop="10px"
              onClick={handleClick}
            >
              Return to Homepage
            </Button>
          </Center>
        </Box>
      )}
      {status === "unpaid" && <Navigate to="/Homepage" />}
    </VStack>
  );
};

export default Return;
