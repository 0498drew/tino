import React from "react";


const stripe = require("stripe")(STRIPE_SECRET_KEY);


const app = express();

// Route for handling payment
app.post("/api/payment", async (req, res) => {
  const { amount, token } = req.body;

  try {
	const paymentIntent = await stripe.paymentIntents.create({
  	amount: amount,
  	currency: "usd",
  	payment_method_types: ["card"],
  	payment_method: token,
  	confirm: true,
	});

	// Handle successful payment
	// ...

	res.status(200).json({ success: true });
  } catch (error) {
	// Handle payment error
	// ...

	res.status(500).json({ success: false });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
