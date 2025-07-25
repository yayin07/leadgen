import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const HowItWorks = () => {
  const isMobile = useIsMobile();

  const steps = [
    {
      number: "1",
      title: "Apply Online",
      description:
        "Fill out our simple application form with your basic information and language skills. Takes less than 2 minutes to complete!",
    },
    {
      number: "2",
      title: "Complete Test",
      description:
        "Depending on the task, you may be required to take a test to validate your suitability. We might send you a test before completing any task.",
    },
    {
      number: "3",
      title: "Start Working",
      description:
        "Select from available tasks based on your preferences and schedule. Work as little or as much as you want.",
    },
    {
      number: "4",
      title: "Get Paid Bi-weekly",
      description:
        "Receive payments every two weeks through your preferred payment method. No minimum payout thresholds!",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 w-full">
      <div className={isMobile ? "w-full" : "container"}>
        <div className={`text-center mb-16 ${isMobile ? "px-4" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes it easy to start earning quickly
          </p>
        </div>

        <div className={`relative ${isMobile ? "px-4" : ""}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Frame around the content */}
                <div className="bg-white rounded-xl p-6 h-full border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  {/* Step number with gradient background */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center font-bold text-xl mb-4 shadow-md self-start">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-left">
                      {step.title}
                    </h3>
                    <p className="text-left text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
