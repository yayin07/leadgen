import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import BG from "../../../public/bg.jpg";

interface HeroProps {
  openMobileForm: () => void;
}

const Hero = ({ openMobileForm }: HeroProps) => {
  const isMobile = useIsMobile();

  const scrollToForm = () => {
    if (isMobile) {
      openMobileForm();
    } else {
      const formElement = document.getElementById("application-form");
      if (formElement) {
        formElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full overflow-hidden">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={BG}
              alt="Diverse global community"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Enhanced overlay with multiple layers for depth and light effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/60">
            {/* Adding ambient light effects */}
            <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-t from-transparent via-[#00a76f]/5 to-[#0a8b9e]/10"></div>

            {/* Decorative light spheres/glows */}
            <div className="absolute top-20 right-20 w-56 h-56 bg-[#0a8b9e]/20 blur-3xl rounded-full"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00a76f]/15 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[#0a8b9e]/10 blur-3xl rounded-full"></div>

            {/* Subtle moving highlights */}
            <div className="absolute top-10 left-40 w-6 h-24 bg-white/5 rotate-45 blur-sm animate-float"></div>
            <div
              className="absolute top-1/2 right-60 w-8 h-36 bg-white/5 -rotate-45 blur-sm animate-float"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00a76f]/10 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          className="max-w-3xl md:ml-6"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          {!isMobile}

          <motion.h1
            className="mb-5 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            Master AI &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00a76f] to-[#0a8b9e]">
              Help Improve
            </span>{" "}
            AI
          </motion.h1>

          <motion.p
            className="mb-6 text-base md:text-xl text-white/90 max-w-2xl"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >
            {isMobile
              ? "Join thousands getting paid to help make AI smarter."
              : "Systems like ChatGPT, Gemini, and Grok rely on human input to improve. Join thousands of global contributors already getting paid to provide the data that makes AI smarter."}
          </motion.p>

          {/* Updated benefits section with consistent styling for all items */}
          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
          >
            {!isMobile && (
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#00a76f]"></span>
                No experience needed
              </div>
            )}

            {!isMobile && (
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#00a76f]"></span>
                Work from anywhere
              </div>
            )}

            {!isMobile && (
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#00a76f]"></span>
                Bi-weekly payments
              </div>
            )}
          </motion.div>

          {/* Mobile benefits - updated to match desktop styles */}
          <motion.div
            className="flex flex-col gap-3 mb-8"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
          >
            {isMobile && (
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm text-white backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#00a76f]"></span>
                <p className="text-white text-sm font-medium">
                  No experience needed
                </p>
              </div>
            )}

            {isMobile && (
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm text-white backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#00a76f]"></span>
                <p className="text-white text-sm font-medium">
                  Work from anywhere
                </p>
              </div>
            )}

            {isMobile && (
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm text-white backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#00a76f]"></span>
                <p className="text-white text-sm font-medium">
                  Bi-weekly payments
                </p>
              </div>
            )}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.7,
            }}
          >
            <Button
              onClick={scrollToForm}
              size={isMobile ? "default" : "lg"}
              className={`bg-gradient-to-r from-[#00a76f] to-[#0a8b9e] hover:from-[#00a76f]/90 hover:to-[#0a8b9e]/90 text-white ${
                isMobile ? "px-6 py-5" : "px-8 py-6 text-lg"
              } shadow-lg relative overflow-hidden group`}
            >
              Apply Now{" "}
              {!isMobile && (
                <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
