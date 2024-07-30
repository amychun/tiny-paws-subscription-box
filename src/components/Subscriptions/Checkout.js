// src/components/Subscriptions/Checkout.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      setError(result.error.message);
    } else {
      setError(null);
      console.log(result.token);
      // Send the token to your server to process the payment
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div>{error}</div>}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const Checkout = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const planId = query.get("plan");

  return (
    <Elements stripe={stripePromise}>
      <h1>Checkout for Plan {planId}</h1>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
