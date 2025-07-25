import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  openMobileForm: () => void;
}

const Header = ({ openMobileForm }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const scrollToForm = () => {
    if (isMobile) {
      openMobileForm();
    } else {
      const formElement = document.getElementById("application-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const headerClass = scrolled
    ? "sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border shadow-sm transition-all duration-200"
    : "sticky top-0 z-50 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-border/50 transition-all duration-200";

  return (
    <header className={headerClass}>
      <div className="container mx-auto flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-argos-green to-argos-teal">
            Argos Multilingual
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("benefits")}
            className="hover:bg-argos-green/10 hover:text-argos-green"
          >
            Benefits
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("ways-to-earn")}
            className="hover:bg-argos-green/10 hover:text-argos-green"
          >
            Ways to Earn
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("how-it-works")}
            className="hover:bg-argos-green/10 hover:text-argos-green"
          >
            How It Works
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("testimonials")}
            className="hover:bg-argos-green/10 hover:text-argos-green"
          >
            Testimonials
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("faq")}
            className="hover:bg-argos-green/10 hover:text-argos-green"
          >
            FAQ
          </Button>
          <Button
            onClick={scrollToForm}
            className="ml-2 bg-gradient-to-r from-argos-green to-argos-teal hover:from-argos-green/90 hover:to-argos-teal/90 text-white"
          >
            Apply Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            onClick={openMobileForm}
            className="mr-2 bg-gradient-to-r from-argos-green to-argos-teal hover:from-argos-green/90 hover:to-argos-teal/90 text-white"
          >
            Apply
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white/95 backdrop-blur-lg border-b border-border shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-argos-green/10 hover:text-argos-green"
              onClick={() => scrollToSection("benefits")}
            >
              Benefits
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-argos-green/10 hover:text-argos-green"
              onClick={() => scrollToSection("ways-to-earn")}
            >
              Ways to Earn
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-argos-green/10 hover:text-argos-green"
              onClick={() => scrollToSection("how-it-works")}
            >
              How It Works
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-argos-green/10 hover:text-argos-green"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-argos-green/10 hover:text-argos-green"
              onClick={() => scrollToSection("faq")}
            >
              FAQ
            </Button>
            <Button
              onClick={openMobileForm}
              className="w-full bg-gradient-to-r from-argos-green to-argos-teal hover:from-argos-green/90 hover:to-argos-teal/90 text-white"
            >
              Apply Now
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
