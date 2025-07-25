import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const isMobile = useIsMobile();

  const faqs = [
    {
      question: "What skills do I need?",
      answer:
        "You need to be fluent in the language you'll be working with and be good and understanding and following instructions. Some of our tasks require a short test to be completed before being eligible to participate. Training is provided.",
    },
    {
      question: "How much can I earn?",
      answer:
        "Earnings vary based on the type of tasks you complete and how much time you dedicate. You will always see in advance of accepting a task how much you will be paid per task or hour.",
    },
    {
      question: "How many hours can I work?",
      answer:
        "You can work as little or as much as you want! There are no minimum hour requirements. Many of our contributors work 10-20 hours per week, while others work full-time and some just a few hours a month. The platform is designed to offer complete flexibility.",
    },
    {
      question: "When do I get paid?",
      answer:
        "We process payments bi-weekly. Depending on your chosen payment method, funds typically arrive within 1-3 business days after processing.",
    },
    {
      question: "What equipment do I need?",
      answer:
        "You'll need a computer or tablet with a reliable internet connection. Some tasks can even be completed on a smartphone, making this opportunity accessible from virtually anywhere.",
    },
    {
      question: "Can I work from any country?",
      answer:
        "Yes! We have contributors from over 100 countries worldwide. As long as you have internet access and are fluent in at least one of our supported languages, you can work with us regardless of your location.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50 w-full">
      <div
        className={`${
          isMobile ? "w-full px-4" : "container mx-auto max-w-3xl"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
