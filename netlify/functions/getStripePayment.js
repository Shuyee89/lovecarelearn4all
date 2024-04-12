
const stripe = require("stripe")(
    "sk_test_51OZwE7Jr15PbubHRg7Mofo6zB4xB1oLmmIExy8XXB36ZPgCUy0mOzX4TKwkiZtBpp0Y0j6MmqsVQdw2XdJGPJypY00ykvzMZne"
  );;

exports.handler = async (event, context) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://serverless-payments.netlify.app/success",
    cancel_url: "https://serverless-payments.netlify.app/cancel",
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      id: session.id,
    }),
  };
};