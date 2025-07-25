import React from "react";

const PaymentMethods = () => {
  const paymentOptions = [
    {
      name: "PayPal",
      icon: "💰",
      description: "Receive payments directly to your PayPal account",
    },
    {
      name: "Direct Deposit",
      icon: "🏦",
      description: "Get earnings deposited to your bank account",
    },
    {
      name: "Venmo/Cash App",
      icon: "📱",
      description: "Use popular mobile payment platforms",
    },
    {
      name: "Tango Cards",
      icon: "🎁",
      description: "Redeem earnings for gift cards from popular retailers",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get Paid Your Way
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {paymentOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-border bg-white hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{option.icon}</div>
              <h3 className="text-lg font-bold mb-1 text-center">
                {option.name}
              </h3>
              <p className="text-xs text-muted-foreground text-center">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
