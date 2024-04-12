const stripe = require("stripe")(
  "sk_test_51OZwE7Jr15PbubHRg7Mofo6zB4xB1oLmmIExy8XXB36ZPgCUy0mOzX4TKwkiZtBpp0Y0j6MmqsVQdw2XdJGPJypY00ykvzMZne"
);
const YOUR_DOMAIN = "https://lovecarelearn4all.netlify.app";

exports.handler = async (event, context) => {
  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1P4dDOJr15PbubHRzuTd5RNK",
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ data: {clientSecret: session.client_secret}}),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ data: e }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
