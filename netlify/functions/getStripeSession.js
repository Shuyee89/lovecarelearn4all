// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51OZwE7Jr15PbubHRg7Mofo6zB4xB1oLmmIExy8XXB36ZPgCUy0mOzX4TKwkiZtBpp0Y0j6MmqsVQdw2XdJGPJypY00ykvzMZne"
);

exports.handler = async (event, context) => {
  try {
    const sessionid = event.queryStringParameters.session_id;
    const session = await stripe.checkout.sessions.retrieve(sessionid);
    return {
      statusCode: 200,
      body: JSON.stringify({ status: session.payment_status, email: session.customer_details.email }),
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
