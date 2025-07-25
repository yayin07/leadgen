import React from "react";
import { Quote } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
const Testimonials = () => {
  const isMobile = useIsMobile();
  const testimonials = [
    {
      name: "Sarah K.",
      role: "University Student",
      location: "Madrid, Spain",
      testimonial:
        "I've been able to completely fund my studies through this platform. The flexible schedule allows me to work between classes, and the bi-weekly payments help me manage my expenses.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Miguel J.",
      role: "Post-graduate",
      location: "São Paulo, Brazil",
      testimonial:
        "Working with Argos has been a fantastic experience. The tasks are actually interesting, the platform is easy to use, and I've improved my language skills while earning a steady income.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/86.jpg",
    },
    {
      name: "Anna M.",
      role: "Part-time Educator",
      location: "Warsaw, Poland",
      testimonial:
        "As someone who teaches part-time, this has been the perfect supplemental income. The work is meaningful - you're actually helping improve AI systems that millions will use!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/67.jpg",
    },
  ];

  // Render testimonial card - extracted to avoid repetition
  const renderTestimonialCard = (
    testimonial: (typeof testimonials)[0],
    index: number
  ) => (
    <div
      key={index}
      className={`p-6 rounded-lg border border-border bg-white hover:shadow-lg transition-all h-full flex flex-col ${
        isMobile ? "" : ""
      }`}
    >
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.location}
            </p>
          </div>
        </div>
        <Quote className="h-6 w-6 text-secondary/70" />
      </div>

      <div className="mb-4">
        <div className="flex gap-0.5 text-secondary">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>

      <p className="text-muted-foreground italic flex-grow">
        {testimonial.testimonial}
      </p>
    </div>
  );
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-8 md:mb-16"
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
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            What Our Contributors Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied contributors from around the world
          </p>
        </motion.div>

        {isMobile ? (
          // Mobile view - carousel/slider
          <div className="px-4">
            <Carousel
              className="w-full"
              opts={{
                loop: true,
                align: "center",
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="basis-full h-[450px]">
                    {renderTestimonialCard(testimonial, index)}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-6">
                <CarouselPrevious className="static translate-y-0 mr-2" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        ) : (
          // Desktop view - grid layout
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) =>
              renderTestimonialCard(testimonial, index)
            )}
          </div>
        )}
      </div>
    </section>
  );
};
export default Testimonials;
