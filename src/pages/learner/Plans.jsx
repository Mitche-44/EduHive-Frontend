import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import ChangePlanModal from "@/components/modals/ChangePlanModal";

const plans = [
  {
    title: "Free",
    monthly: "$0",
    yearly: "$0",
    features: ["Access to free limited content", "Community access", "Basic support"],
    color: "bg-beige border-blue-gray-300 hover:bg-indigo-300 hover:border-indigo-200",
  },
  {
    title: "Basic",
    monthly: "$25",
    yearly: "$250",
    features: ["Access to basic content", "Community access", "Email support"],
    color: "bg-blue-00 border-blue-300 hover:bg-blue-300 hover:border-blue-200",
  },
  {
    title: "Pro",
    monthly: "$50",
    yearly: "$500",
    features: [
      "Everything in Basic",
      "Advanced modules",
      "Monthly challenges",
    ],
    color: "bg-green-00 border-green-300 hover:bg-green-400 hover:border-green-300",
  },
  {
    title: "Elite",
    monthly: "$100",
    yearly: "$850",
    features: [
      "Everything in Pro",
      "1-on-1 mentorship",
      "Exclusive content",
    ],
    color: "bg-yellow-00 border-yellow-300 hover:bg-yellow-200 hover:border-yellow-400",
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const navigate = useNavigate();

  const handleSubscribe = (plan) => {
    if (Pricing === "Free") {
      alert("You have selected the Free plan. No payment required.");
      navigate("learner/dashboard");
    } else {
        alert(`You have selected the ${plan} plan. Proceeding to payment...`);
        navigate("/learner/payment"); // Adjust this path as needed
    }
    // Redirect to payment page with selected plan and billing cycle
    // navigate(`/payment?plan=${plan.toLowerCase()}&billing=${billingCycle}`);
  };

  const handleSupport = () => {
    // Use a real support route or mail link if available
    window.location.href = "mailto:support@eduhive.com";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6 text-[#182E6F]">Pricing Plans</h1>

      <div className="mb-8">
        <Toggle
          pressed={billingCycle === "yearly"}
          onPressedChange={() =>
            setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
          }
        >
          {billingCycle === "monthly" ? "Switch to Yearly" : "Switch to Monthly"}
        </Toggle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.title}
            className={`rounded-2xl border p-6 shadow-md ${plan.color}`}
          >
            <CardContent>
              <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-3xl font-bold mb-4">
                {billingCycle === "monthly" ? plan.monthly : plan.yearly}
              </p>

              <ul className="text-sm text-left mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="mb-4 w-full"
                onClick={() => handleSubscribe(plan.title)}
              >
                Subscribe
              </Button>

              <Button
                variant="outline"
                className="w-full text-xs"
                onClick={handleSupport}
              >
                Contact Support
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
