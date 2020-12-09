const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HwCcnFZ3aUNhqyFQjJxXWz23u5bdbfpcYN5DH5AtgGvGkWCGb2Xb86pi8SQUB48auiAjVM9XE2RbYRO5YMAWh7p00m9z3SpZo"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

//from payment.js
app.post("/payments/create", async (request, response) => {
  const total = request.query.total; //grabbing from payment.js /payment/create?total
//   console.log("payment request recieved boom! for this amount: ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  }); // OK - Created
});

// - Listent Command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-f48db/us-central1/api
