import React from "react";
import {
  Clock,
  Users,
  Check,
  Laptop,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Benefits = () => {
  const isMobile = useIsMobile();
  const mainBenefits = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Flexible Hours",
      description: "Work when you want",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Interest tasks",
      description: "That match your skill",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Grow",
      description: "Become an expert in this growing industry",
    },
  ];
  const additionalBenefits = [
    "Work as little or as much as you want",
    "No minimum weekly hours required",
    "Choose assignments that interest you",
    "Training provided - no experience needed",
    "Join a global community of contributors",
    "Opportunities to grow your skills",
  ];

  // Animation variants
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
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const scrollToForm = () => {
    if (isMobile) {
      // Safely access the global function we created in Index.tsx
      if (
        typeof window !== "undefined" &&
        "openMobileApplicationForm" in window
      ) {
        // @ts-ignore - Using the global function we created in Index.tsx
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
      id="benefits"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className={isMobile ? "px-0" : "container"}>
        <motion.div
          className={`text-center mb-12 ${isMobile ? "px-4" : ""}`}
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
            Benefits of Working With{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Argos Multilingual
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of language contributors worldwide who enjoy the
            flexibility and competitive pay of our platform.
          </p>
        </motion.div>

        {isMobile ? (
          <div className="mb-12">
            <Carousel className="w-full">
              <CarouselContent>
                {mainBenefits.map((benefit, index) => (
                  <CarouselItem key={index} className="md:basis-1/1">
                    <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white border border-border shadow-lg h-full mx-4">
                      <div className="mb-5 rounded-full bg-primary/10 p-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-4">
                <CarouselPrevious className="static transform-none h-10 w-10 rounded-full border-primary hover:bg-primary/10 hover:text-primary mr-2">
                  <ChevronLeft className="h-6 w-6" />
                </CarouselPrevious>
                <CarouselNext className="static transform-none h-10 w-10 rounded-full border-primary hover:bg-primary/10 hover:text-primary ml-2">
                  <ChevronRight className="h-6 w-6" />
                </CarouselNext>
              </div>
            </Carousel>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-100px",
            }}
          >
            {mainBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-xl bg-white border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                variants={item}
                whileHover={{
                  y: -5,
                }}
              >
                <div className="mb-5 rounded-full bg-primary/10 p-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Banner with Mission Statement and Image - Enhanced with lighting effects */}
        <motion.div
          className={`mb-12 overflow-hidden rounded-xl border border-border shadow-md ${
            isMobile ? "mx-0 rounded-none border-l-0 border-r-0" : ""
          }`}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text Content */}
            <div className="p-8 md:p-10 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold mb-5">
                  Join Our Global Community
                </h3>
                <p className="text-base mb-6">
                  We work directly with some of the world's leading tech
                  companies to improve the AI revolution.
                </p>
                <p className="text-base mb-6">
                  And now, we're inviting you to join thousands of global
                  contributors who are already getting paid to help improve AI
                  systems—on your own schedule, from anywhere in the world.
                </p>
                <Button
                  onClick={scrollToForm}
                  className="bg-gradient-to-r from-argos-green to-argos-teal hover:from-argos-green/90 hover:to-argos-teal/90 text-white rounded-full px-6"
                >
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Enhanced Image with lighting effects and shading */}
            <div className="relative overflow-hidden h-full min-h-[360px]">
              {/* Light effects overlay */}
              <div className="absolute top-0 left-0 w-full h-full z-10">
                {/* Top-left light orb */}
                <div className="absolute top-[10%] left-[15%] w-24 h-24 rounded-full bg-primary/30 blur-2xl animate-pulse"></div>

                {/* Bottom-right light orb */}
                <div
                  className="absolute bottom-[20%] right-[10%] w-32 h-32 rounded-full bg-secondary/30 blur-2xl animate-pulse"
                  style={{ animationDelay: "1.5s", animationDuration: "4s" }}
                ></div>

                {/* Light ray effect */}
                <div
                  className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-primary/10 to-transparent 
                     rotate-15 transform-origin-top-right opacity-70"
                ></div>

                {/* Multiple small light particles */}
                <div className="absolute top-[30%] right-[25%] w-12 h-12 rounded-full bg-white/30 blur-xl"></div>
                <div className="absolute top-[60%] left-[35%] w-10 h-10 rounded-full bg-white/20 blur-lg"></div>
                <div className="absolute bottom-[15%] left-[20%] w-8 h-8 rounded-full bg-white/30 blur-lg"></div>
              </div>

              <motion.div
                className="absolute inset-0"
                initial={{
                  scale: 1.05,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{
                  once: true,
                }}
              >
                <div className="relative w-full h-full">
                  {/* Enhanced gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 mix-blend-overlay z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/30 z-10"></div>

                  {/* Subtle vignette effect */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30 opacity-60 z-10"></div>

                  <div className="absolute z-20 bottom-4 right-4 bg-white/90 p-3 rounded-lg shadow-md flex items-center gap-2 border border-white backdrop-blur-sm">
                    <Laptop className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">
                      Collaborate remotely
                    </span>
                  </div>
                  <img
                    src="/lovable-uploads/896b7906-4906-40b3-b8d0-2669dff57577.png"
                    alt="Diverse global community of contributors"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border shadow-md ${
            isMobile ? "rounded-none border-l-0 border-r-0 p-6" : "p-10"
          }`}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
        >
          <h3 className="text-xl font-bold mb-8 text-center">
            Additional Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.1 * index,
                }}
                viewport={{
                  once: true,
                }}
              >
                <div className="mt-1 rounded-full bg-secondary/20 p-1 shadow-sm">
                  <Check className="h-4 w-4 text-secondary" />
                </div>
                <p className="font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
