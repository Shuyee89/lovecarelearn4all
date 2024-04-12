import React, { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OZwE7Jr15PbubHRpjinDMlV0qNIJlWPPBbhqXjuM7QXdBJJgsh2AGxJU1Pc8KQAgWeDCYxbCYyWuxT9TcSJTeKy00MZhQ6Zxg"
);

export const Payment: React.FC = () => {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/.netlify/functions/getStripePayment", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);
  const options = { fetchClientSecret };

  return (
    <div>
      {" "}
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default Payment;
