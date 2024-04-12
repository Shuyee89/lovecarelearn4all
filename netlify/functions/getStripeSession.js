// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51OZwE7Jr15PbubHRg7Mofo6zB4xB1oLmmIExy8XXB36ZPgCUy0mOzX4TKwkiZtBpp0Y0j6MmqsVQdw2XdJGPJypY00ykvzMZne"
);

exports.handler = async (event, context) => {
  try {
    const sessionid = event.queryStringParameters.session_id;
    const session = await stripe.checkout.sessions.retrieve(sessionid);
    console.log(session.status);
    console.log(session.customer_details.email);
    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          status: session.status,
          customer_email: session.customer_details.email,
        },
      }),
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
