import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
const WhyLoveUs = () => {
  const isMobile = useIsMobile();
  const features = [
    {
      icon: "🔵",
      title: "Get Paid Your Way",
      description:
        "Choose from multiple payment methods including PayPal, direct deposit, and mobile money options that work for you. Get paid bi-weekly with no delays.",
    },
    {
      icon: "🟣",
      title: "Zero Experience Required",
      description:
        "If you can read and write in your language, you can start today. Our intuitive platform makes it easy to learn as you earn, with no technical skills needed.",
    },
    {
      icon: "🟢",
      title: "Work From Literally Anywhere",
      description:
        "Work on your laptop, tablet, or even smartphone. All you need is an internet connection to start earning from home, coffee shops, or while traveling.",
    },
    {
      icon: "🟠",
      title: "Refer Your Friends",
      description:
        "Earn additional income by referring your network. For each person who joins through your link and completes tasks, you'll receive bonus payments.",
    },
  ];
  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className={isMobile ? "w-full" : "container"}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            isMobile ? "px-4" : ""
          }`}
        >
          We Make it Easy to Work With US
        </h2>

        {isMobile ? (
          <div className="w-full">
            <Carousel className="w-full">
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="md:basis-1/1">
                    <div className="p-6 rounded-lg bg-white border border-border shadow-sm h-full mx-4">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">{feature.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-primary">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default WhyLoveUs;
