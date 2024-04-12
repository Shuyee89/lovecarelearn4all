// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51OZwE7Jr15PbubHRg7Mofo6zB4xB1oLmmIExy8XXB36ZPgCUy0mOzX4TKwkiZtBpp0Y0j6MmqsVQdw2XdJGPJypY00ykvzMZne"
);

exports.handler = async (event, context) => {
  try {
    const sessionid = event.queryStringParameters.session_id;
    console.log("A" + sessionid);
    const session = await stripe.checkout.sessions.retrieve(sessionid);
    const email = session.customer_details.email;
    const ps = session.payment_status;
    console.log(ps);
    console.log(email);
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
