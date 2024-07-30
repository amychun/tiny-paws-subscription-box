// src/components/Subscriptions/SubscriptionPlans.js
import React from "react";
import { Link } from "react-router-dom";

const SubscriptionPlans = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "$10/month",
      features: ["Feature 1", "Feature 2"],
    },
    {
      id: 2,
      name: "Premium Plan",
      price: "$20/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ];

  return (
    <div>
      <h1>Subscription Plans</h1>
      <div>
        {plans.map((plan) => (
          <div key={plan.id}>
            <h2>{plan.name}</h2>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Link to={`/checkout?plan=${plan.id}`}>Choose Plan</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
