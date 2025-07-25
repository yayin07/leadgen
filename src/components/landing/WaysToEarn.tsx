import React, { useState } from "react";
import {
  Check,
  Text,
  Eye,
  Pencil,
  Star,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const WaysToEarn = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const earningMethods = [
    {
      icon: <Text className="h-6 w-6 text-blue-500" />,
      title: "Translation & Localization",
      description:
        "Help translate content from one language to another or review existing translations for accuracy and cultural relevance.",
      payments: "$20-30/hour",
      requirements: "Fluency in two or more languages",
    },
    {
      icon: <Pencil className="h-6 w-6 text-green-500" />,
      title: "Text Classification",
      description:
        "Categorize text data into predefined categories to help AI learn to recognize and sort different types of content.",
      payments: "$18-25/hour",
      requirements: "Attention to detail",
    },
    {
      icon: <Eye className="h-6 w-6 text-purple-500" />,
      title: "Conversation & Phrasing",
      description:
        "Write and review conversations to train AI systems on natural dialogue patterns and appropriate responses.",
      payments: "$22-28/hour",
      requirements: "Strong communication skills",
    },
    {
      icon: <Pencil className="h-6 w-6 text-amber-500" />,
      title: "Content Creation",
      description:
        "Create original content in your native language to help AI models learn diverse writing styles and topics.",
      payments: "$25-35/hour",
      requirements: "Creative writing abilities",
    },
    {
      icon: <Star className="h-6 w-6 text-red-500" />,
      title: "Quality Rating",
      description:
        "Rate AI outputs for accuracy, helpfulness, and naturalness to help improve model performance and reliability.",
      payments: "$14-20/hour",
      requirements: "Critical thinking skills",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      title: "Innovative Content Creation",
      description:
        "Develop creative solutions for specialized content needs across various domains and subject matters.",
      payments: "$30-40/hour",
      requirements: "Domain expertise",
    },
  ];
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };
  const scrollToForm = () => {
    if (isMobile) {
      // Safely access the global function we created in Index.tsx
      if (
        typeof window !== "undefined" &&
        "openMobileApplicationForm" in window
      ) {
        window.openMobileApplicationForm();
      }
    } else {
      document.getElementById("application-form")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="ways-to-earn"
      className="py-20 bg-gradient-to-br from-white to-purple-50"
    >
      <div className="container px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Examples of past tasks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get notified as soon as new tasks become available
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
          }}
        >
          {earningMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={item}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg border-border/60"
                style={{
                  transform: hoveredCard === index ? "scale(1.03)" : "scale(1)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  boxShadow:
                    hoveredCard === index
                      ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      : "",
                }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-lg ${
                        hoveredCard === index ? "bg-primary/10" : "bg-muted"
                      } transition-colors duration-300`}
                    >
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold">{method.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {method.description}
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <Badge
                        variant="outline"
                        className="bg-primary/5 text-primary font-medium"
                      >
                        Average Pay
                      </Badge>
                      <span className="font-bold text-primary">
                        {method.payments}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{method.requirements}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
      </div>
    </section>
  );
};
export default WaysToEarn;
