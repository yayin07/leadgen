import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Info } from "lucide-react";
const HowAIWorks = () => {
  const isMobile = useIsMobile();
  const aiExamples = [
    {
      name: "ChatGPT",
      description: "Uses human feedback to improve conversational abilities",
      icon: "🤖",
    },
    {
      name: "Gemini",
      description:
        "Relies on human evaluators to refine multimodal understanding",
      icon: "🧠",
    },
    {
      name: "Grok",
      description:
        "Incorporates human input to enhance its reasoning capabilities",
      icon: "💡",
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-[25%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className={isMobile ? "px-4" : "container"}>
        <motion.div
          className="text-center mb-12"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Modern <span className="gradient-text">AI Systems</span>{" "}
            Actually Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the human contribution behind artificial intelligence
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-xl border border-border shadow-md p-6 md:p-8 mb-10 relative z-10"
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
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
        >
          <p className="text-lg mb-6 leading-relaxed">
            Did you know that today's most advanced AI systems—like ChatGPT,
            Gemini, and Grok—rely heavily on human input to learn and improve?
            It's true. Every smart response, accurate translation, or helpful
            search result you see is the result of real people behind the
            scenes—people just like you—who help shape the AI models we use
            every day.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            From refining search engine results to enhancing translation tools
            like Google Translate, humans are helping AI to understand and
            communicate more effectively.
          </p>

          <div className="flex items-center text-primary gap-2 mb-6">
            <Info className="h-5 w-5" />
            <p className="text-sm font-medium">
              This is where your contribution makes a difference
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            staggerChildren: 0.1,
            delayChildren: 0.3,
          }}
          viewport={{
            once: true,
          }}
        >
          {aiExamples.map((example, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="h-full hover:shadow-md transition-shadow cursor-pointer bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{example.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 text-primary">
                        {example.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {example.description}
                      </p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{example.name}</h4>
                    <p className="text-sm">
                      Trained through a process that requires thousands of human
                      contributors providing feedback and examples to help the
                      AI learn and improve.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default HowAIWorks;
