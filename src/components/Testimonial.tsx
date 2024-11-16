import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import React from "react";

interface Testimonial {
  text: string;
  author: string;
  title: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      text: '"This coffee shop is absolutely amazing! From the welcoming aroma of coffee at the entrance to the perfect taste in every sip, it\'s unrivaled. The baristas are friendly and very professional, they even recommended a coffee that would suit my taste. This place is heaven for coffee lovers!"',
      author: "Alex",
      title: "Customer",
    },
    {
      text: '"I fell in love with the atmosphere of this coffee shop. The aesthetic decor and soft music make it a perfect place to relax or work. Plus, the food menu is also very good—their croissants and cappuccinos are the best pairing!"',
      author: "Axel",
      title: "Customer",
    },
    {
      text: '"The coffee here is amazing. It tastes so authentic and the beans are premium quality. I tried their iced milk coffee and it was really balanced, not too sweet. Highly recommended for true coffee lovers!"',
      author: "Sarah",
      title: "Customer",
    },
    {
      text: '"The service at this coffee shop is amazing! The staff is very friendly and attentive. They explain every menu in detail and even give recommendations for a better coffee experience. I feel very valued as a customer."',
      author: "Lisa",
      title: "Customer",
    },
    {
      text: '""This shop has become my favorite place to meet friends. The space is spacious and comfortable, and their coffee is always the star of the show. Their signature latte is very unique and different from other places. Will definitely be coming back here often!""',
      author: "Risa",
      title: "Customer",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-900 bg-blend-color-burn">
      <div className="absolute inset-0 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b backdrop-blur-sm"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="container mx-auto mb-20 px-4 md:px-8">
              <h2 className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                Testimonials
              </h2>
              <div className="h-1 w-24 rounded-full bg-amber-400"></div>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/2"
                  >
                    <Card className="flex flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800 bg-gray-800/50 p-8 shadow-lg backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="flex-1 p-6">
                          <div className="mb-4 flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-6 w-6 fill-amber-400 text-amber-400"
                              />
                            ))}
                          </div>
                          <p className="mb-4 leading-relaxed text-gray-300">
                            {testimonial.text}
                          </p>
                          <div className="flex items-center">
                            <h3 className="text-xl font-bold text-white">
                              {testimonial.author}
                            </h3>
                            <span className="ml-2 text-gray-400">
                              - {testimonial.title}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
