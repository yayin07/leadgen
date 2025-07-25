"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Toaster } from "sonner";
import Header from "@/components/common/Header";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import HowItWorks from "@/components/landing/HowItWorks";
import HowAIWorks from "@/components/landing/HowAIWorks";
import WaysToEarn from "@/components/landing/WaysToEarn";
import Footer from "@/components/common/Footer";
import Testimonials from "@/components/landing/Testimonials";
import WhyLoveUs from "@/components/landing/WhyLoveUs";
import PaymentMethods from "@/components/landing/PaymentMethods";
import ApplicationForm from "@/components/landing/ApplicationForm";
import FAQ from "@/components/landing/FAQ";
import MobileApplicationForm from "@/components/landing/MobileApplicationForm";

const Index = () => {
  const [isMobileFormOpen, setIsMobileFormOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Create a global function to open the mobile form
    // @ts-ignore - Adding a property to the window object
    window.openMobileApplicationForm = () => {
      setIsMobileFormOpen(true);
    };

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      // @ts-ignore - Removing the property from the window object
      delete window.openMobileApplicationForm;
    };
  }, []);

  const handleOpenMobileForm = () => {
    setIsMobileFormOpen(true);
  };

  const handleCloseMobileForm = () => {
    setIsMobileFormOpen(false);
  };

  const scrollToForm = () => {
    if (isMobile) {
      handleOpenMobileForm();
    } else {
      document
        .getElementById("application-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      <div className="flex mx-auto min-h-screen flex-col">
        <Toaster position="top-center" richColors closeButton />
        <Header openMobileForm={handleOpenMobileForm} />
        <main className="flex-1 mx-auto">
          <Hero openMobileForm={handleOpenMobileForm} />
          <Benefits />
          <HowItWorks />
          <HowAIWorks />
          <WaysToEarn />
          <motion.div
            className="bg-gradient-to-r from-[#1e7a7a]/10 to-[#3AA383]/10 py-16 px-4 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-10 left-10 w-24 h-24 bg-[#3AA383]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#1e7a7a]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto text-center relative z-10">
              <motion.h2
                className="text-2xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to Start Earning?
              </motion.h2>
              <motion.p
                className="text-lg mb-10 max-w-xl mx-auto text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Join thousands of people already earning extra cash with Argos
                Multilingual
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToForm}
                  className="px-8 py-6 bg-gradient-to-r from-[#00a76f] to-[#0a8b9e] text-white font-medium text-lg rounded-full hover:from-[#00a76f]/90 hover:to-[#0a8b9e]/90 transition-colors shadow-lg"
                >
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <Testimonials />
          <WhyLoveUs />
          <PaymentMethods />
          {/* Hide the application form on mobile */}
          <div className={isMobile ? "hidden" : "block"}>
            <ApplicationForm />
          </div>
          <FAQ />
        </main>
        <Footer />

        {/* Mobile Application Form Sheet */}
        <MobileApplicationForm
          isOpen={isMobileFormOpen}
          onClose={handleCloseMobileForm}
        />
      </div>
    </AnimatePresence>
  );
};

export default Index;
